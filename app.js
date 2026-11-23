/* Simulasi ASAS Kelas 6A — HTML/CSS/JS murni, hasil disimpan di localStorage browser. */
(function () {
  'use strict';

  var KEY = 'asas6a:v1';
  var MAX_ATT = 60; // riwayat maksimal per siswa per mapel
  var app = document.getElementById('app');
  var SISWA = window.SISWA || [];
  var MAPEL = (window.MAPEL || []).slice().sort(function (a, b) { return (a.urut || 99) - (b.urut || 99); });

  var db = load();
  var me = null;
  var cur = null;

  /* ---------- penyimpanan ---------- */
  function load() {
    try {
      var d = JSON.parse(localStorage.getItem(KEY));
      if (d && typeof d === 'object') { d.h = d.h || {}; return d; }
    } catch (e) {}
    return { last: null, h: {} };
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(db)); return true; }
    catch (e) { alert('Penyimpanan browser tidak tersedia (mungkin mode privat). Hasil tidak bisa disimpan.'); return false; }
  }
  function hist(sid, mid) { return ((db.h[sid] || {})[mid]) || []; }

  /* ---------- util DOM ---------- */
  var AR = /([֐-ࣿיִ-﷿ﹰ-﻿][֐-ࣿיִ-﷿ﹰ-﻿‌‍\s]*)/;
  var JV = /([ꦀ-꧟][ꦀ-꧟\s]*)/;

  function rich(text) {
    var f = document.createDocumentFragment();
    String(text).split(AR).forEach(function (p, i) {
      if (i % 2 === 1) {
        var s = document.createElement('span');
        s.className = 'ar'; s.dir = 'rtl';
        s.textContent = p.replace(/\s+$/, '');
        f.appendChild(s);
        if (/\s$/.test(p)) f.appendChild(document.createTextNode(' '));
      } else {
        p.split(JV).forEach(function (q, j) {
          if (j % 2 === 1) {
            var s2 = document.createElement('span');
            s2.className = 'jv';
            s2.textContent = q.replace(/\s+$/, '');
            f.appendChild(s2);
            if (/\s$/.test(q)) f.appendChild(document.createTextNode(' '));
          } else if (q) f.appendChild(document.createTextNode(q));
        });
      }
    });
    return f;
  }

  function h(tag, attrs) {
    var e = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (k === 'class') e.className = v;
      else if (k.indexOf('on') === 0) e.addEventListener(k.slice(2), v);
      else if (v === true) e.setAttribute(k, '');
      else if (v !== false && v != null) e.setAttribute(k, v);
    });
    for (var i = 2; i < arguments.length; i++) add(e, arguments[i]);
    return e;
  }
  function add(e, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { add(e, x); }); return; }
    if (typeof c === 'string' || typeof c === 'number') e.appendChild(rich(c));
    else e.appendChild(c);
  }
  function show(node) { app.replaceChildren(node); window.scrollTo(0, 0); }
  function wrap() { var d = h('div'); add(d, Array.prototype.slice.call(arguments)); return d; }

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function range(n) { var r = []; for (var i = 0; i < n; i++) r.push(i); return r; }
  function tone(p) { return p >= 80 ? 'ok' : p >= 60 ? 'warn' : 'bad'; }
  function tgl(ts) {
    var d = new Date(ts);
    var b = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getDate() + ' ' + b[d.getMonth()] + ' ' + d.getFullYear() + ', ' + p(d.getHours()) + '.' + p(d.getMinutes());
  }
  function bar(p, cls) { return h('div', { class: 'bar ' + (cls || tone(p)) }, h('i', { style: 'width:' + p + '%' })); }
  function mapelById(id) { return MAPEL.filter(function (m) { return m.id === id; })[0]; }

  /* ---------- penilaian ---------- */
  function norm(s) {
    return String(s).toLowerCase().normalize('NFC').replace(/[.,;:!?"'’“”()]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function num(s) {
    s = String(s).toLowerCase().replace(/[a-z\s]+/g, '');
    if (!s) return null;
    if (s.indexOf(',') >= 0) s = s.replace(/\./g, '').replace(',', '.');
    else if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, '');
    var v = parseFloat(s);
    return isNaN(v) ? null : v;
  }
  function isCorrect(q, a) {
    if (a === undefined || a === null || a === '') return false;
    if (q.o) return a === q.a;
    if (q.n !== undefined) { var v = num(a); return v !== null && Math.abs(v - q.n) < 1e-9; }
    var x = norm(a);
    return (q.k || []).some(function (k) { return norm(k) === x; });
  }
  function kunciText(q) {
    if (q.o) return q.o[q.a];
    if (q.kunci) return q.kunci;
    return q.k ? q.k[0] : String(q.n).replace('.', ',');
  }
  function pickText(q, a) {
    if (a === null || a === undefined || a === '') return '(tidak dijawab)';
    return q.o ? q.o[a] : String(a);
  }

  /* ---------- tampilan: pilih nama ---------- */
  function viewNama() {
    var list = h('div', { class: 'namelist' });
    var inp = h('input', { type: 'search', class: 'search', placeholder: 'Cari nama…', autocomplete: 'off', oninput: draw });
    function draw() {
      var q = inp.value.toLowerCase();
      var f = SISWA.filter(function (s) { return s.nama.toLowerCase().indexOf(q) >= 0; });
      list.replaceChildren();
      if (!f.length) list.appendChild(h('p', { class: 'mut' }, 'Nama tidak ditemukan.'));
      f.forEach(function (s) {
        list.appendChild(h('button', { class: 'name', onclick: function () { me = s; db.last = s.id; save(); viewHome(); } }, s.nama));
      });
    }
    show(wrap(
      h('h1', {}, '📝 Simulasi ASAS Kelas 6A'),
      h('p', { class: 'mut' }, 'SD Birrul Walidain Muhammadiyah Sragen · Semester Ganjil 2026/2027'),
      h('div', { class: 'card' }, h('b', {}, 'Siapa yang mau berlatih?'), inp, list)
    ));
    draw();
  }

  /* ---------- tampilan: beranda ---------- */
  function viewHome() {
    var grid = h('div', { class: 'grid' });
    MAPEL.forEach(function (m) {
      var hs = hist(me.id, m.id);
      var best = hs.reduce(function (a, x) { return Math.max(a, x.skor); }, -1);
      grid.appendChild(h('button', { class: 'mapel', onclick: function () { viewMapel(m); } },
        h('div', { class: 'ik' }, m.ikon),
        h('div', { class: 'nm' }, m.nama),
        h('div', { class: 'sub' }, m.soal.length + ' soal · ' + m.tanggal.split(',')[0] + ', ' + shortDate(m.tanggal)),
        hs.length ? h('div', { style: 'margin-top:6px' }, h('span', { class: 'badge ' + tone(best) }, 'Terbaik ' + best), ' ', h('span', { class: 'mut' }, hs.length + '×')) : h('div', { class: 'sub' }, 'Belum pernah dicoba')
      ));
    });
    show(wrap(
      h('div', { class: 'row sb' },
        h('div', {}, h('div', { class: 'mut' }, 'Halo,'), h('h1', { style: 'margin:0' }, me.nama)),
        h('button', { class: 'ghost', onclick: viewNama }, 'Ganti nama')
      ),
      h('p', { class: 'mut' }, 'Pilih mata pelajaran untuk mulai berlatih. Pembahasan muncul setelah selesai mengerjakan.'),
      grid,
      h('footer', {},
        h('button', { class: 'sec', onclick: viewRiwayat }, '📊 Riwayat & perkembangan'), ' ',
        h('button', { class: 'ghost', onclick: viewCadangan }, '💾 Cadangan data')
      )
    ));
  }
  function shortDate(t) { return t.split(',')[1].trim().replace('November', 'Nov').replace('Desember', 'Des').replace(' 2026', ''); }

  /* ---------- tampilan: detail mapel ---------- */
  function weakTopics(sid, m) {
    var hs = hist(sid, m.id);
    if (!hs.length) return [];
    var agg = {};
    hs.slice(-3).forEach(function (a) {
      Object.keys(a.topik).forEach(function (t) {
        agg[t] = agg[t] || [0, 0];
        agg[t][0] += a.topik[t][0]; agg[t][1] += a.topik[t][1];
      });
    });
    return Object.keys(agg).filter(function (t) { return agg[t][0] / agg[t][1] < 0.7; });
  }

  function viewMapel(m) {
    var hs = hist(me.id, m.id).slice().reverse();
    var weak = weakTopics(me.id, m);
    var n = m.soal.length;
    var acts = h('div', { class: 'row', style: 'flex-direction:column;align-items:stretch' });
    var uj = m.ujian || { jumlah: n, menit: Math.max(15, n) };
    var jm = Math.min(uj.jumlah, n);
    acts.appendChild(h('button', { onclick: function () { start(m, pilih(m, jm), 'Simulasi ASAS', uj.menit); } }, '⏱️ Simulasi ASAS (' + jm + ' soal · ' + uj.menit + ' menit)'));
    if (n > 12) acts.appendChild(h('button', { class: 'sec', onclick: function () { start(m, shuffle(range(n)).slice(0, 10), 'Latihan 10 soal'); } }, '⚡ Latihan cepat (10 soal acak)'));
    if (weak.length) {
      acts.appendChild(h('button', { class: 'sec', onclick: function () {
        var idx = range(n).filter(function (i) { return weak.indexOf(m.soal[i].t) >= 0; });
        start(m, shuffle(idx), 'Latihan topik lemah');
      } }, '🎯 Latih topik yang masih lemah'));
    }
    show(wrap(
      h('button', { class: 'ghost', onclick: viewHome }, '← Kembali'),
      h('h1', {}, m.ikon + ' ' + m.nama),
      h('p', { class: 'mut' }, 'ASAS: ' + m.tanggal),
      h('div', { class: 'card' }, h('b', {}, 'Kisi-kisi'),
        h('div', { class: 'chips' }, m.kisi.map(function (k) { return h('span', { class: 'chip' }, k); }))),
      m.catatan ? h('div', { class: 'card', style: 'background:#fffbeb' }, '⚠️ ', m.catatan) : null,
      weak.length ? h('p', {}, 'Topik yang masih lemah: ', weak.map(function (t) { return h('span', { class: 'badge bad', style: 'margin-right:4px' }, t); })) : null,
      acts,
      hs.length ? h('div', {}, h('h2', {}, 'Percobaan terakhir'),
        hs.slice(0, 5).map(function (a) {
          return h('button', { class: 'att', onclick: function () { viewHasil(a, m, true); } },
            h('span', {}, tgl(a.ts) + ' · ' + a.mode), h('span', { class: 'badge ' + tone(a.skor) }, a.skor));
        })) : null
    ));
  }

  /* ---------- kuis ---------- */
  var tmr = null;
  function stopTimer() { if (tmr) { clearInterval(tmr); tmr = null; } }
  function fmt(sec) { var mm = Math.floor(sec / 60), ss = sec % 60; return (mm < 10 ? '0' : '') + mm + ':' + (ss < 10 ? '0' : '') + ss; }
  function tick() {
    if (!cur || !cur.end) { stopTimer(); return; }
    var sisa = Math.max(0, Math.round((cur.end - Date.now()) / 1000));
    var el = document.getElementById('tmr');
    if (el) { el.textContent = '⏱ ' + fmt(sisa); el.className = 'badge ' + (sisa <= 300 ? 'bad' : 'ok'); }
    if (sisa <= 0) { stopTimer(); alert('Waktu habis! Jawabanmu dikumpulkan otomatis.'); selesai(); }
  }
  /* pilih n soal, dibagi rata antar topik */
  function pilih(m, n) {
    var g = {};
    shuffle(range(m.soal.length)).forEach(function (i) { var t = m.soal[i].t || 'Umum'; (g[t] = g[t] || []).push(i); });
    var keys = shuffle(Object.keys(g)), out = [];
    while (out.length < n && keys.some(function (k) { return g[k].length; })) {
      keys.forEach(function (k) { if (out.length < n && g[k].length) out.push(g[k].pop()); });
    }
    return shuffle(out);
  }
  function start(m, idx, mode, menit) {
    if (!idx.length) { alert('Belum ada soal untuk dipilih.'); return; }
    stopTimer();
    cur = {
      m: m, mode: mode, idx: 0, ans: [], t0: Date.now(), end: menit ? Date.now() + menit * 60000 : 0, menit: menit || 0,
      items: idx.map(function (qi) {
        var q = m.soal[qi];
        return { qi: qi, order: q.o ? (q.fix ? range(q.o.length) : shuffle(range(q.o.length))) : null };
      })
    };
    if (cur.end) tmr = setInterval(tick, 1000);
    viewSoal();
  }

  function viewSoal() {
    var m = cur.m, i = cur.idx, it = cur.items[i], q = m.soal[it.qi], total = cur.items.length;
    var body = h('div');
    if (q.b && m.bacaan && m.bacaan[q.b]) body.appendChild(h('div', { class: 'passage' }, m.bacaan[q.b]));
    body.appendChild(h('div', { class: 'qtext' }, q.q));

    var nextBtn;
    function refreshNext() {
      var a = cur.ans[i];
      nextBtn.disabled = false;
      nextBtn.textContent = i === total - 1 ? 'Selesai ✔' : 'Lanjut →';
      nextBtn.className = (a === undefined || a === '') ? 'sec' : '';
    }

    if (q.o) {
      var opts = h('div', { class: 'opts' });
      it.order.forEach(function (oi, pos) {
        var b = h('button', { class: 'opt' + (cur.ans[i] === oi ? ' sel' : ''), onclick: function () {
          cur.ans[i] = oi;
          Array.prototype.forEach.call(opts.children, function (c) { c.classList.remove('sel'); });
          b.classList.add('sel'); refreshNext();
        } }, h('span', { class: 'lt' }, String.fromCharCode(65 + pos)), h('span', {}, q.o[oi]));
        opts.appendChild(b);
      });
      body.appendChild(opts);
    } else {
      var inp = h('input', {
        class: 'isian', type: 'text', autocomplete: 'off', autocapitalize: 'none', spellcheck: 'false',
        inputmode: q.n !== undefined ? 'decimal' : 'text', placeholder: q.hint || 'Ketik jawabanmu…',
        value: cur.ans[i] || '',
        oninput: function () { cur.ans[i] = inp.value; refreshNext(); },
        onkeydown: function (e) { if (e.key === 'Enter') { e.preventDefault(); next(); } }
      });
      body.appendChild(inp);
    }

    function next() {
      if (i < total - 1) { cur.idx++; viewSoal(); return; }
      var kosong = range(total).filter(function (k) { var a = cur.ans[k]; return a === undefined || a === ''; }).length;
      if (kosong && !confirm('Masih ada ' + kosong + ' soal belum dijawab. Tetap selesai?')) return;
      selesai();
    }
    nextBtn = h('button', { onclick: next }, '');
    var prevBtn = h('button', { class: 'sec', disabled: i === 0, onclick: function () { cur.idx--; viewSoal(); } }, '← Kembali');

    show(wrap(
      h('div', { class: 'qhead' },
        h('div', { class: 'row sb' }, h('b', {}, m.ikon + ' ' + m.nama), h('span', { class: 'mut' }, cur.end ? h('span', { id: 'tmr', class: 'badge ok', style: 'margin-right:8px' }, '') : null, 'Soal ' + (i + 1) + ' / ' + total)),
        bar(Math.round(i / total * 100), 'pri')),
      body,
      h('div', { class: 'bottombar' }, h('div', { class: 'in' }, prevBtn, nextBtn))
    ));
    refreshNext(); tick();
    var f = app.querySelector('.isian'); if (f) f.focus();
  }

  function selesai() {
    stopTimer();
    var m = cur.m, benar = 0, topik = {}, detail = [];
    cur.items.forEach(function (it, i) {
      var q = m.soal[it.qi], a = cur.ans[i], ok = isCorrect(q, a);
      var t = q.t || 'Umum';
      topik[t] = topik[t] || [0, 0];
      topik[t][1]++;
      if (ok) { benar++; topik[t][0]++; }
      detail.push({ qi: it.qi, a: a === undefined ? null : a, ok: ok });
    });
    var total = cur.items.length;
    var att = { ts: Date.now(), mode: cur.mode, benar: benar, total: total, skor: Math.round(benar / total * 100),
      dur: Math.round((Date.now() - cur.t0) / 1000), topik: topik, detail: detail };
    var byS = db.h[me.id] = db.h[me.id] || {};
    var arr = byS[m.id] = byS[m.id] || [];
    arr.push(att);
    if (arr.length > MAX_ATT) arr.splice(0, arr.length - MAX_ATT);
    save();
    cur = null;
    viewHasil(att, m, false);
  }

  /* ---------- hasil & pembahasan ---------- */
  function viewHasil(att, m, fromHist) {
    var only = false;
    var msg = att.skor >= 90 ? 'Luar biasa! 🌟' : att.skor >= 80 ? 'Bagus sekali! 👏' : att.skor >= 60 ? 'Lumayan, terus berlatih ya 💪' : 'Jangan menyerah, pelajari pembahasannya lalu coba lagi 📚';
    var topics = Object.keys(att.topik).map(function (t) {
      var p = Math.round(att.topik[t][0] / att.topik[t][1] * 100);
      return h('div', { class: 'trow' },
        h('div', { class: 'lb' }, h('span', {}, t), h('span', { class: 'mut' }, att.topik[t][0] + '/' + att.topik[t][1] + (p < 70 ? ' · perlu belajar lagi' : ''))),
        bar(p));
    });
    var weak = Object.keys(att.topik).filter(function (t) { return att.topik[t][0] / att.topik[t][1] < 0.7; });
    var wa = 'https://wa.me/?text=' + encodeURIComponent(
      'Hasil latihan ASAS 6A\n' + (me ? me.nama : '') + '\n' + m.nama + ': nilai ' + att.skor + ' (' + att.benar + '/' + att.total + ' benar)' +
      (weak.length ? '\nPerlu belajar lagi: ' + weak.join(', ') : '\nSemua topik sudah baik 👍'));

    var list = h('div');
    function drawList() {
      list.replaceChildren();
      att.detail.forEach(function (d, n) {
        if (only && d.ok) return;
        var q = m.soal[d.qi];
        if (!q) return;
        var card = h('div', { class: 'card rv ' + (d.ok ? 'ok' : 'bad') },
          h('div', { class: 'row sb' }, h('b', {}, 'Soal ' + (n + 1)), h('span', { class: 'badge ' + (d.ok ? 'ok' : 'bad') }, d.ok ? '✔ Benar' : '✘ Salah')),
          h('div', { class: 'mut' }, q.t || ''));
        if (q.b && m.bacaan && m.bacaan[q.b]) card.appendChild(h('div', { class: 'passage' }, m.bacaan[q.b]));
        card.appendChild(h('div', { class: 'qtext', style: 'font-size:1rem' }, q.q));
        card.appendChild(h('div', { class: 'ans you ' + (d.ok ? 'ok' : 'bad') }, 'Jawabanmu: ', pickText(q, d.a)));
        if (!d.ok) card.appendChild(h('div', { class: 'ans key' }, 'Jawaban benar: ', h('b', {}, kunciText(q))));
        if (q.e) card.appendChild(h('div', { class: 'exp' }, '💡 ', q.e));
        list.appendChild(card);
      });
      if (!list.children.length) list.appendChild(h('p', { class: 'center' }, '🎉 Semua jawaban benar!'));
    }
    var tabAll = h('button', { class: 'on', onclick: function () { only = false; tabAll.className = 'on'; tabWrong.className = ''; drawList(); } }, 'Semua soal');
    var tabWrong = h('button', { onclick: function () { only = true; tabWrong.className = 'on'; tabAll.className = ''; drawList(); } }, 'Yang salah saja');

    show(wrap(
      h('div', { class: 'card center' },
        h('div', { class: 'mut' }, m.ikon + ' ' + m.nama + ' · ' + att.mode),
        h('div', { class: 'score ' + tone(att.skor) }, String(att.skor)),
        h('b', {}, att.benar + ' dari ' + att.total + ' soal benar'),
        h('p', {}, msg),
        h('div', { class: 'mut' }, tgl(att.ts) + (att.dur ? ' · ' + Math.max(1, Math.round(att.dur / 60)) + ' menit' : ''))),
      h('div', { class: 'card' }, h('b', {}, 'Evaluasi per topik'), topics),
      h('div', { class: 'row', style: 'flex-direction:column;align-items:stretch' },
        fromHist ? h('button', { onclick: function () { viewMapel(m); } }, '← Kembali ke ' + m.nama)
          : h('button', { onclick: function () { viewMapel(m); } }, '🔁 Latihan lagi / pilih mode'),
        h('button', { class: 'sec', onclick: viewHome }, 'Pilih mapel lain'),
        h('a', { class: 'btn sec', href: wa, target: '_blank', rel: 'noopener' }, '📤 Kirim ringkasan ke WhatsApp')),
      h('h2', {}, 'Pembahasan'),
      h('div', { class: 'tabs' }, tabAll, tabWrong),
      list
    ));
    drawList();
  }

  /* ---------- riwayat ---------- */
  function viewRiwayat() {
    var box = h('div');
    var any = false;
    MAPEL.forEach(function (m) {
      var hs = hist(me.id, m.id);
      if (!hs.length) return;
      any = true;
      var avg = Math.round(hs.reduce(function (a, x) { return a + x.skor; }, 0) / hs.length);
      var best = hs.reduce(function (a, x) { return Math.max(a, x.skor); }, 0);
      var last = hs[hs.length - 1].skor;
      var trend = hs.length > 1 ? (last - hs[0].skor) : 0;
      box.appendChild(h('div', { class: 'card' },
        h('div', { class: 'row sb' }, h('b', {}, m.ikon + ' ' + m.nama), h('span', { class: 'badge ' + tone(last) }, 'Terakhir ' + last)),
        h('p', { class: 'mut' }, hs.length + ' percobaan · rata-rata ' + avg + ' · terbaik ' + best + (hs.length > 1 ? ' · perubahan ' + (trend >= 0 ? '+' : '') + trend + ' sejak percobaan pertama' : '')),
        bar(avg),
        h('div', { style: 'margin-top:8px' }, hs.slice().reverse().slice(0, 5).map(function (a) {
          return h('button', { class: 'att', onclick: function () { viewHasil(a, m, true); } }, h('span', {}, tgl(a.ts) + ' · ' + a.mode), h('span', { class: 'badge ' + tone(a.skor) }, a.skor));
        })),
        h('button', { class: 'ghost', onclick: function () {
          if (confirm('Hapus semua riwayat ' + m.nama + ' untuk ' + me.nama + '?')) { delete db.h[me.id][m.id]; save(); viewRiwayat(); }
        } }, 'Hapus riwayat ' + m.nama)));
    });
    if (!any) box.appendChild(h('div', { class: 'card center' }, 'Belum ada riwayat. Yuk mulai berlatih!'));
    show(wrap(h('button', { class: 'ghost', onclick: viewHome }, '← Kembali'), h('h1', {}, '📊 Riwayat ' + me.nama), box));
  }

  /* ---------- cadangan ---------- */
  function viewCadangan() {
    var file = h('input', { type: 'file', accept: 'application/json,.json', style: 'display:none', onchange: function () {
      var f = file.files[0]; if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        try {
          var d = JSON.parse(r.result), n = 0;
          Object.keys(d.h || {}).forEach(function (sid) {
            Object.keys(d.h[sid]).forEach(function (mid) {
              var cur = ((db.h[sid] = db.h[sid] || {})[mid] = db.h[sid][mid] || []);
              var have = {}; cur.forEach(function (a) { have[a.ts] = 1; });
              d.h[sid][mid].forEach(function (a) { if (!have[a.ts]) { cur.push(a); n++; } });
              cur.sort(function (a, b) { return a.ts - b.ts; });
            });
          });
          save(); alert('Berhasil menggabungkan ' + n + ' percobaan.'); viewCadangan();
        } catch (e) { alert('File tidak valid.'); }
      };
      r.readAsText(f);
    } });
    show(wrap(
      h('button', { class: 'ghost', onclick: viewHome }, '← Kembali'),
      h('h1', {}, '💾 Cadangan data'),
      h('div', { class: 'card' },
        h('p', {}, 'Hasil latihan disimpan di browser perangkat ini. Jika cache dihapus atau ganti HP, riwayat bisa hilang — simpan cadangannya secara berkala.'),
        h('button', { class: 'block', onclick: function () {
          var d = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; };
          var a = h('a', { href: URL.createObjectURL(new Blob([JSON.stringify(db)], { type: 'application/json' })),
            download: 'cadangan-asas-6a-' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '.json' });
          document.body.appendChild(a); a.click(); a.remove();
        } }, '⬇️ Unduh cadangan'),
        h('div', { style: 'height:8px' }),
        h('button', { class: 'sec block', onclick: function () { file.click(); } }, '⬆️ Pulihkan dari file cadangan'), file),
      h('div', { class: 'card' },
        h('button', { class: 'danger block', onclick: function () {
          if (confirm('Hapus SEMUA riwayat ' + me.nama + '?')) { delete db.h[me.id]; save(); viewHome(); }
        } }, 'Hapus semua riwayat ' + me.nama))
    ));
  }

  /* ---------- mulai ---------- */
  if (!MAPEL.length) { show(h('p', { class: 'loading' }, 'Data soal belum termuat.')); return; }
  var last = SISWA.filter(function (s) { return s.id === db.last; })[0];
  if (last) { me = last; viewHome(); } else viewNama();
})();
