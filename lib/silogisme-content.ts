import { and, implies as imp, literal as l, or, some, type Expression } from "./silogisme-engine";

export interface SyllogismQuestion {
  id: string; title: string; level: string; symbols: Record<string, string>;
  premises: { text: string; expression: Expression; hint: string }[];
  goal: Expression; conclusion: string;
}
const p=l("p"), q=l("q"), r=l("r"), s=l("s");
const np=l("p",true), nq=l("q",true), nr=l("r",true), ns=l("s",true);
export const SILOGISME_QUESTIONS: SyllogismQuestion[] = [
  { id:"jalan",title:"Mulai dari fakta",level:"Pemanasan",symbols:{p:"Hujan lebat turun",q:"Jalan menjadi licin"},premises:[
    {text:"Setiap kali hujan lebat turun, jalan menjadi licin.",expression:imp(p,q),hint:"Hujan lebat memastikan jalan licin. Pangkalnya hujan, ujungnya jalan licin."},
    {text:"Hari ini hujan lebat turun.",expression:p,hint:"Ini fakta p yang sudah diketahui, bukan sebuah panah."}],goal:q,conclusion:"Jalan menjadi licin." },
  { id:"perusahaan",title:"Berbalik dengan negasi",level:"Dasar",symbols:{p:"Perusahaan rugi besar",q:"Perusahaan mengurangi karyawan"},premises:[
    {text:"Perusahaan yang rugi besar selalu mengurangi karyawan.",expression:imp(p,q),hint:"Semua yang p juga q. Panah berjalan dari rugi besar menuju pengurangan karyawan."},
    {text:"Perusahaan ini tidak mengurangi karyawan.",expression:nq,hint:"Negasi melekat pada q: ~q."}],goal:np,conclusion:"Perusahaan ini tidak rugi besar." },
  { id:"latihan",title:"Dua aturan, satu jalur",level:"Dasar",symbols:{p:"Dita mengikuti latihan",q:"Stamina Dita meningkat",r:"Performa Dita membaik"},premises:[
    {text:"Keikutsertaan Dita dalam latihan menjamin peningkatan staminanya.",expression:imp(p,q),hint:"Mengikuti latihan cukup untuk memastikan stamina meningkat."},
    {text:"Performa Dita membaik apabila staminanya meningkat.",expression:imp(q,r),hint:"Bagian setelah apabila menjadi pangkal: stamina meningkat → performa membaik."},
    {text:"Dita mengikuti latihan.",expression:p,hint:"Fakta awalnya p."}],goal:r,conclusion:"Performa Dita membaik." },
  { id:"izin",title:"Jangan tertukar: hanya jika",level:"Menengah",symbols:{p:"Arga mendapat izin masuk",q:"Arga menunjukkan kartu peserta"},premises:[
    {text:"Arga mendapat izin masuk hanya jika ia menunjukkan kartu peserta.",expression:imp(p,q),hint:"Pemilik izin masuk pasti sudah menunjukkan kartu. Hanya jika menyatakan syarat wajib."},
    {text:"Arga tidak menunjukkan kartu peserta.",expression:nq,hint:"Yang tidak terjadi adalah q, sehingga faktanya ~q."}],goal:np,conclusion:"Arga tidak mendapat izin masuk." },
  { id:"tiket",title:"Salah satu harus benar",level:"Menengah",symbols:{p:"Kakak membeli tiket biasa",q:"Kakak memakai tiket promo"},premises:[
    {text:"Kakak membeli tiket biasa atau memakai tiket promo; keduanya diperbolehkan.",expression:or(p,q),hint:"Atau inklusif ditulis p ∨ q. Bukan p ∧ q."},
    {text:"Kakak tidak membeli tiket biasa.",expression:np,hint:"Faktanya ~p. Alternatif q harus terpenuhi."}],goal:q,conclusion:"Kakak memakai tiket promo." },
  { id:"auditor",title:"Sebagian, tetapi pasti",level:"Menantang",symbols:{p:"Auditor internal",q:"Pemegang sertifikat",r:"Penerima gratifikasi",s:"Kepala seksi"},premises:[
    {text:"Seluruh auditor internal memegang sertifikat.",expression:imp(p,q),hint:"Kelompok auditor berada di dalam kelompok pemegang sertifikat."},
    {text:"Tidak ada pemegang sertifikat yang menerima gratifikasi.",expression:imp(q,nr),hint:"Semua q bukan r, sehingga q → ~r."},
    {text:"Sebagian kepala seksi menerima gratifikasi.",expression:some(s,r),hint:"Ada anggota yang sekaligus s dan r. Gunakan garis, bukan panah."}],goal:some(s,np),conclusion:"Sebagian kepala seksi bukan auditor internal." },
  { id:"rapat",title:"Hanya jika bertemu atau",level:"Menantang",symbols:{p:"Rapat dilaksanakan",q:"Kuorum terpenuhi",r:"Notula dibuat",s:"Rekaman disimpan"},premises:[
    {text:"Pelaksanaan rapat mensyaratkan terpenuhinya kuorum.",expression:imp(p,q),hint:"Status rapat dilaksanakan menuju syarat wajibnya, kuorum terpenuhi."},
    {text:"Kuorum yang terpenuhi menjamin notula dibuat atau rekaman disimpan.",expression:imp(q,or(r,s)),hint:"Ujung panah berupa satu paket r ∨ s. Atau tidak sama dengan dan."},
    {text:"Rapat dilaksanakan, tetapi notulanya tidak dibuat.",expression:and(p,nr),hint:"Tetapi menggabungkan dua fakta: p dan ~r."}],goal:s,conclusion:"Rekaman rapat disimpan." },
  { id:"udara",title:"Telusuri tiga aturan",level:"Menantang",symbols:{p:"Kualitas udara memburuk",q:"Kasus asma meningkat",r:"Beban rumah sakit bertambah",s:"Anggaran kesehatan dinaikkan"},premises:[
    {text:"Memburuknya kualitas udara selalu diikuti peningkatan kasus asma.",expression:imp(p,q),hint:"p memastikan q, bukan sebaliknya."},
    {text:"Beban rumah sakit bertambah apabila kasus asma meningkat.",expression:imp(q,r),hint:"Apabila q, maka r."},
    {text:"Bertambahnya beban rumah sakit menjamin anggaran kesehatan dinaikkan.",expression:imp(r,s),hint:"Ini aturan r → s."},
    {text:"Anggaran kesehatan tidak dinaikkan.",expression:ns,hint:"Fakta awalnya ~s. Coba balik aturan dengan menegasikan kedua ujung."}],goal:np,conclusion:"Kualitas udara tidak memburuk." },
  { id:"siswa",title:"Pertahankan kata sebagian",level:"Menantang",symbols:{p:"Siswa kelas persiapan",q:"Anggota klub lari",r:"Memiliki fisik prima",s:"Rutin berolahraga"},premises:[
    {text:"Sebagian siswa kelas persiapan merupakan anggota klub lari.",expression:some(p,q),hint:"Fakta keberadaan: p — q, bukan semua p adalah q."},
    {text:"Setiap anggota klub lari memiliki fisik prima.",expression:imp(q,r),hint:"Semua q juga r."},
    {text:"Orang yang memiliki fisik prima rutin berolahraga.",expression:imp(r,s),hint:"r memastikan s. Jaga agar kesimpulannya tetap sebagian."}],goal:some(p,s),conclusion:"Sebagian siswa kelas persiapan rutin berolahraga." },
  { id:"dokumen",title:"Dua fakta dalam satu hasil",level:"Tantangan akhir",symbols:{p:"Berkas diterima",q:"Identitas terverifikasi",r:"Ijazah dilegalisasi",s:"Nomor peserta diterbitkan"},premises:[
    {text:"Berkas diterima hanya jika identitas terverifikasi dan ijazah dilegalisasi.",expression:imp(p,and(q,r)),hint:"Syarat wajibnya satu paket q ∧ r. Tuliskan p → (q ∧ r)."},
    {text:"Verifikasi identitas menjamin penerbitan nomor peserta.",expression:imp(q,s),hint:"q menghasilkan kepastian s."},
    {text:"Berkas peserta ini diterima.",expression:p,hint:"Faktanya p."}],goal:and(r,s),conclusion:"Ijazah dilegalisasi dan nomor peserta diterbitkan." },
];
