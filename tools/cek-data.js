// Jalankan: node tools/cek-data.js
// Memeriksa semua file data/*.js: struktur soal, kunci jawaban, topik, opsi ganda.
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..', 'data');
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort()) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
}
let err = 0, total = 0;
const bad = (m, msg) => { err++; console.log('  ✘ [' + m + '] ' + msg); };
const ids = new Set();
for (const m of ctx.window.MAPEL) {
  console.log(`${m.nama.padEnd(22)} ${String(m.soal.length).padStart(3)} soal`);
  total += m.soal.length;
  if (ids.has(m.id)) bad(m.id, 'id mapel ganda'); ids.add(m.id);
  const tops = {};
  m.soal.forEach((q, i) => {
    const n = i + 1, tag = m.id + '#' + n;
    if (!q.q) bad(tag, 'tidak ada teks soal');
    if (!q.t) bad(tag, 'tidak ada topik');
    if (!q.e) bad(tag, 'tidak ada pembahasan');
    tops[q.t] = (tops[q.t] || 0) + 1;
    if (q.b && !(m.bacaan && m.bacaan[q.b])) bad(tag, 'bacaan "' + q.b + '" tidak ada');
    if (q.o) {
      if (q.o.length < 2) bad(tag, 'opsi kurang dari 2');
      if (!Number.isInteger(q.a) || q.a < 0 || q.a >= q.o.length) bad(tag, 'indeks kunci di luar opsi');
      if (new Set(q.o).size !== q.o.length) bad(tag, 'ada opsi kembar');
    } else if (!(q.k && q.k.length) && q.n === undefined) bad(tag, 'isian tanpa kunci');
  });
  console.log('   topik:', Object.entries(tops).map(([k, v]) => k + ' (' + v + ')').join(' | '));
  const pos = [0, 0, 0, 0, 0];
  m.soal.forEach(q => { if (q.o && q.a < 5) pos[q.a]++; });
  console.log('   sebaran posisi kunci A/B/C/D (sebelum diacak di aplikasi):', pos.slice(0, 4).join('/'));
}
console.log(`\nTotal ${total} soal, ${err} masalah.`);
process.exit(err ? 1 : 0);
