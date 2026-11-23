(window.MAPEL = window.MAPEL || []).push({
  id: 'ing', urut: 1, ikon: '🇬🇧', nama: 'Bahasa Inggris', tanggal: 'Kamis, 26 November 2026',
  ujian: { jumlah: 30, menit: 60 },
  kisi: ['Verb 1 and verb 2', 'Regular and irregular verb', 'Positive, negative, interrogative sentences', 'Yes/No question', 'Last, yesterday, ago', 'To be (past tense)', 'Feeling', '5W1H in past tense'],
  catatan: 'Soal gambar/menggambar ekspresi (Draw the feeling) tidak bisa dibuat di sini — latih di buku.',
  soal: [
    // Verb 1 & 2, regular / irregular
    { t: 'Verb 1 & 2', q: `The past form (verb 2) of "go" is ....`, o: ['went', 'goed', 'gone', 'going'], a: 0, e: `"Go" adalah irregular verb. Verb 2-nya "went" (bukan "goed").` },
    { t: 'Verb 1 & 2', q: `The past form (verb 2) of "see" is ....`, o: ['saw', 'seed', 'seen', 'sees'], a: 0, e: `See → saw (irregular). "Seen" adalah verb 3.` },
    { t: 'Verb 1 & 2', q: `The past form (verb 2) of "make" is ....`, o: ['made', 'maked', 'makes', 'making'], a: 0, e: `Make → made (irregular).` },
    { t: 'Regular/Irregular', q: `The past form of "play" is ....`, o: ['played', 'plaied', 'plaid', 'plays'], a: 0, e: `"Play" adalah regular verb: tambahkan -ed → played.` },
    { t: 'Regular/Irregular', q: `The past form of "study" is ....`, o: ['studied', 'studyed', 'studed', 'studying'], a: 0, e: `Kata kerja berakhiran konsonan + y: ubah y menjadi i lalu tambah -ed → studied.` },
    { t: 'Regular/Irregular', q: `Which one is an IRREGULAR verb (verb 2)?`, o: ['walked', 'bought', 'cooked', 'jumped'], a: 1, e: `Walked, cooked, jumped berakhiran -ed (regular). "Bought" adalah bentuk lampau tak beraturan dari "buy".` },
    { t: 'Regular/Irregular', q: `She ____ to school by bike yesterday.`, o: ['went', 'goes', 'go', 'going'], a: 0, e: `Ada kata "yesterday" → kalimat lampau, pakai verb 2: went.` },
    { t: 'Regular/Irregular', q: `I ____ a cake three hours ago.`, o: ['made', 'make', 'makes', 'making'], a: 0, e: `"Three hours ago" menunjukkan masa lampau → made.` },

    // Positive, negative, interrogative, yes/no
    { t: 'Kalimat positif-negatif-tanya', q: `Positive: My father gave a letter for me.\nNegative: ....`,
      o: ['My father did not give a letter for me.', 'My father did not gave a letter for me.', 'My father not give a letter for me.', 'My father does not give a letter for me.'], a: 0,
      e: `Negatif lampau: did not + verb 1. Setelah "did not", verb kembali ke bentuk dasar (give), bukan gave.` },
    { t: 'Kalimat positif-negatif-tanya', q: `Positive: Dani saw a beach view last week.\nInterrogative: ....`,
      o: ['Did Dani see a beach view last week?', 'Did Dani saw a beach view last week?', 'Was Dani see a beach view last week?', 'Does Dani see a beach view last week?'], a: 0,
      e: `Kalimat tanya lampau: Did + subject + verb 1. Jadi "Did Dani see ...?".` },
    { t: 'Kalimat positif-negatif-tanya', q: `Choose the correct NEGATIVE sentence.`,
      o: ['She did not eat the cake.', 'She did not ate the cake.', 'She not ate the cake.', 'She was not eat the cake.'], a: 0,
      e: `did not + verb 1 (eat).` },
    { t: 'Yes/No question', q: `Did Dani see a beach view last week?\nChoose the right short answer (yes).`,
      o: ['Yes, he did.', 'Yes, he was.', 'Yes, he does.', 'Yes, Dani saw.'], a: 0, e: `Pertanyaan diawali "Did" dijawab dengan "Yes, ... did." atau "No, ... did not."` },
    { t: 'Yes/No question', q: `"Did you eat breakfast yesterday?"\nShort answer (no):`,
      o: [`No, I didn't.`, `No, I wasn't.`, `No, I don't.`, `No, I am not.`], a: 0, e: `Jawaban singkat pertanyaan "Did": No, I didn't (did not).` },

    // last / yesterday / ago
    { t: 'Last, yesterday, ago', q: `I saw her ____.`, o: ['yesterday', 'last', 'ago', 'before'], a: 0, e: `"Yesterday" berdiri sendiri (kemarin). "Last" harus diikuti kata waktu (last week), "ago" diletakkan setelah ukuran waktu (two days ago).` },
    { t: 'Last, yesterday, ago', q: `I went to the beach a week ____.`, o: ['ago', 'last', 'yesterday', 'then'], a: 0, e: `"A week ago" = seminggu yang lalu.` },
    { t: 'Last, yesterday, ago', q: `They arrived in Surabaya ____ weekend.`, o: ['last', 'ago', 'yesterday', 'next'], a: 0, e: `"Last weekend" = akhir pekan lalu.` },

    // was / were
    { t: 'To be (past)', q: `You ____ late ten minutes ago.`, o: ['were', 'was', 'are', 'is'], a: 0, e: `Subject "you" memakai "were".` },
    { t: 'To be (past)', q: `These articles ____ very interesting.`, o: ['were', 'was', 'is', 'are'], a: 0, e: `"These articles" jamak → were (lampau).` },
    { t: 'To be (past)', q: `Jihan ____ 13 years old last year.`, o: ['was', 'were', 'is', 'are'], a: 0, e: `Subject tunggal (Jihan) → was.` },
    { t: 'To be (past)', q: `____ your father at the office this morning?`, o: ['Was', 'Were', 'Did', 'Do'], a: 0, e: `"Your father" tunggal → Was.` },
    { t: 'To be (past)', q: `____ your pets in the garden?`, o: ['Were', 'Was', 'Did', 'Does'], a: 0, e: `"Your pets" jamak → Were.` },
    { t: 'To be (past)', q: `Rearrange the words into a good sentence:\nwere – in – Sunday – My family – the – last – playground`,
      o: ['My family were in the playground last Sunday.', 'Last Sunday in the playground were My family.', 'My family in the playground were last Sunday.', 'Were My family in last Sunday the playground.'], a: 0,
      e: `Susunan: Subject + was/were + keterangan tempat + keterangan waktu.` },
    { t: 'To be (past)', q: `Rearrange the words:\nago – was – He – there – days – three`,
      o: ['He was there three days ago.', 'He three days ago was there.', 'Was he there three days ago.', 'Ago three days he was there.'], a: 0, e: `He + was + there + three days + ago.` },
    { t: 'Kalimat positif-negatif-tanya', q: `Rearrange the words:\narrive – did – he – last – in – holiday? – Jakarta`,
      o: ['Did he arrive in Jakarta last holiday?', 'He did arrive in Jakarta last holiday?', 'Did arrive he in Jakarta last holiday?', 'Did he arrived in Jakarta last holiday?'], a: 0,
      e: `Kalimat tanya lampau: Did + subject + verb 1 + keterangan tempat + keterangan waktu.` },

    // Feeling
    { t: 'Feeling', q: `Dika will get his exam result tomorrow. He feels ____.`, o: ['nervous', 'relieved', 'happy', 'sleepy'], a: 0, e: `Nervous = gugup/tegang menunggu sesuatu.` },
    { t: 'Feeling', q: `The exam is over and Rina finished all the questions. She feels ____.`, o: ['relieved', 'nervous', 'worried', 'angry'], a: 0, e: `Relieved = lega.` },
    { t: 'Feeling', q: `Mother was ____ when I came home very late.`, o: ['worried', 'relieved', 'proud', 'sleepy'], a: 0, e: `Worried = khawatir/cemas.` },
    { t: 'Feeling', q: `What is the English word for "lega"?`, o: ['relieved', 'worried', 'nervous', 'sad'], a: 0, e: `Lega = relieved; khawatir = worried; gugup = nervous; sedih = sad; senang = happy.` },

    // 5W1H
    { t: '5W1H (past)', q: `A: "Where ____ you see a gardener?"\nB: "I saw a gardener at the backyard."`, o: ['did', 'do', 'was', 'are'], a: 0, e: `Pertanyaan lampau dengan 5W1H: Question word + did + subject + verb 1.` },
    { t: '5W1H (past)', q: `A: "____ did you come to Juna's house?"\nB: "I came on foot."`, o: ['How', 'When', 'Who', 'What'], a: 0, e: `"On foot" (berjalan kaki) menjelaskan cara → How.` },
    { t: '5W1H (past)', q: `A: "____ didn't you tell me about your birthday party?"\nB: "Because it's a surprise birthday party."`, o: ['Why', 'Where', 'When', 'Who'], a: 0, e: `Jawaban diawali "Because" (karena) → Why.` },
    { t: '5W1H (past)', q: `A: "____ did you make a cake?"\nB: "I made a cake three hours ago."`, o: ['When', 'Where', 'Who', 'Why'], a: 0, e: `"Three hours ago" menjelaskan waktu → When.` },
    { t: '5W1H (past)', q: `A: "____ gave you this book?"\nB: "My teacher gave it to me."`, o: ['Who', 'What', 'Where', 'How'], a: 0, e: `Jawaban berupa orang (my teacher) → Who.` },
    { t: '5W1H (past)', q: `A: "____ did you eat at the canteen?"\nB: "I ate fried rice."`, o: ['What', 'Who', 'When', 'Why'], a: 0, e: `Jawaban berupa benda/makanan → What.` }
  ]
});
