import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const INK = "#111";
const frame = '<rect x="3" y="3" width="114" height="114" rx="5" fill="white" stroke="#111" stroke-width="1.8"/>';
const unknown = frame + '<text x="60" y="83" text-anchor="middle" font-family="Arial" font-size="64" font-weight="700">?</text>';
const rot = (body, angle) => `<g transform="rotate(${angle} 60 60)">${body}</g>`;
const mod = n => ((n % 360) + 360) % 360;
const fill = style => style === "black" ? INK : style === "hatch" ? "url(#hatch)" : "white";
const point = (angle, radius, cx = 60, cy = 60) => {
  const radians = (angle - 90) * Math.PI / 180;
  return [cx + radius * Math.cos(radians), cy + radius * Math.sin(radians)].map(v => +v.toFixed(3));
};
const polygon = (sides, radius, style = "white", angle = 0) => `<polygon points="${Array.from({length:sides}, (_,i) => point(angle + i * 360 / sides, radius).join(",")).join(" ")}" fill="${fill(style)}" stroke="${INK}" stroke-width="2.1" stroke-linejoin="round"/>`;
const circle = (x,y,r,style = "black",strokeWidth = 1.8) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill(style)}" stroke="${INK}" stroke-width="${strokeWidth}"/>`;
const line = (x1,y1,x2,y2,width = 2.5) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${INK}" stroke-width="${width}" stroke-linecap="round"/>`;
const xor = (a,b) => [...new Set([...a,...b])].filter(v => a.includes(v) !== b.includes(v)).sort((x,y)=>x-y);
const choicePaths = number => "abcde".split("").map(c=>`[img]assets/soal-${number}-${c}.svg`);

