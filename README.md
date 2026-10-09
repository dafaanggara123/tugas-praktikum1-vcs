# Profil Mahasiswa

Website profil mahasiswa dengan konsep **simple luxury**: warna ivory, charcoal, dan aksen gold yang halus. Dibuat menggunakan HTML, CSS, dan JavaScript murni tanpa framework.

## Isi proyek

```text
profil-mahasiswa/
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
└── assets/
    └── foto-profil.svg
```

## Personalisasi sebelum dikumpulkan

1. Buka `index.html` menggunakan editor seperti Visual Studio Code.
2. Ubah teks `[Isi NIM Anda]`, `[Isi Kelas Anda]`, dan `[Isi Kelompok Anda]` sesuai data sebenarnya.
3. Ubah `Dafa Anggara` jika nama yang digunakan berbeda.
4. Ganti placeholder foto dengan foto sendiri: simpan fotonya di folder `assets` dengan nama `foto-profil.jpg`, lalu pada `index.html` ubah `src="assets/foto-profil.svg"` menjadi `src="assets/foto-profil.jpg"`.
5. Simpan semua perubahan dan buka `index.html` di browser untuk melihat hasilnya.

Tombol **Salin data profil** menyalin NIM, nama, kelas, dan kelompok untuk memudahkan penggunaan data.

## Upload ke GitHub

### Cara 1 — lewat website GitHub

1. Masuk ke [github.com](https://github.com/) dan buat repository baru bernama `profil-mahasiswa`.
2. Pada halaman repository, pilih **Add file → Upload files**.
3. Unggah isi folder ini (termasuk folder `assets`), bukan file ZIP-nya saja.
4. Isi commit message, misalnya `Initial commit - website profil mahasiswa`, kemudian klik **Commit changes**.

### Cara 2 — menggunakan Git di terminal

Jalankan terminal dari folder `profil-mahasiswa`:

```bash
git init
git add .
git commit -m "Initial commit - website profil mahasiswa"
git branch -M main
git remote add origin https://github.com/USERNAME/profil-mahasiswa.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub sendiri. Jika repository sudah memiliki commit/file awal, ikuti instruksi GitHub yang sesuai agar riwayat tidak bertabrakan.

## Publikasikan dengan GitHub Pages (opsional)

Pada repository, buka **Settings → Pages**. Di bagian build/deployment pilih **Deploy from a branch**, pilih branch `main` dan folder `/(root)`, lalu simpan. Tunggu proses publikasi selesai dan buka URL yang ditampilkan pada bagian Pages.
