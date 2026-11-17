import test from "node:test";
import assert from "node:assert/strict";
import { achieves, and, category, conversionCandidates, equivalent, equivalentForms, evaluate, format, implies, literal, negate, operate, or, some, symbols, type Expression } from "../lib/silogisme-engine";
import { SILOGISME_QUESTIONS as questions } from "../lib/silogisme-content";

const p=literal("p"),q=literal("q"),r=literal("r"),s=literal("s");
const result = (a:Expression,b:Expression) => { const output=operate(a,b); assert.ok(output.ok,output.detail); return output.expression; };
const contra = (e:Expression) => equivalentForms(e)[1];

test("konversi menerima ekuivalensi, tetapi menolak konvers dan invers yang tidak dijamin",()=>{
 assert.ok(equivalent(implies(p,q),implies(negate(q),negate(p))));
 assert.ok(equivalent(implies(p,q),or(negate(p),q)));
 assert.ok(!equivalent(implies(p,q),implies(q,p)));
 assert.ok(!equivalent(implies(p,q),implies(negate(p),negate(q))));
 assert.ok(!equivalent(some(p,q),implies(p,q)));
 assert.ok(!equivalent(some(p,negate(q) as typeof q),some(q,negate(p) as typeof p)));
});

test("setiap kandidat memuat jawaban benar dan semua bentuk ≡ mempertahankan makna",()=>{
 assert.equal(questions.length,10);
 assert.equal(new Set(questions.map(q=>q.id)).size,10);
 for(const question of questions) for(const premise of question.premises){
  const forms=conversionCandidates(premise.expression);
  assert.ok(forms.some(f=>equivalent(f,premise.expression)));
  assert.ok(forms.some(f=>!equivalent(f,premise.expression)),"Ada pengecoh bermakna lain");
  for(const f of equivalentForms(premise.expression)) assert.ok(equivalent(f,premise.expression),format(f));
 }
});

test("kategori membedakan fakta, aturan, keberadaan, dan premis campuran",()=>{
 assert.equal(category(p),"Fakta"); assert.equal(category(and(p,negate(q))),"Fakta");
 assert.equal(category(some(p,q)),"Fakta"); assert.equal(category(implies(p,q)),"Aturan");
 assert.equal(category(or(p,q)),"Aturan"); assert.equal(category(and(p,implies(q,r))),"Campuran");
});

test("fakta dan aturan cocok terlepas urutan pilihan, tanpa memperbolehkan arah balik",()=>{
 assert.ok(equivalent(result(p,implies(p,q)),q));
 assert.ok(equivalent(result(implies(p,q),p),q));
 assert.equal(operate(q,implies(p,q)).ok,false);
 assert.equal(operate(negate(p),implies(p,q)).ok,false);
 assert.ok(equivalent(result(negate(q),contra(implies(p,q))),negate(p)));
});

test("rantai aturan menghasilkan aturan, bukan kejadian pada ujungnya",()=>{
 const combined=result(implies(q,r),implies(p,q));
 assert.ok(equivalent(combined,implies(p,r)));
 assert.equal(achieves(combined,r),false);
 assert.equal(operate(implies(p,q),implies(r,s)).ok,false);
});

test("dua fakta proposisional digabung dengan dan, dua garis sebagian tidak disatukan",()=>{
 assert.ok(equivalent(result(p,q),and(p,q)));
 assert.equal(operate(some(p,q),some(q,r)).ok,false);
 assert.equal(operate(some(p,q),r).ok,false);
 assert.ok(equivalent(some(p,q),some(q,p)));
});

test("pada sebagian, semua sifat terikat pada individu yang sama",()=>{
 const expression=result(some(p,q),implies(q,r));
 assert.ok(achieves(expression,some(p,r)));
 assert.equal(achieves(expression,implies(p,r)),false);
 assert.match(format(expression),/— \(/,"Tiga sifat tidak ditampilkan sebagai dua garis terpisah");
 // Exhaust all sets of unary types over p,q,r (each type may exist or not).
 const types=Array.from({length:8},(_,mask)=>({p:!!(mask&1),q:!!(mask&2),r:!!(mask&4)}));
 for(let mask=0;mask<256;mask++){
  const people=types.filter((_,i)=>mask&(1<<i));
  if(people.some(v=>v.p&&v.q)&&people.every(v=>!v.q||v.r)){
   assert.ok(people.some(v=>v.p&&v.q&&v.r));
  }
 }
});

test("semua operasi proposisional yang berhasil sah menurut seluruh penilaian kebenaran",()=>{
 const expressions=[p,q,negate(p),negate(q),and(p,q),or(p,q),implies(p,q),implies(q,r),implies(p,and(q,r)),implies(and(p,q),r)];
 for(const a of expressions) for(const b of expressions){
  const output=operate(a,b); if(!output.ok)continue;
  const names=[...new Set([...symbols(a),...symbols(b),...symbols(output.expression)])];
  for(let mask=0;mask<2**names.length;mask++){
   const values=Object.fromEntries(names.map((n,i)=>[n,!!(mask&(1<<i))]));
   if(evaluate(a,values)&&evaluate(b,values))assert.ok(evaluate(output.expression,values),`${format(a)} * ${format(b)} ⇒ ${format(output.expression)}`);
  }
 }
});

test("sepuluh latihan memiliki jalur pembuktian yang dapat dijalankan oleh mesin game",()=>{
 const e=questions.map(q=>q.premises.map(p=>p.expression));
 const proof:Expression[]=[];
 proof[0]=result(e[0][1],e[0][0]);
 proof[1]=result(e[1][1],contra(e[1][0]));
 proof[2]=result(e[2][2],result(e[2][0],e[2][1]));
 proof[3]=result(e[3][1],contra(e[3][0]));
 proof[4]=result(e[4][1],e[4][0]);
 proof[5]=result(e[5][2],contra(result(e[5][0],e[5][1])));
 const quorum=result(e[6][2],e[6][0]);
 const alternatives=result(quorum,e[6][1]);
 proof[6]=result(e[6][2],alternatives);
 const chain=result(result(e[7][0],e[7][1]),e[7][2]);
 proof[7]=result(e[7][3],contra(chain));
 proof[8]=result(result(e[8][0],e[8][1]),e[8][2]);
 const verified=result(e[9][2],e[9][0]);
 proof[9]=result(verified,result(verified,e[9][1]));
 questions.forEach((question,i)=>{
  assert.ok(!question.premises.some(p=>achieves(p.expression,question.goal)),"Tujuan belum langsung diberikan sebagai fakta");
  assert.ok(achieves(proof[i],question.goal),`${question.id}: ${format(proof[i])}`);
 });
});