function canvas(body, width = 120, height = 120) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img"><defs><pattern id="hatch" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)"><rect width="5" height="5" fill="white"/><line x1="0" y1="0" x2="0" y2="5" stroke="#111" stroke-width="1.4"/></pattern></defs><rect width="${width}" height="${height}" fill="white"/>${body}</svg>`;
}

// 31: badan utama berputar searah jarum jam; pasangan satelit berputar
// berlawanan arah jarum jam. Warna hitam/putih pada keduanya bertukar.
function analogyCell(s) {
  const body = `<path d="M60 22 L90 41 L83 80 L60 96 L34 79 L31 43 Z" fill="${fill(s.bodyFill)}" stroke="#111" stroke-width="2.3"/>
    <path d="M39 46 L51 33 L60 39 L48 54 Z" fill="url(#hatch)" stroke="#111" stroke-width="1.6"/>
    <path d="M61 46 L79 60 L61 75 L61 66 L49 66 L49 55 L61 55 Z" fill="${s.bodyFill === 'black' ? 'white' : INK}" stroke="${s.bodyFill === 'black' ? 'white' : INK}" stroke-width="1.2"/>
    <circle cx="52" cy="80" r="3.5" fill="${s.bodyFill === 'black' ? 'white' : INK}"/>`;
  const satellite = circle(17,25,6,s.satelliteFill) + '<polygon points="18,41 24,47 18,53 12,47" fill="' + fill(s.satelliteFill) + '" stroke="#111" stroke-width="1.8"/>';
  return frame + rot(body,s.bodyAngle) + rot(satellite,s.satelliteAngle);
}
const invert = color => color === "black" ? "white" : "black";
const analogyNext = s => ({bodyAngle:mod(s.bodyAngle+90),bodyFill:invert(s.bodyFill),satelliteAngle:mod(s.satelliteAngle-90),satelliteFill:invert(s.satelliteFill)});
const analogyFirst = {bodyAngle:0,bodyFill:"black",satelliteAngle:0,satelliteFill:"white"};
const analogyThird = {bodyAngle:180,bodyFill:"white",satelliteAngle:90,satelliteFill:"black"};
const analogyAnswer = analogyNext(analogyThird);
const analogyOptions = [
  {...analogyAnswer,bodyAngle:90},
  {...analogyAnswer,satelliteAngle:180},
  analogyAnswer,
  {...analogyAnswer,bodyFill:"white"},
  {...analogyAnswer,satelliteFill:"black"},
];

// 32: satu benda asimetris berlapis, dengan sirip berarsir, jari-jari
// berujung bercabang, dan dua penanda yang ikut berotasi bersama.
const rotorBody = '<path d="M60 25 A35 35 0 0 1 95 60 L77 60 A17 17 0 0 0 60 43 Z" fill="url(#hatch)" stroke="#111" stroke-width="2"/>'
  + '<path d="M60 95 A35 35 0 0 1 25 60 L43 60 A17 17 0 0 0 60 77 Z" fill="#111" stroke="#111" stroke-width="2"/>'
  + '<path d="M60 15 L69 29 L63 29 L63 52 L57 52 L57 29 L51 29 Z" fill="#111"/>'
  + '<path d="M68 64 L86 75 L82 82 M86 75 L93 73" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>'
  + circle(60,60,9,"white",2.4) + circle(60,60,3,"black",0)
  + circle(30,27,5,"black") + circle(21,39,3.5,"white")
  + '<polygon points="88,88 96,96 88,104 80,96" fill="white" stroke="#111" stroke-width="2"/>';
function rotorCell(s) {
  const object = s.mirror ? `<g transform="translate(120 0) scale(-1 1)">${rotorBody}</g>` : rotorBody;
  return frame + rot(object,s.angle);
}
const rotorOptions = [{angle:0,mirror:false},{angle:90,mirror:false},{angle:180,mirror:false},{angle:90,mirror:true},{angle:270,mirror:false}];

// 33: arah jari-jari + penanda orbit + warna pusat merupakan tiga urutan.
function sequenceCell(s) {
  const ticks = Array.from({length:8},(_,i)=>{
    const [x1,y1] = point(i*45,43), [x2,y2] = point(i*45,47);
    return line(x1,y1,x2,y2,1.3);
  }).join("");
  const pointer = '<path d="M60 28 L69 41 L63 41 L63 59 L80 70 L77 75 L60 65 L46 76 L42 71 L57 59 L57 41 L51 41 Z" fill="#111"/>'
    + '<path d="M38 48 L43 39 L48 43 L43 52 Z" fill="url(#hatch)" stroke="#111" stroke-width="1.3"/>';
  const [mx,my] = point(s.orbit,44);
  return frame + '<circle cx="60" cy="60" r="44" fill="none" stroke="#111" stroke-width="1.3"/>' + ticks
    + rot(pointer,s.angle) + `<polygon points="60,50 70,60 60,70 50,60" fill="${fill(s.centerFill)}" stroke="white" stroke-width="4"/>`
    + `<polygon points="60,50 70,60 60,70 50,60" fill="${fill(s.centerFill)}" stroke="#111" stroke-width="1.8"/>`
    + circle(mx,my,5.8,"black",1.2);
}
const sequenceAt = index => ({angle:mod(index*45),orbit:mod(-index*90),centerFill:index%2 ? "black":"white"});
const sequenceAnswer = sequenceAt(3);
const sequenceOptions = [sequenceAnswer,{...sequenceAnswer,orbit:270},{...sequenceAnswer,angle:225},{...sequenceAnswer,centerFill:"white"},{...sequenceAnswer,angle:45}];

// 34: XOR pada sembilan kemungkinan ruas + pergeseran penanda sudut.
const vertices = [[60,23],[92,42],[92,78],[60,97],[28,78],[28,42]];
const edgePairs = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[0,3],[1,4],[2,5]];
const cornerPositions = [[15,15],[105,15],[105,105],[15,105]];
function lineMatrixCell(s) {
  const strokes = s.edges.map(i=>{
    const [a,b] = edgePairs[i];
    return line(...vertices[a],...vertices[b],2.7);
  }).join("");
  const nodes = vertices.map(([x,y])=>circle(x,y,2.1,"black",0)).join("");
  return frame + strokes + nodes + circle(...cornerPositions[s.marker],5.3,"black",1.2);
}
const lineRowInputs = [
  [[0,1,3,6],[1,2,3,7]],
  [[0,2,4,7],[2,4,5,8]],
  [[0,1,4,6,8],[1,3,4,7,8]],
];
const lineMatrix = lineRowInputs.flatMap(([a,b],r)=>[{edges:a,marker:r},{edges:b,marker:(r+1)%4},{edges:xor(a,b),marker:(r+2)%4}]);
const lineAnswer = lineMatrix[8];
const lineOptions = [
  {...lineAnswer,marker:1},
  lineAnswer,
  {...lineAnswer,edges:[0,1,3,4,6,7,8]},
  {...lineAnswer,edges:[1,4,8]},
  {...lineAnswer,edges:[0,3,6,8]},
];

// 35: tiga siklus independen: ruas luar, ruas dalam, dan isian cincin.
function layeredCell(s) {
  return frame + polygon(s.outer,43,s.style,s.outer===4?45:0)
    + '<circle cx="60" cy="60" r="24" fill="white" stroke="#111" stroke-width="1.5"/>'
    + polygon(s.inner,16,"white",s.inner===4?45:0);
}
const layeredAt = (r,c) => ({outer:4+(r+c)%3,inner:3+(r+2*c)%3,style:["white","hatch","black"][(2*r+c)%3]});
const layeredMatrix = Array.from({length:9},(_,i)=>layeredAt(Math.floor(i/3),i%3));
const layeredAnswer = layeredMatrix[8];
const layeredOptions = [
  {...layeredAnswer,outer:6},
  {...layeredAnswer,inner:4},
  {...layeredAnswer,style:"hatch"},
  {...layeredAnswer,style:"black"},
  layeredAnswer,
];

function matchingIndices(options, answer) {
  return options.flatMap((option,index)=>JSON.stringify(option)===JSON.stringify(answer)?[index]:[]);
}

export function createFigural({dir,add}) {
  const write = (name, body, width=120,height=120) => fs.writeFileSync(path.join(dir,"assets",`${name}.svg`),canvas(body,width,height));
  const strip = (cells,labels) => cells.map((body,i)=>`<g transform="translate(${i*136},0)">${body}<text x="60" y="139" text-anchor="middle" font-family="Arial" font-size="12">${labels[i]}</text></g>`).join("");
  const grid = cells => cells.map((body,i)=>`<g transform="translate(${(i%3)*130},${Math.floor(i/3)*130})">${body}</g>`).join("");
  const saveOptions = (number, options, render) => options.forEach((s,i)=>write(`soal-${number}-${"abcde"[i]}`,render(s)));
  fs.mkdirSync(path.join(dir,"assets"),{recursive:true});

  write("soal-31",strip([analogyCell(analogyFirst),analogyCell(analogyNext(analogyFirst)),analogyCell(analogyThird),unknown],["Gambar 1","Gambar 2","Gambar 3","Gambar 4"]),528,148);
  saveOptions(31,analogyOptions,analogyCell);
  add(31,"Figural Analogi","Dua arah rotasi dan inversi warna","Pilih gambar yang tepat untuk melengkapi analogi berikut.\n\n![Analogi bangun berlapis](assets/soal-31.svg)",choicePaths(31),"Perhatikan badan utama dan pasangan satelit secara terpisah.\n1. Badan utama beserta anak panah, bidang arsir, dan titik kecil di dalamnya diputar 90° searah jarum jam.\n2. Pasangan satelit di luar badan (lingkaran dan belah ketupat) diputar 90° berlawanan arah jarum jam, terhadap pusat kotak.\n3. Isian hitam dan putih ditukar: badan, panah, titik kecil, dan kedua satelit berinversi. Bidang arsir tetap berarsir dan ikut putaran badan.\nPada Gambar 3, anak panah dalam badan mengarah ke kiri; setelah diputar 90° searah jarum jam, arahnya menjadi ke atas. Badan berubah hitam dan anak panah serta titik kecil menjadi putih. Pasangan satelit yang berada di kanan-atas berpindah ke kiri-atas dan menjadi putih. Semua ciri ini terdapat pada C. A salah arah badan; B salah arah perpindahan satelit; D salah warna badan; E salah warna satelit.");

  saveOptions(32,rotorOptions,rotorCell);
  add(32,"Figural Ketaksamaan","Rotasi benda asimetris dengan sirip, cabang, dan penanda","Pilih gambar yang berbeda dari keempat gambar lainnya.",choicePaths(32),"Gunakan A sebagai acuan. B, C, dan E adalah putaran A sebesar 90°, 180°, dan 270° searah jarum jam. Semua unsur ikut berputar: sirip berarsir, sirip hitam, panah, ujung bercabang, pasangan lingkaran kecil, dan belah ketupat.\nD dibuat dengan pencerminan benda A, kemudian diputar 90°. Setelah panah utama pada setiap gambar diarahkan ke atas, sirip berarsir dan ujung bercabang pada A/B/C/E berada di sisi kanan, sedangkan pada D keduanya berada di sisi kiri. Urutan melingkar unsur pada D terbalik; rotasi tidak dapat membalik urutan ini. Maka hanya D yang berbeda.");

  write("soal-33",strip([0,1,2,3,4].map(i=>i===3?unknown:sequenceCell(sequenceAt(i))),["1","2","3","4","5"]),664,148);
  saveOptions(33,sequenceOptions,sequenceCell);
  add(33,"Serial Gambar","Rotasi 45°, orbit berlawanan, dan warna bergantian","Pilih gambar yang tepat untuk menggantikan tanda tanya.\n\n![Serial rotor dan penanda orbit](assets/soal-33.svg)",choicePaths(33),"Ada tiga pola yang berjalan bersamaan.\n1. Rangka jari-jari dengan kepala panah dan bidang arsir kecil berputar 45° searah jarum jam pada setiap langkah. Kepala panah berturut-turut mengarah ke atas, kanan-atas, kanan, kanan-bawah, dan bawah. Jadi pada kotak keempat kepala panah harus ke kanan-bawah.\n2. Titik hitam pada lingkaran luar bergerak 90° berlawanan arah jarum jam: atas → kiri → bawah → kanan → atas. Jadi pada kotak keempat titik harus di kanan.\n3. Belah ketupat di pusat berganti putih → hitam → putih → hitam → putih. Jadi pada kotak keempat pusat berwarna hitam.\nHanya A memenuhi ketiganya. B salah posisi titik; C dan E salah orientasi rangka; D salah warna pusat.");

  write("soal-34",grid(lineMatrix.map((s,i)=>i===8?unknown:lineMatrixCell(s))),380,380);
  saveOptions(34,lineOptions,lineMatrixCell);
  add(34,"Figural Matriks 9 Kotak","XOR ruas garis dan pergeseran penanda","Pilih gambar yang tepat untuk melengkapi matriks berikut.\n\n![Matriks ruas dan penanda](assets/soal-34.svg)",choicePaths(34),"Dua aturan berlaku pada setiap baris.\n1. Ruas garis pada kolom ketiga merupakan hasil tumpang tindih kolom pertama dan kedua: ruas yang ada pada keduanya dihapus, sedangkan ruas yang hanya ada pada salah satunya dipertahankan (XOR). Enam titik patokan tetap ditampilkan.\nPada baris terakhir, tiga ruas yang sama adalah sisi kanan tegak, sisi kiri tegak, dan diagonal dari kanan-bawah ke kiri-atas. Ketiganya dihapus. Yang tersisa adalah sisi atas-kanan, sisi bawah-kiri, garis tegak tengah, serta diagonal kanan-atas ke kiri-bawah.\n2. Titik besar di sudut bergerak satu sudut searah jarum jam dari kolom pertama ke kolom berikutnya. Pada baris terakhir urutannya kanan-bawah → kiri-bawah → kiri-atas.\nB memuat empat ruas yang benar dan penanda di kiri-atas. A memiliki ruas yang benar tetapi penanda salah; C mempertahankan semua ruas gabungan; D hanya mempertahankan ruas yang sama; E keliru memilih salah satu diagonal.");

  write("soal-35",grid(layeredMatrix.map((s,i)=>i===8?unknown:layeredCell(s))),380,380);
  saveOptions(35,layeredOptions,layeredCell);
  add(35,"Figural Matriks 9 Kotak","Siklus jumlah sisi dua lapis dan pola isian","Pilih gambar yang tepat untuk melengkapi matriks berikut.\n\n![Matriks bangun bersarang dan arsir](assets/soal-35.svg)",choicePaths(35),"Setiap baris dan kolom memuat tiga variasi lengkap untuk masing-masing atribut.\n1. Bangun terluar memiliki 4, 5, atau 6 sisi. Pada baris terakhir sudah ada segienam dan segiempat, sehingga kotak kosong harus memuat segilima. Kolom terakhir juga sudah memuat segienam dan segiempat.\n2. Bangun kecil di pusat memiliki 3, 4, atau 5 sisi. Pada baris terakhir sudah ada segilima dan segiempat, sehingga yang belum ada adalah segitiga. Kolom terakhir juga belum memiliki segitiga.\n3. Isian bidang luar bergiliran putih, arsir, dan hitam, masing-masing sekali dalam setiap baris dan kolom. Baris terakhir telah memuat arsir dan hitam, sehingga isian yang hilang adalah putih.\nJawaban harus memuat segilima luar, segitiga di pusat, dan bidang luar putih. Hanya E memenuhi seluruh atribut. A salah jumlah sisi luar; B salah bangun pusat; C dan D salah isian bidang.");

  // Verifikasi model, bukan sekadar huruf kunci atau jumlah berkas.
  assert.deepEqual(matchingIndices(analogyOptions,analogyNext(analogyThird)),[2]);
  assert.deepEqual(rotorOptions.flatMap((s,i)=>s.mirror?[i]:[]),[3]);
  assert.deepEqual(matchingIndices(sequenceOptions,sequenceAt(3)),[0]);
  assert.deepEqual(lineAnswer,{edges:[0,3,6,7],marker:0});
  assert.deepEqual(matchingIndices(lineOptions,lineAnswer),[1]);
  assert.deepEqual(layeredAnswer,{outer:5,inner:3,style:"white"});
  assert.deepEqual(matchingIndices(layeredOptions,layeredAnswer),[4]);
  for(let r=0;r<3;r++) for(const field of ["outer","inner","style"]) {
    assert.equal(new Set(layeredMatrix.slice(r*3,r*3+3).map(s=>s[field])).size,3);
    assert.equal(new Set([0,1,2].map(row=>layeredMatrix[row*3+r][field])).size,3);
  }
  for(const [options,render] of [[analogyOptions,analogyCell],[rotorOptions,rotorCell],[sequenceOptions,sequenceCell],[lineOptions,lineMatrixCell],[layeredOptions,layeredCell]]) {
    assert.equal(new Set(options.map(render)).size,5,"Opsi figural harus berbeda");
  }
  console.log("Pola figural kompleks tervalidasi: kunci C, D, A, B, E; setiap soal memiliki satu opsi yang memenuhi seluruh aturan.");
}
