# Blog Management System

Blog Management System adalah aplikasi sederhana yang memungkinkan Anda untuk membuat, membaca, mengedit, dan menghapus blog. Aplikasi ini dibangun dengan Node.js, Express, EJS, dan MySQL.

## Fitur

- Tampilan dashboard untuk melihat data dasbor.
- Manajemen blog dengan operasi CRUD (Create, Read, Update, Delete).
- Penggunaan MySQL untuk menyimpan data blog.

## Persyaratan

- Node.js
- MySQL
- npm

## Instalasi

1. Clone repositori ini ke komputer Anda.
2. Navigasi ke direktori proyek menggunakan terminal.
3. Jalankan perintah berikut untuk menginstal dependensi:

   ```
   npm install
   ```

4. Buat database MySQL dan tabel 'blogs' sesuai dengan struktur yang diberikan di bawah.

## Database

Anda perlu membuat tabel 'blogs' dalam database MySQL Anda. Contoh SQL untuk membuat tabel:

```sql
CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Pastikan Anda telah mengonfigurasi koneksi database di file `db.js`.

## Penggunaan

1. Jalankan aplikasi dengan perintah:

   ```
   node app.js
   ```

2. Buka browser dan akses `http://localhost:3000` (ganti port sesuai dengan yang telah Anda konfigurasi).

## Lisensi

Distributed under the MIT License. Lihat `LICENSE` untuk detail lebih lanjut.

## Kontak

Jika Anda memiliki pertanyaan atau masukan, jangan ragu untuk menghubungi kami.

[Email Saya](mailto:fajarjulyana1@gmail.com)
```
