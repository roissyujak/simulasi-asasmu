(window.MAPEL = window.MAPEL || []).push({
  id: 'jwa', urut: 9, ikon: '🎭', nama: 'Bahasa Jawa', tanggal: 'Rabu, 2 Desember 2026',
  ujian: { jumlah: 20, menit: 60 },
  kisi: ['Crita wayang, paribasan, bebasan', 'Pidhato/sesorah (lan parikan)', 'Pacelathon, ukara tanduk lan tanggap', 'Aksara Jawa, tembung entar lan kerata basa'],
  catatan: 'Aksara Jawa tampil bila HP/browser punya font Javanese. Jika muncul kotak kosong, soal aksara dilewati saja. Kunci jawaban perlu dicocokkan dengan buku pegangan sekolah.',
  soal: [
    // ---- Crita wayang, paribasan, bebasan
    { t: 'Wayang & paribasan', q: `Raden Gatotkaca iku putrane ....`, o: ['Werkudara (Bima) lan Dewi Arimbi', 'Arjuna lan Dewi Sumbadra', 'Yudhistira lan Dewi Drupadi', 'Nakula lan Sadewa'], a: 0, e: `Gatotkaca iku putrane Werkudara (Bima) lan Dewi Arimbi.` },
    { t: 'Wayang & paribasan', q: `Gatotkaca kondhang kanthi sesanti "otot kawat balung wesi". Tegese ....`, o: ['kuwat banget', 'kurus', 'lemes', 'cilik'], a: 0, e: `Otot kawat balung wesi = ototé kaya kawat, balungé kaya wesi, tegesé kuwat banget.` },
    { t: 'Wayang & paribasan', q: `Paribasan "adigang, adigung, adiguna" tegese wong sing ....`, o: ['ngendelake kekuwatan, kaluhuran, lan kapinteran', 'sregep nyambut gawe', 'seneng tetulung', 'seneng ngalah'], a: 0, e: `Adigang = ngendelake kekuwatan, adigung = ngendelake kaluhuran/kedudukan, adiguna = ngendelake kapinteran.` },
    { t: 'Wayang & paribasan', q: `Unen-unen kang gumathok, ora kena diowahi, lan tegese wantah (langsung) diarani ....`, o: ['paribasan', 'geguritan', 'tembang', 'sesorah'], a: 0, e: `Paribasan = unen-unen tetep kang tegese langsung. Bebasan = unen-unen kang ngemu surasa pepindhan (perumpamaan) bab sipat/kahanan.` },

    // ---- Pidhato/sesorah & parikan
    { t: 'Sesorah & parikan', q: `Sing diarani sesorah yaiku ....`, o: ['pidato / medharake gagasan marang wong akeh', 'tembang kanggo bocah', 'crita wayang', 'surat kanggo kanca'], a: 0, e: `Sesorah (pidhato) = medharake pikiran utawa kekarepan kanthi lisan ing ngarepe wong akeh.` },
    { t: 'Sesorah & parikan', q: `Urutan cengkorongan sesorah sing bener yaiku ....`,
      o: ['salam pambuka – pambuka – isi – panutup – salam panutup', 'isi – salam pambuka – panutup – pambuka', 'panutup – isi – pambuka – salam pambuka', 'pambuka – salam panutup – isi – salam pambuka'], a: 0, e: `Urutan: salam pambuka, pambuka, isi, panutup, lan salam panutup.` },
    { t: 'Sesorah & parikan', q: `Metode sesorah sing ora nggunakake teks lan diwacakake dadakan diarani metode ....`, o: ['impromptu', 'naskah', 'apalan', 'ekstemporan'], a: 0, e: `Metode sesorah: naskah (maca teks), apalan (diapalake), impromptu (dadakan), ekstemporan (nganggo poin-poin garis gedhe).` },
    { t: 'Sesorah & parikan', q: `Parikan iku bisa diarani ....`, o: ['pantun Jawa', 'cerkak', 'wayang kulit', 'surat'], a: 0, e: `Parikan = pantun Jawa, cacahé gatra loro (cakepan/sampiran lan isi) utawa patang gatra.` },

    // ---- Pacelathon, ukara tanduk/tanggap
    { t: 'Pacelathon & ukara', q: `Pacelathon tegese ....`, o: ['wawan rembug / dialog', 'crita sing diwaca dhewe', 'pidato ing ngarepe wong akeh', 'tembang macapat'], a: 0, e: `Pacelathon = wawan rembug (percakapan) antarane loro utawa luwih.` },
    { t: 'Pacelathon & ukara', q: `Ukara tanduk yaiku ukara ....`, o: ['kang jejere nindakake pagawean', 'kang jejere dikenani pagawean', 'kang nganggo tembung "dadi"', 'kang ora nganggo tembung kriya'], a: 0, e: `Ukara tanduk: jejere nindakake pagawean (aktif), tembung kriyane nganggo ater-ater anuswara (m-, ng-, ny-, n-). Contone: Bapak nyapu latar.` },
    { t: 'Pacelathon & ukara', q: `Pilihen ukara tanduk!`, o: ['Ibu nggodhog banyu.', 'Banyu digodhog Ibu.', 'Layang ditulis Adhiku.', 'Kebon disirami Bapak.'], a: 0, e: `Ukara tanduk jejere (Ibu) nindakake pagawean. Liyane yaiku ukara tanggap (nganggo di-).` },
    { t: 'Pacelathon & ukara', q: `Ukara tanggap saka "Ibu nggodhog banyu." yaiku ....`, o: ['Banyu digodhog Ibu.', 'Ibu digodhog banyu.', 'Banyu nggodhog Ibu.', 'Ibu kegodhog banyu.'], a: 0, e: `Ukara tanggap: jejere dikenani pagawean, tembung kriyane nganggo di-/ka-/ke-. Banyu (jejere) digodhog Ibu.` },
    { t: 'Pacelathon & ukara', q: `Pilihen ukara tanggap!`, o: ['Layang ditulis Rina.', 'Rina nulis layang.', 'Adhiku macak sepatu.', 'Bapak nyapu latar.'], a: 0, e: `Tembung kriya "ditulis" nganggo ater-ater di- = ukara tanggap.` },

    // ---- Geguritan
    { t: 'Geguritan', q: `Cacahe gatra (larik) saben sapada diarani ....`, o: ['guru gatra', 'guru wilangan', 'guru lagu', 'guru swara'], a: 0, e: `Guru gatra = cacahing larik. Guru wilangan = cacahing wanda saben gatra. Guru lagu = tibaning swara ing pungkasaning gatra.` },
    { t: 'Geguritan', q: `Tibaning swara (vokal) ing pungkasane gatra diarani ....`, o: ['guru lagu', 'guru gatra', 'guru wilangan', 'guru sandi'], a: 0, e: `Guru lagu = tibaning swara/dhong-dhinge ing pungkasaning gatra.` },
    { t: 'Geguritan', q: `Sing kudu digatekake nalika maca geguritan yaiku ....`, o: ['wicara (lafal), wirama, wiraga, lan wirasa', 'kandel tipise kertas', 'sepira cepete maca', 'sepira dawane geguritan'], a: 0, e: `Maca geguritan kudu nganggo lafal sing cetha (wicara), irama (wirama), polah (wiraga), lan penghayatan (wirasa).` },

    // ---- Aksara, tembung entar, kerata basa
    { t: 'Aksara & tembung entar', q: `Aksara Jawa nglegena cacahe ana ....`, o: ['20', '15', '25', '30'], a: 0, e: `Aksara nglegena: ha na ca ra ka, da ta sa wa la, pa dha ja ya nya, ma ga ba tha nga = 20 aksara.` },
    { t: 'Aksara & tembung entar', q: `Aksara ꦕ diwaca ....`, o: ['ca', 'na', 'ra', 'ka'], a: 0, e: `Urutan: ha (ꦲ) na (ꦤ) ca (ꦕ) ra (ꦫ) ka (ꦏ). Aksara ꦕ diwaca "ca".` },
    { t: 'Aksara & tembung entar', q: `Aksara ꦲꦤꦕꦫꦏ diwaca ....`, o: ['hanacaraka', 'datasawala', 'padhajayanya', 'magabathanga'], a: 0, e: `Lima aksara kapisan: ha na ca ra ka.` },
    { t: 'Aksara & tembung entar', q: `Tembung entar "puput yuswa" tegese ....`, o: ['seda (tilar donya)', 'nesu', 'nyambut gawe', 'seneng banget'], a: 0, e: `Puput yuswa = entek umure, tegese seda/tilar donya.` },
    { t: 'Aksara & tembung entar', q: `Tembung entar "abang kupinge" tegese ....`, o: ['nesu (duka)', 'lara kuping', 'seneng', 'sedhih'], a: 0, e: `Abang kupinge = nesu/duka. Tembung entar nduweni tegese kang ora sabenere (kiasan).` },
    { t: 'Aksara & tembung entar', q: `Tembung entar "adol kringet" tegese ....`, o: ['nyambut gawe kanthi sregep', 'dodolan kringet', 'lara', 'lunga adoh'], a: 0, e: `Adol kringet = nyambut gawe kanthi atos/sregep.` },
    { t: 'Aksara & tembung entar', q: `Tembung "guru" yen dikerata basa dadi ....`, o: ['digugu lan ditiru', 'dituruti lan dijaga', 'diwenehi lan dijaluk', 'digawa lan dilebokake'], a: 0, e: `Kerata basa guru = digugu lan ditiru (dipercaya omongane lan ditiru tindak-tanduke).` }
  ]
});
