import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const S = 180, ink = "#111";
const frame = '<rect x="5" y="5" width="170" height="170" rx="9" fill="white" stroke="#111" stroke-width="2.5"/>';
const unknown = frame + '<text x="90" y="122" text-anchor="middle" font-family="Arial" font-size="88" font-weight="700">?</text>';
const normalize = n => (n % 360 + 360) % 360;
const rotate = (body, angle) => `<g transform="rotate(${angle} 90 90)">${body}</g>`;
const point = (angle, radius) => { const a = (angle - 90) * Math.PI / 180; return [90 + radius*Math.cos(a), 90 + radius*Math.sin(a)].map(x=>+x.toFixed(3)); };
const circle = (x,y,r,fill="white",width=2.5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${ink}" stroke-width="${width}"/>`;
const line = (x,y,x2,y2,width=3) => `<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="${ink}" stroke-width="${width}" stroke-linecap="round"/>`;
const svg = (body,width=S,height=S) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img"><defs><pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="7" height="7" fill="white"/><path d="M0 0V7" stroke="#111" stroke-width="2"/></pattern></defs><rect width="${width}" height="${height}" fill="white"/>${body}</svg>`;
const group = (body,x,y=0) => `<g transform="translate(${x} ${y})">${body}</g>`;
const strip = cells => svg(cells.map((c,i)=>group(c,8+i*192,8)).join(""),cells.length*192+4,196);
const matrix = cells => svg(cells.map((c,i)=>group(c,8+(i%3)*188,8+Math.floor(i/3)*188)).join(""),572,572);
const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);

function analogyCell(state) {
  const shield = `<path d="M90 34L133 56L124 116L90 145L56 116L47 56Z" fill="${state.solid?ink:'white'}" stroke="#111" stroke-width="3"/>`;
  const fill = state.solid ? "white" : ink;
  const radius = state.inside ? 23 : 72;
  const [cx,cy] = point(state.tokenAngle-35,radius), [sx,sy] = point(state.tokenAngle+60,radius);
  const symbols = circle(cx,cy,6,fill,2) + `<rect x="${sx-6}" y="${sy-6}" width="12" height="12" fill="${fill}" stroke="#111" stroke-width="2"/>`;
  return frame + rotate(shield,state.bodyAngle) + symbols;
}
const analogyNext = s => ({bodyAngle:normalize(s.bodyAngle+90),solid:!s.solid,tokenAngle:normalize(s.tokenAngle-90),inside:!s.inside});

const rotorBase = circle(90,90,53,"white",3) + circle(90,90,34,"white",2)
  + '<path d="M90 34L110 57H99V127H81V57H70Z" fill="#111"/>'
  + '<path d="M117 77L137 89L119 110Z" fill="url(#hatch)" stroke="#111" stroke-width="2.5"/>'
  + circle(36,142,7,ink) + circle(145,38,5,"white",2);
function rotorCell(state) {
  const body = state.mirror ? `<g transform="translate(180 0) scale(-1 1)">${rotorBase}</g>` : rotorBase;
  return frame + rotate(body,state.angle);
}
const transformPoint = ([x,y],s) => {
  let dx=x-90,dy=y-90;
  if(s.mirror) dx=-dx;
  const a=s.angle*Math.PI/180;
  return [dx*Math.cos(a)-dy*Math.sin(a),dx*Math.sin(a)+dy*Math.cos(a)];
};
const handedness = s => {
  const [a,b,c] = [[90,34],[36,142],[145,38]].map(p=>transformPoint(p,s));
  return Math.sign((b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]));
};

function serialCell(state) {
  const pointer = '<path d="M90 33L109 55H99V128H81V55H71Z" fill="white" stroke="#111" stroke-width="3" stroke-linejoin="round"/>'
    + '<rect x="115" y="83" width="14" height="20" fill="url(#hatch)" stroke="#111" stroke-width="2"/>';
  const [x,y]=point(state.dotAngle,72);
  return frame + circle(90,90,61,"white",2) + rotate(pointer,state.arrowAngle)
    + `<path d="M90 77L103 90L90 103L77 90Z" fill="${state.black?ink:'white'}" stroke="#111" stroke-width="2.5"/>`
    + circle(x,y,6,ink);
}
const serialState = step => ({arrowAngle:normalize(step*90),dotAngle:normalize(45-step*45),black:step%2===1});

