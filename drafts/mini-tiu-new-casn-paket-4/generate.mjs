import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { createFigural } from "./figural.mjs";
import { createTextQuestions } from "./text-questions.mjs";

const dir = path.dirname(fileURLToPath(import.meta.url));
const questions = [];
const keys = "CEBAD BDAEC ECDBA ABECD DACBE CEBDA BDAEC".replaceAll(" ", "").toLowerCase();
const keyForNumber = number => keys[number - 1];
function add(number, topic, subtype, prompt, correct, distractors, explanation) {
  assert.equal(number, questions.length + 1);
  assert.equal(distractors.length, 4);
  const labels = [...distractors];
  const key = keyForNumber(number);
  labels.splice("abcde".indexOf(key), 0, correct);
  assert.equal(new Set(labels).size, 5, "Pilihan harus berbeda");
  questions.push({
    id: "mini-tiu11-" + String(number).padStart(2, "0"),
    category: "TIU", topic, subtype, prompt,
    choices: labels.map((label, i) => ({ id: "abcde"[i], label, score: "abcde"[i] === key ? 5 : 0 })),
    explanation: explanation + "\nJawaban " + key.toUpperCase() + ".",
  });
}
createTextQuestions({ add });
createFigural({ dir, add, keyForNumber });
assert.equal(questions.length, 35);
for (const letter of "abcde") assert.equal(questions.filter(q=>q.choices.find(c=>c.score===5).id===letter).length,7);
const metadata = {
  status: "integrated",
  title: "Mini Try Out New TIU CASN — Paket 2 (Final)",
  packageId: "mini-tiu-new-casn-paket-2",
  durationMinutes: 30, questionCount: 35, maximumScore: 175,
  composition: { verbalAndLogic: 8, numericAndPatterns: 22, figural: 5 },
  referencePackages: ["mini-tiu-new-casn"],
  notes: [
    "Sudah dimasukkan ke aplikasi sebagai Mini Try Out New TIU CASN Paket 2.",
    "Pola mengikuti susunan paket acuan dengan variasi cara menjawab.",
    "Soal figural memiliki instruksi satu kalimat tanpa petunjuk pola.",
    "Tiap huruf kunci A–E muncul tujuh kali.",
    "Soal disusun untuk latihan; tidak diklaim sebagai soal resmi atau bocoran."
  ]
};
fs.writeFileSync(path.join(dir,"draft.json"),JSON.stringify({metadata,questions},null,2)+"\n");

