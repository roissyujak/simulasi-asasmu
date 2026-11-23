(window.MAPEL = window.MAPEL || []).push({
  id: 'tjw', urut: 5, ikon: '📿', nama: 'Tajwid', tanggal: 'Selasa, 1 Desember 2026',
  ujian: { jumlah: 20, menit: 45 },
  kisi: ['Hukum Nun Sukun dan Tanwin', 'Hukum Mim Sukun', 'Mad dan Mad Thabi\'i', 'Macam-macam Mad Far\'i'],
  catatan: 'Soal tajwid ini hanya melatih teori dan contoh sederhana. Latihan membaca (praktik) tetap perlu bersama guru.',
  soal: [
    // ---- Nun sukun & tanwin
    { t: 'Nun sukun & tanwin', q: `Apabila nun sukun (نْ) atau tanwin bertemu huruf qaf (ق), hukum bacaannya disebut ....`, o: ['ikhfa haqiqi', 'idzhar halqi', 'iqlab', 'idgham bighunnah'], a: 0, e: `Huruf ikhfa ada 15, termasuk qaf (ق). Dibaca samar disertai dengung.` },
    { t: 'Nun sukun & tanwin', q: `Huruf idzhar halqi berjumlah ....`, o: ['6 huruf', '4 huruf', '15 huruf', '2 huruf'], a: 0, e: `Huruf idzhar halqi: ء ه ع ح غ خ. Dibaca jelas tanpa dengung.` },
    { t: 'Nun sukun & tanwin', q: `Nun sukun bertemu huruf و (waw) dibaca dengan hukum ....`, o: ['idgham bighunnah', 'idgham bilaghunnah', 'iqlab', 'idzhar halqi'], a: 0, e: `Idgham bighunnah: huruf ي ن م و ("yanmu"). Dibaca melebur dengan dengung.` },
    { t: 'Nun sukun & tanwin', q: `Huruf idgham bilaghunnah adalah ....`, o: ['lam (ل) dan ra (ر)', 'ya (ي) dan nun (ن)', 'ba (ب)', 'ha (ه) dan ain (ع)'], a: 0, e: `Idgham bilaghunnah: melebur tanpa dengung, hurufnya ل dan ر.` },
    { t: 'Nun sukun & tanwin', q: `Nun sukun atau tanwin bertemu huruf ba (ب) dibaca dengan hukum ....`, o: ['iqlab', 'ikhfa haqiqi', 'idzhar halqi', 'idgham bighunnah'], a: 0, e: `Iqlab: nun sukun/tanwin diganti bunyi mim, disamarkan dan didengungkan.` },
    { t: 'Nun sukun & tanwin', q: `Pada kata مِنْ خَوْفٍ, nun sukun bertemu huruf kha (خ). Hukum bacaannya adalah ....`, o: ['idzhar halqi', 'ikhfa haqiqi', 'iqlab', 'idgham bighunnah'], a: 0, e: `Kha (خ) termasuk huruf halqi (tenggorokan) sehingga dibaca jelas: idzhar halqi.` },

    // ---- Mim sukun
    { t: 'Mim sukun', q: `Mim sukun bertemu huruf ba (ب) dibaca dengan hukum ....`, o: ['ikhfa syafawi', 'idgham mimi', 'idzhar syafawi', 'iqlab'], a: 0, e: `Ikhfa syafawi: mim sukun bertemu ba, dibaca samar dengan dengung di bibir.` },
    { t: 'Mim sukun', q: `Mim sukun bertemu huruf mim (م) dibaca dengan hukum ....`, o: ['idgham mimi', 'ikhfa syafawi', 'idzhar syafawi', 'idzhar halqi'], a: 0, e: `Idgham mimi: dua mim bertemu, dibaca melebur dengan dengung.` },
    { t: 'Mim sukun', q: `Nama lain idgham mimi adalah ....`, o: ['idgham mitslain (mutamatsilain)', 'idgham mutajanisain', 'idgham mutaqaribain', 'idgham bighunnah'], a: 0, e: `Mim bertemu mim = dua huruf sama (mitslain), sehingga disebut idgham mitslain/mutamatsilain.` },
    { t: 'Mim sukun', q: `Mim sukun bertemu semua huruf hijaiyah selain mim dan ba dibaca dengan hukum ....`, o: ['idzhar syafawi', 'ikhfa syafawi', 'idgham mimi', 'iqlab'], a: 0, e: `Idzhar syafawi: dibaca jelas tanpa dengung.` },
    { t: 'Mim sukun', q: `Hukum bacaan mim sukun pada: تَرْمِيهِم بِحِجَارَةٍ adalah ....`, o: ['ikhfa syafawi', 'idgham mimi', 'idzhar syafawi', 'iqlab'], a: 0, e: `Mim sukun pada "-him" bertemu ba (بِ) pada "bi-hijarah" → ikhfa syafawi.` },
    { t: 'Mim sukun', q: `Hukum bacaan pada هُمْ مِنْ (mim sukun bertemu mim) adalah ....`, o: ['idgham mimi', 'ikhfa syafawi', 'idzhar syafawi', 'idgham bilaghunnah'], a: 0, e: `Mim sukun bertemu mim → idgham mimi.` },

    // ---- Mad thabi'i
    { t: 'Mad thabi\'i', q: `Mad thabi'i dibaca sepanjang ....`, o: ['2 harakat', '4 harakat', '6 harakat', '1 harakat'], a: 0, e: `Mad thabi'i (mad asli) dibaca 2 harakat (sekitar dua ketukan).` },
    { t: 'Mad thabi\'i', q: `Huruf mad pada mad thabi'i ada tiga, yaitu ....`, o: ['alif, waw, dan ya', 'alif, lam, dan mim', 'ba, ta, dan tsa', 'ha, ain, dan kha'], a: 0, e: `Huruf mad: alif (ا), waw sukun (و), ya sukun (ي).` },
    { t: 'Mad thabi\'i', q: `Pasangan harakat yang tepat untuk huruf alif (ا) pada mad thabi'i adalah ....`, o: ['fathah', 'kasrah', 'dhammah', 'sukun'], a: 0, e: `Alif didahului fathah; ya sukun didahului kasrah; waw sukun didahului dhammah.` },
    { t: 'Mad thabi\'i', q: `Pada mad thabi'i, huruf waw sukun (و) berpasangan dengan harakat ....`, o: ['dhammah', 'fathah', 'kasrah', 'tanwin'], a: 0, e: `Waw sukun didahului huruf berharakat dhammah (contoh: يَقُولُ).` },

    // ---- Mad far'i
    { t: 'Mad far\'i', q: `Yang BUKAN termasuk mad far'i adalah ....`, o: ['mad thabi\'i', 'mad wajib muttashil', 'mad jaiz munfashil', 'mad liin'], a: 0, e: `Mad thabi'i adalah mad asli. Mad far'i adalah mad cabang, yaitu mad yang ada sebab tambahan (hamzah atau sukun).` },
    { t: 'Mad far\'i', q: `Mad wajib muttashil terjadi apabila mad bertemu hamzah ....`, o: ['dalam satu kata', 'pada dua kata yang berbeda', 'di akhir ayat', 'tidak ada hamzah'], a: 0, e: `Muttashil = bersambung (satu kata), contoh: جَاءَ، السَّمَاءِ.` },
    { t: 'Mad far\'i', q: `Mad wajib muttashil dibaca sepanjang ....`, o: ['4 atau 5 harakat', '2 harakat', '1 harakat', '8 harakat'], a: 0, e: `Mad wajib muttashil wajib dibaca panjang 4–5 harakat.` },
    { t: 'Mad far\'i', q: `Mad jaiz munfashil terjadi apabila mad bertemu hamzah ....`, o: ['pada dua kata yang berbeda', 'dalam satu kata', 'bertemu sukun', 'di awal kata'], a: 0, e: `Munfashil = terpisah (mad di akhir kata, hamzah di awal kata berikutnya).` },
    { t: 'Mad far\'i', q: `Contoh mad jaiz munfashil adalah ....`, o: ['مَا أَدْرَاكَ', 'جَاءَ', 'قَالَ', 'يَقُولُ'], a: 0, e: `Pada مَا أَدْرَاكَ, mad (alif setelah mim) di akhir kata "ma" bertemu hamzah di awal kata "adraka". Contoh جَاءَ adalah muttashil; قَالَ dan يَقُولُ adalah mad thabi'i.` },
    { t: 'Mad far\'i', q: `Huruf mad pada mad liin berjumlah ....`, o: ['2 huruf (waw dan ya sukun)', '3 huruf', '1 huruf', '4 huruf'], a: 0, e: `Mad liin: waw sukun atau ya sukun yang didahului fathah (contoh: خَوْفٍ، بَيْتٍ). Dibaca lunak ketika waqaf.` },
    { t: 'Mad far\'i', q: `Pada hukum bacaan mad liin, huruf yang disukunkan berada pada bagian ....`, o: ['akhir kata/ayat (karena waqaf)', 'awal kata', 'tengah kata', 'awal ayat'], a: 0, e: `Mad liin terjadi di akhir kata ketika berhenti (waqaf), dan harakat akhirnya disukunkan.` }
  ]
});