function tokensCell(active) {
  let body = circle(90,90,55,"white",2) + '<path d="M90 72L108 90L90 108L72 90Z" fill="url(#hatch)" stroke="#111" stroke-width="2"/>';
  for(let i=0;i<4;i++) {
    const [x,y]=point(i*90,54), [ix,iy]=point(i*90,22);
    body += line(ix,iy,x,y,2);
    body += circle(x,y,12,active.includes(i)?ink:'white',2.5);
    if(active.includes(i)) body += circle(x,y,3,"white",1);
  }
  return frame + body;
}
const commonThenRotate = (a,b) => a.filter(x=>b.includes(x)).map(x=>(x+1)%4).sort();

const vertices = [[45,50],[83,35],[125,48],[145,83],[132,122],[95,145],[55,130],[35,94],[65,85],[100,95]];
function wireCell(state) {
  let body = "";
  for(let i=0;i<state.count;i++) body += line(...vertices[i],...vertices[i+1],3.5);
  for(let i=0;i<=state.count;i++) body += circle(...vertices[i],3.5,i===0||i===state.count?ink:'white',1.5);
  return frame + rotate(body,state.angle);
}

export function createFigural({ dir, add, keyForNumber }) {
  const assets = path.join(dir,"assets");fs.mkdirSync(assets,{recursive:true});
  const write = (name,content) => fs.writeFileSync(path.join(assets,name+".svg"),content);
  function options(number,answer,wrong,render,rule) {
    const states=[...wrong];states.splice("abcde".indexOf(keyForNumber(number)),0,answer);
    assert.equal(new Set(states.map(s=>JSON.stringify(s))).size,5);
    assert.equal(states.filter(rule).length,1,`Soal ${number} harus memiliki satu jawaban`);
    states.forEach((s,i)=>write(`soal-${number}-${"abcde"[i]}`,svg(render(s))));
    const labels=states.map((_,i)=>`[img]assets/soal-${number}-${"abcde"[i]}.svg`);
    const key="abcde".indexOf(keyForNumber(number));
    return [labels[key],labels.filter((_,i)=>i!==key)];
  }

  const first={bodyAngle:0,solid:true,tokenAngle:0,inside:true};
  const third={bodyAngle:90,solid:false,tokenAngle:180,inside:false};
  const answer31=analogyNext(third);
  const choices31=options(31,answer31,[{...answer31,bodyAngle:0},{...answer31,solid:false},{...answer31,tokenAngle:270},{...answer31,inside:false}],analogyCell,s=>same(s,answer31));
  write("soal-31",svg(group(analogyCell(first),4,4)+group(analogyCell(analogyNext(first)),222,4)+group(analogyCell(third),490,4)+group(unknown,708,4)
    + '<g font-family="Arial" font-size="42" text-anchor="middle"><text x="202" y="108">:</text><text x="450" y="108">=</text><text x="686" y="108">:</text></g>',892,188));
  add(31,"Figural Analogi","Rotasi dua arah, pertukaran posisi dalam-luar, dan inversi warna",
    "Pilih gambar yang tepat untuk melengkapi analogi berikut.\n\n![Analogi perisai dan dua penanda](assets/soal-31.svg)",...choices31,
    "Dari gambar pertama ke gambar kedua, perisai diputar 90° searah jarum jam dan warnanya dibalik. Dua penanda berpindah dari dalam ke luar, berputar 90° berlawanan arah jarum jam, dan warnanya juga berbalik. Pada pasangan berikutnya, perisai putih harus diputar 90° searah jarum jam dan menjadi hitam; kedua penanda berpindah ke dalam serta menjadi putih. Posisi penanda harus mengikuti arah putarnya sendiri, bukan arah putaran perisai.");

  const answer32={angle:90,mirror:true};
  const normalHand=handedness({angle:0,mirror:false});
  const choices32=options(32,answer32,[0,90,180,270].map(angle=>({angle,mirror:false})),rotorCell,s=>handedness(s)!==normalHand);
  add(32,"Figural Ketaksamaan","Membedakan rotasi dengan pencerminan pada tiga penanda asimetris",
    "Pilih gambar yang berbeda dari keempat gambar lainnya.",...choices32,
    "Empat gambar dapat saling diperoleh dengan memutar satu objek utuh. Hubungan relatif antara kepala panah, titik hitam di luar cincin, lingkaran kecil kosong, dan bidang arsir tetap sama. Satu gambar merupakan pencerminan: urutan sisi relatif penanda terbalik sehingga tidak dapat disamakan hanya dengan rotasi. Arah panah saja tidak cukup untuk menemukan perbedaannya; penanda lain harus dibandingkan bersama-sama.");

  const answer33=serialState(4);
  const choices33=options(33,answer33,[{...answer33,arrowAngle:90},{...answer33,dotAngle:315},{...answer33,black:true},{...answer33,arrowAngle:270}],serialCell,s=>same(s,answer33));
  write("soal-33",strip([...Array.from({length:4},(_,i)=>serialCell(serialState(i))),unknown]));
  add(33,"Serial Gambar","Tiga pola serentak pada panah, titik orbit, dan warna pusat",
    "Pilih gambar yang tepat untuk menggantikan tanda tanya.\n\n![Deret panah, titik orbit, dan belah ketupat](assets/soal-33.svg)",...choices33,
    "Panah beserta bidang arsirnya berputar 90° searah jarum jam tiap langkah: atas, kanan, bawah, kiri, lalu atas. Titik luar berputar 45° berlawanan arah jarum jam: kanan-atas, atas, kiri-atas, kiri, lalu kiri-bawah. Belah ketupat pusat berganti putih, hitam, putih, hitam, lalu putih. Jadi gambar terakhir harus memadukan panah ke atas, titik kiri-bawah, dan pusat putih; semua aturan berlaku bersamaan.");

  const pairs=[[[0,1,3],[0,2,3]],[[0,1,2],[1,2,3]],[[0,2,3],[0,1,2]]];
  const answer34=commonThenRotate(...pairs[2]);
  const choices34=options(34,answer34,[[0,2],[0,1,2,3],[0,3],[1,2]],tokensCell,s=>same(s,answer34));
  write("soal-34",matrix(pairs.flatMap(([a,b],i)=>[tokensCell(a),tokensCell(b),i===2?unknown:tokensCell(commonThenRotate(a,b))])));
  add(34,"Figural Matriks 9 Kotak","Irisan posisi aktif yang dilanjutkan rotasi seperempat putaran",
    "Pilih gambar yang tepat untuk melengkapi matriks berikut.\n\n![Matriks cincin dan simpul hitam](assets/soal-34.svg)",...choices34,
    "Pada setiap baris, ambil posisi simpul hitam yang sama-sama muncul pada dua kotak pertama, kemudian putar kumpulan posisi itu 90° searah jarum jam untuk membentuk kotak ketiga. Baris pertama memiliki irisan posisi atas dan kiri, sehingga hasilnya atas dan kanan. Baris kedua memiliki irisan kanan dan bawah, sehingga hasilnya bawah dan kiri. Pada baris ketiga, irisannya atas dan bawah; setelah diputar, hasilnya kanan dan kiri. Bagian lingkaran kosong dan arsir pusat merupakan kerangka yang tetap.");

  const answer35={count:8,angle:90};
  const choices35=options(35,answer35,[5,6,7,9].map((count,i)=>({count,angle:i*90})),wireCell,s=>s.count===8);
  const angles=[0,90,180,45,135,225,270,0,90];
  write("soal-35",matrix(Array.from({length:9},(_,i)=>i===8?unknown:wireCell({count:4+Math.floor(i/3)+(i%3),angle:angles[i]}))));
  add(35,"Figural Matriks 9 Kotak","Jumlah ruas motif meningkat satu pada baris dan kolom",
    "Pilih gambar yang tepat untuk melengkapi matriks berikut.\n\n![Matriks motif kawat bersudut](assets/soal-35.svg)",...choices35,
    "Hitung ruas garis lurus pada motif kawat di dalam bingkai; titik penanda tidak menambah ruas. Baris pertama memiliki 4, 5, dan 6 ruas; baris kedua 5, 6, dan 7 ruas; baris ketiga 6, 7, dan 8 ruas. Jumlahnya bertambah satu baik ke kanan maupun ke bawah, sedangkan orientasi gambar dapat berbeda. Maka kotak terakhir memerlukan motif dengan 8 ruas. Satu-satunya pilihan dengan 8 ruas adalah jawaban yang benar.");

  // Model checks supplement the visible diagrams, without exposing hints in prompts.
  assert.deepEqual(answer34,[1,3]);
  assert.equal(new Set([0,90,180,270].map(angle=>handedness({angle,mirror:false}))).size,1);
  assert.notEqual(handedness(answer32),normalHand);
  for(let i=0;i<vertices.length-2;i++) {
    const [a,b,c]=vertices.slice(i,i+3);
    assert.notEqual((b[0]-a[0])*(c[1]-b[1])-(b[1]-a[1])*(c[0]-b[0]),0,"Ruas berurutan tidak boleh segaris");
  }
  console.log("Lima model figural tervalidasi; tiap soal memiliki satu jawaban.");
}