const escape = value => value.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
function renderText(value) {
  if (value.startsWith("[img]")) return `<button type="button" class="image-zoom option-zoom" aria-label="Perbesar gambar pilihan jawaban"><img class="option-image" src="${escape(value.slice(5))}" alt="Gambar pilihan jawaban"></button>`;
  const lines = value.split("\n");
  let html = "", table = [];
  const flushTable = () => {
    if (!table.length) return;
    const rows = table.filter(line => !/^\|\s*:?-+/.test(line));
    html += `<div class="table-wrap"><table>${rows.map(row => `<tr>${row.split("|").slice(1,-1).map(cell => `<td>${escape(cell.trim())}</td>`).join("")}</tr>`).join("")}</table></div>`;
    table = [];
  };
  for (const line of lines) {
    if (line.startsWith("|")) { table.push(line); continue; }
    flushTable();
    const match = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (match) html += `<button type="button" class="image-zoom" aria-label="Perbesar ${escape(match[1])}"><img class="prompt-image" src="${escape(match[2])}" alt="${escape(match[1])}"></button>`;
    else if (line.trim()) html += `<p>${escape(line)}</p>`;
  }
  flushTable(); return html;
}
const cards = questions.map((q,i) => `<article id="soal-${i+1}" data-group="${i<8?"verbal":i<30?"numerik":"figural"}"><div class="question-heading"><span class="number">${i+1}</span><span class="topic">${escape(q.topic)}</span></div><div class="prompt">${renderText(q.prompt)}</div><ol class="options${i>=30?" figural-options":""}">${q.choices.map(c => `<li><span class="choice-letter">${c.id.toUpperCase()}</span><div>${renderText(c.label)}</div></li>`).join("")}</ol><details><summary>Kunci dan pembahasan</summary><div class="answer">Kunci ${q.choices.find(c=>c.score===5).id.toUpperCase()}</div><p><strong>Konsep:</strong> ${escape(q.subtype)}</p>${renderText(q.explanation)}</details></article>`).join("\n");
const keyRows = Array.from({length:7},(_,i) => `<tr>${questions.slice(i*5,i*5+5).map((q,j) => `<td><a href="#soal-${i*5+j+1}">${i*5+j+1}</a></td><td>${q.choices.find(c=>c.score===5).id.toUpperCase()}</td>`).join("")}</tr>`).join("");
const html = `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${metadata.title}</title><style>
*{box-sizing:border-box}body{margin:0;background:#f2f4f7;color:#17202c;font:16px/1.65 system-ui,sans-serif}.container{max-width:980px;margin:auto;padding:32px 24px}header{border-bottom:3px solid #1b3858;padding-bottom:22px}.badge{display:inline-block;background:#f8e8ba;color:#644608;padding:3px 12px;border-radius:20px;font-weight:700;font-size:12px;letter-spacing:.12em}h1{font-size:clamp(26px,4vw,38px);line-height:1.2;margin:16px 0}header p{margin:7px 0}.stats{display:flex;gap:12px;flex-wrap:wrap;margin:18px 0}.stats span{background:white;border:1px solid #d7dfe8;padding:7px 12px;border-radius:6px}nav{position:sticky;top:0;z-index:2;background:#f2f4f7ee;padding:16px 0;display:flex;flex-wrap:wrap;gap:8px}button,select{font:inherit;font-size:14px;border:1px solid #adbbca;border-radius:5px;background:white;padding:7px 12px;cursor:pointer}button:hover{background:#eaf0f7}article{scroll-margin-top:90px;background:#fff;border:1px solid #d7dfe8;border-radius:10px;margin:0 0 22px;padding:26px;break-inside:avoid}.question-heading{display:flex;gap:12px;align-items:center;border-bottom:1px solid #e6ebf1;padding-bottom:14px;margin-bottom:18px}.number{width:38px;height:38px;display:grid;place-items:center;background:#1b3858;color:white;border-radius:6px;font-weight:700;flex-shrink:0}.topic{font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#56677b}.subtype{font-size:14px;font-weight:600}.prompt p{margin:8px 0}.options{list-style:none;padding:0;margin:20px 0}.options li{display:flex;gap:12px;padding:9px 0;align-items:start}.options p{margin:0}.choice-letter{font-weight:700;border:1px solid #d7dfe8;border-radius:4px;width:28px;height:28px;display:grid;place-items:center;flex-shrink:0;font-size:14px}.prompt-image{display:block;width:auto;max-width:100%;max-height:430px;margin:20px 0}.option-image{display:block;width:144px;height:144px}.figural-options{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px}.figural-options li{display:flex;flex-direction:column;align-items:center}.figural-options .option-image{width:100%;max-width:144px;height:auto}details{background:#f5f8fc;border:1px solid #dde5ee;border-radius:6px;padding:12px 16px}summary{cursor:pointer;font-size:14px;font-weight:600;color:#1b3858}.answer{font-weight:700;margin-top:14px;color:#176441}details p{font-size:15px;margin:10px 0}.table-wrap{overflow:auto;margin:18px 0}table{border-collapse:collapse;background:white}td{border:1px solid #bac8d8;padding:9px 18px;text-align:center}.key-table td{padding:6px 14px}.key-table a{color:#1b3858}.key-section{background:#fff;padding:24px;border:1px solid #d7dfe8;border-radius:10px;margin-top:30px}footer{font-size:13px;color:#677487;margin-top:24px}[hidden]{display:none!important}@media(max-width:700px){.container{padding:22px 14px}article{padding:18px}.figural-options{grid-template-columns:repeat(3,minmax(0,1fr))}.key-table td{padding:5px 6px;font-size:13px}}@media print{body{background:white;font-size:11pt}.container{max-width:none;padding:0}nav,.badge{display:none}.stats span{padding:3px 8px}article{border-radius:0;padding:16px;margin-bottom:16px}.prompt-image{max-height:280px}.option-image{max-width:85px}.key-section{break-before:page}footer{display:none}details{font-size:10pt}summary{font-size:10pt}}
.image-zoom{display:block;border:0;padding:0;background:transparent;max-width:100%;cursor:zoom-in}.image-zoom:not(.option-zoom){width:100%}.image-zoom:hover{background:transparent}.image-zoom:focus-visible{outline:3px solid #467aab;outline-offset:4px}.option-zoom{width:144px}.image-viewer{max-width:94vw;width:1000px;max-height:94vh;padding:20px;border:1px solid #bbc6d3;border-radius:10px}.image-viewer::backdrop{background:#101927b8}.viewer-heading{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:18px}.viewer-heading p{margin:0;font-weight:600}.image-viewer img{display:block;width:100%;max-height:78vh;object-fit:contain}.zoom-hint{color:#56677b;font-size:14px}@media print{.image-viewer{display:none!important}}
</style></head><body><main class="container"><header><span class="badge">PAKET FINAL</span><h1>Mini Try Out New TIU CASN<br>Paket 2</h1><p>Soal baru dengan susunan yang mengikuti paket acuan. Paket ini sudah tersedia di aplikasi.</p><div class="stats"><span>35 soal</span><span>30 menit</span><span>Skor maksimum 175</span><span>A–E masing-masing 7 kunci</span></div><p>Komposisi: 8 verbal dan logika · 22 numerik dan pola · 5 figural.</p><p class="zoom-hint">Klik gambar untuk memperbesar detail.</p></header><nav aria-label="Pengaturan tinjauan"><select id="filter" aria-label="Tampilkan kelompok soal"><option value="all">Semua soal</option><option value="verbal">Verbal & logika (1–8)</option><option value="numerik">Numerik & pola (9–30)</option><option value="figural">Figural (31–35)</option></select><button id="toggle">Buka semua pembahasan</button><button id="print">Cetak / simpan PDF</button></nav><section aria-label="Draft soal">${cards}</section><section class="key-section"><h2>Rekap kunci jawaban</h2><p>Benar = 5 poin; salah atau kosong = 0 poin.</p><div class="table-wrap"><table class="key-table"><tbody>${keyRows}</tbody></table></div></section><footer>Draft isi dan diagram untuk peninjauan. Pembahasan dapat dibuka per soal. Tidak diklaim sebagai soal resmi atau bocoran.</footer></main><dialog class="image-viewer" id="image-viewer" aria-labelledby="viewer-title"><div class="viewer-heading"><p id="viewer-title">Detail gambar</p><button type="button" id="close-viewer">Tutup</button></div><img id="viewer-image" alt="Detail gambar figural"></dialog><script>
const filter=document.getElementById('filter'),toggle=document.getElementById('toggle');filter.addEventListener('change',()=>{document.querySelectorAll('article').forEach(card=>card.hidden=filter.value!=='all'&&card.dataset.group!==filter.value)});toggle.addEventListener('click',()=>{const visible=[...document.querySelectorAll('article:not([hidden]) details')];const open=visible.some(item=>!item.open);visible.forEach(item=>item.open=open);toggle.textContent=open?'Tutup semua pembahasan':'Buka semua pembahasan'});document.getElementById('print').addEventListener('click',()=>window.print());
const viewer=document.getElementById('image-viewer'),viewerImage=document.getElementById('viewer-image');document.querySelectorAll('.image-zoom').forEach(button=>button.addEventListener('click',()=>{const source=button.querySelector('img');viewerImage.src=source.src;viewerImage.alt=source.alt;document.getElementById('viewer-title').textContent=source.alt;viewer.showModal()}));document.getElementById('close-viewer').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',event=>{if(event.target===viewer){const bounds=viewer.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)viewer.close()}});
</script></body></html>`;
fs.writeFileSync(path.join(dir, "draft.html"), html);

console.log("Draft tersimpan: "+questions.length+" soal; "+fs.readdirSync(path.join(dir,"assets")).length+" diagram.");
