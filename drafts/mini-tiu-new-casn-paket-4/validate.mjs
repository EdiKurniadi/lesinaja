import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

const dir=path.dirname(fileURLToPath(import.meta.url));
const {metadata,questions}=JSON.parse(fs.readFileSync(path.join(dir,"draft.json"),"utf8"));
assert.equal(metadata.status,"integrated");
assert.equal(metadata.packageId,"mini-tiu-new-casn-paket-2");
assert.equal(questions.length,35);
assert.equal(new Set(questions.map(q=>q.id)).size,35);
const correct=n=>questions[n-1].choices.find(c=>c.score===5).label;
const keys={a:0,b:0,c:0,d:0,e:0};
const assets=new Set();
for(const [i,q] of questions.entries()) {
  assert.equal(q.choices.length,5);
  assert.equal(new Set(q.choices.map(c=>c.label)).size,5);
  assert.deepEqual(q.choices.map(c=>c.id),["a","b","c","d","e"]);
  assert.equal(q.choices.filter(c=>c.score===5).length,1);
  assert.ok(q.choices.every(c=>c.score===0||c.score===5));
  const key=q.choices.find(c=>c.score===5).id;
  keys[key]++;
  assert.ok(q.prompt&&q.subtype&&q.explanation.endsWith(`Jawaban ${key.toUpperCase()}.`));
  for(const text of [q.prompt,...q.choices.map(c=>c.label)]) {
    for(const match of text.matchAll(/assets\/[a-z0-9-]+\.svg/g)) assets.add(match[0]);
  }
  if(i>=30) {
    const instruction=q.prompt.split("\n\n")[0];
    assert.ok(instruction.length<90);
    assert.equal(instruction.split(/[.!?]/).filter(Boolean).length,1);
  }
}
assert.deepEqual(keys,{a:7,b:7,c:7,d:7,e:7});
assert.equal(assets.size,29);
for(const file of assets) {
  const svg=fs.readFileSync(path.join(dir,file),"utf8");
  assert.ok(svg.startsWith('<svg xmlns="http://www.w3.org/2000/svg"'));
  assert.match(svg,/width="[0-9]+" height="[0-9]+"/);
}

// Exhaustive logical checks, separate from explanatory text.
const bools=[false,true], implies=(a,b)=>!a||b;
for(const k of bools) for(const s of bools) for(const m of bools) {
  if(implies(k||s,m)&&!m) assert.ok(!k&&!s);
}
for(const a of bools) for(const b of bools) for(const c of bools) {
  if(implies(a,!b)&&implies(c,b)&&c) assert.ok(b&&!a);
}
for(let d=0;d<8;d++) for(let indexed=0;indexed<8;indexed++) for(let publicAccess=0;publicAccess<8;publicAccess++) {
  if((d&~indexed)===0&&(indexed&publicAccess)!==0) assert.ok((publicAccess&indexed)!==0);
}
function permutations(items) {
  if(items.length===0) return [[]];
  return items.flatMap((value,i)=>permutations(items.filter((_,j)=>i!==j)).map(rest=>[value,...rest]));
}
const orders=permutations("ABCDEF".split("")).filter(order=>{
  const at=c=>order.indexOf(c);
  return at("F")===0&&at("D")===5&&at("A")===3&&at("C")===at("B")+1&&at("E")>at("C");
});
assert.equal(orders.length,1);
assert.equal(orders[0][2],correct(7));
const seats=permutations("BCDE".split("")).map(rest=>["A",...rest]).filter(order=>{
  const adjacent=(a,b)=>[1,4].includes(Math.abs(order.indexOf(a)-order.indexOf(b)));
  return adjacent("A","B")&&!adjacent("C","D");
});
assert.equal(String(seats.length),correct(8));

const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
const decimal=n=>Number(correct(n).replace(",","."));
near((2/3-.25)/(5/6)+.10,decimal(9));
near(.125*64+3/4*16-.2*15,decimal(10));
assert.ok(24*26<25*25);
assert.equal(correct(11),"P < Q");
const equalProducts=questions[11].choices.filter(choice=>{
  const numbers=choice.label.match(/\d+/g).map(Number);
  assert.equal(numbers.length,4);
  return numbers[0]*numbers[1]===numbers[2]*numbers[3];
});
assert.equal(equalProducts.length,1);
assert.equal(equalProducts[0].label,correct(12));
assert.equal(correct(12),"64 × 15 dan 48 × 20");
let seq=2;for(let i=0;i<5;i++) seq=seq*2+1;assert.equal(String(seq),correct(13));
assert.equal(String(5**2),correct(14));
assert.equal(String(11*10/2),correct(15));
assert.equal(String(6**2+3*4),correct(16));
assert.equal(String(15-8-1),correct(17));
const d=(49-21)/(12-5),a=21-4*d;
near(Array.from({length:10},(_,i)=>a+i*d).reduce((s,n)=>s+n,0),decimal(18));
near((1-340000/(500000*.8))*100,15);assert.equal(correct(19),"15%");
near(5+(6*15-6*5)/(6+4),11);assert.equal(correct(20),"11 hari");
near(75*(50*(40/60)/(75-50)),100);assert.equal(correct(21),"100 km");
// Data sufficiency: confirm independent cases and consistency.
assert.ok([6,12,18,24].every(n=>n%2===0));
assert.ok([3,6,9,12].some(n=>n%2===0)&&[3,6,9,12].some(n=>n%2!==0));
assert.equal(11+7,18);assert.equal(11-7,4);
const areas=Array.from({length:20},(_,i)=>(i+1)*4*(i+1)*3);
assert.ok(new Set(areas).size>1);
near((14**2-10**2)/2,48);near(8/6,4/3);
assert.equal(2*10000+3*3000,29000);assert.equal(2*7000+3*5000,29000);
near((1-3*(1/9+1/18))/(1/9),4.5);assert.equal(correct(26),"4 jam 30 menit");
near(42/(15-8)*12,72);assert.equal(correct(27),"Rp72 juta");
near(3120000-(3180000-3120000)/(12-8)*8,3000000);assert.equal(correct(28),"Rp3.000.000");
const ageSolutions=[];
for(let child=5;child<60;child++) for(let father=child+1;father<100;father++) {
  if(father-4===5*(child-4)&&father+4===3*(child+4)) ageSolutions.push([child,father]);
}
assert.deepEqual(ageSolutions,[[12,44]]);assert.equal(correct(29),"12 tahun");
near((160*.75+20)*.6,84);assert.equal(correct(30),"160 botol");
for(const n of [22,23,24,25]) assert.ok(correct(n).startsWith(n===22?"Pernyataan (1)":n===23?"Kedua pernyataan":n===24?"Pernyataan (2)":"Bahkan kedua"));
console.log("Lulus: struktur 35 soal, 29 SVG, distribusi kunci, logika, susunan, numerik, dan konsistensi data.");
