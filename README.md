# Simulasi ASAS Kelas 6A

Aplikasi latihan soal ASAS (HTML + CSS + JavaScript murni, tanpa database dan tanpa build).
Hasil tiap anak disimpan di browser (`localStorage`).

## Coba di komputer
Buka `index.html` dengan Chrome/Edge (klik dua kali). Atau jalankan server kecil:

    python3 -m http.server 8000     # lalu buka http://localhost:8000

## Pasang di internet

**Vercel** (disarankan, bisa dari repo *private*)
1. Buat repo GitHub (private), unggah semua isi folder ini.
2. vercel.com → Add New → Project → pilih repo → Framework Preset: *Other* → Deploy.
   Tidak perlu isi Build Command / Output Directory.

**GitHub Pages**
Repo → Settings → Pages → Branch: `main` / folder `/ (root)` → Save.
(Pages untuk repo private memerlukan paket berbayar. Jika repo publik, ganti nama lengkap di `data/siswa.js` dengan nama panggilan.)

## Struktur
    index.html        halaman utama (memuat semua file data)
    style.css         tampilan
    app.js            logika: pilih nama, kuis, nilai, evaluasi, riwayat, cadangan
    data/siswa.js     daftar siswa
    data/*.js         bank soal per mapel (satu file = satu mapel)
    tools/cek-data.js pemeriksa data soal (node tools/cek-data.js)

## Menambah / mengubah soal
Buka file mapel di `data/`, tambahkan objek di dalam array `soal`:

    // pilihan ganda: o = pilihan, a = nomor kunci (mulai 0)
    { t: 'Nama topik', q: `Teks soal`, o: ['benar', 'salah1', 'salah2', 'salah3'], a: 0, e: `Pembahasan` },

    // isian angka (n) atau isian teks (k = daftar jawaban yang diterima)
    { t: 'Nama topik', q: `8 × 2 1/4 = ...`, n: 18, e: `Pembahasan` },
    { t: 'Nama topik', q: `Ibu kota Indonesia?`, k: ['jakarta'], e: `Pembahasan` },

Pilihan jawaban diacak otomatis oleh aplikasi (kecuali soal bertanda `fix: true`, misalnya Benar/Salah).
Soal berbacaan: isi `bacaan: { id: 'teks' }` di mapel, lalu tambahkan `b: 'id'` pada soal.
Setelah mengubah data, jalankan `node tools/cek-data.js` untuk memeriksa kunci.

## Data & cadangan
Riwayat tersimpan per perangkat/browser. Menu **Cadangan data** menyediakan unduh/pulihkan file JSON.
Jika cache browser dihapus atau ganti HP, riwayat hilang kecuali sudah dicadangkan.
Kunci jawaban ada di file data, jadi anak yang paham teknis bisa mengintipnya — cukup untuk latihan di rumah.


## Jumlah soal & durasi simulasi ASAS

Tombol **Simulasi ASAS** memakai timer hitung mundur (otomatis dikumpulkan saat waktu habis) dan mengambil soal acak yang dibagi rata antar topik. Pengaturan ada di tiap `data/*.js` pada `ujian: { jumlah, menit }`.

| Mapel | Soal | Menit |
|---|---|---|
| Bahasa Indonesia | 40 | 120 |
| Matematika | 35 | 90 |
| IPAS | 40 | 90 |
| PAI (AIK) | 35 | 90 |
| Pendidikan Pancasila | 35 | 90 |
| Bahasa Inggris | 30 | 60 |
| Bahasa Jawa | 20 | 60 |
| Bahasa Arab | 20 | 60 |
| Tajwid | 20 | 45 |

Angka ini acuan dari contoh kisi-kisi SAS/PSAS kelas 6 berbagai sekolah (bukan aturan resmi). Sesuaikan dengan ketentuan sekolah. Tombol *Latihan cepat* (10 soal acak) tidak memakai timer.
