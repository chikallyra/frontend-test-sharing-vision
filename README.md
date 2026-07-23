# Frontend Dashboard Test – Sharing Vision 2023

Halo 👋

Repository ini merupakan hasil pengerjaan technical test Frontend untuk Sharing Vision.

Project dibuat menggunakan **Next.js** dengan pendekatan yang sederhana namun tetap memperhatikan struktur kode, maintainability, dan user experience. Seluruh fitur yang diminta pada soal telah diimplementasikan dan dapat dicoba melalui deployment yang tersedia.

## Live Demo

**Application**
> https://your-vercel-url.vercel.app

**Repository**
> https://github.com/yourusername/your-repository

---

# Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Local Storage (sebagai penyimpanan data)
- Vercel (Deployment)

---

# Features

## 1. All Posts

Halaman utama untuk mengelola seluruh artikel.

### Published
- Menampilkan seluruh artikel dengan status **Published**
- Tabel berisi:
  - Title
  - Category
  - Action (Edit & Trash)

### Drafts
- Menampilkan artikel yang masih berstatus **Draft**
- Memiliki action yang sama seperti Published

### Trashed
- Menampilkan artikel yang telah dipindahkan ke Trash

### Edit Article
Saat icon **Edit** dipilih, pengguna akan diarahkan ke halaman edit yang berisi:
- Title
- Content
- Category

Perubahan dapat disimpan sebagai:
- Publish
- Draft

### Trash
Saat icon **Trash** dipilih:
- Status artikel berubah menjadi **Trashed**
- Artikel akan hilang dari tab Published/Draft dan muncul pada tab Trashed.

---

## 2. Add New

Halaman untuk membuat artikel baru.

Field yang tersedia:

- Title
- Content
- Category

Tersedia dua aksi:

- Publish
- Draft

---

## 3. Preview

Halaman Preview hanya menampilkan artikel dengan status **Published**.

Fitur:
- Menampilkan daftar blog/article
- Pagination
- Hanya artikel yang sudah dipublish yang dapat dilihat

---

# Project Structure

```
src/
│
├── app/
│   ├── page.tsx              # Landing page
│   ├── all-posts/            # All Posts page
│   ├── add-new/              # Create new article
│   ├── preview/              # Preview published articles
│   ├── edit/
│   │   └── [id]/             # Dynamic route for editing article
│   ├── globals.css
│   └── layout.tsx
│
├── components/               # Reusable UI components
├── lib/                      # Helper functions / shared logic
├── types/                    # TypeScript types
└── utils/                    # Utility functions
```

Project ini menggunakan **Next.js App Router**, sehingga setiap halaman direpresentasikan sebagai folder di dalam direktori `app`. Pendekatan ini membuat routing lebih terstruktur dan memudahkan pengembangan fitur baru di kemudian hari. Komponen, utilities, dan shared logic dipisahkan agar kode tetap modular dan mudah dipelihara.

---

# How to Run

Clone repository

```bash
git clone https://github.com/yourusername/your-repository.git
```

Masuk ke folder project

```bash
cd your-repository
```

Install dependency

```bash
npm install
```

Jalankan development server

```bash
npm run dev
```

Buka browser

```
http://localhost:3000
```

---

# Implementation Notes

Karena pada technical test tidak disediakan backend maupun API, aplikasi ini menggunakan **Local Storage** sebagai media penyimpanan data sehingga seluruh proses CRUD tetap dapat berjalan secara client-side.

Status artikel terdiri dari:

- Published
- Draft
- Trashed

Perubahan status akan langsung tercermin pada masing-masing tab maupun halaman Preview.

---

# What I Focused On

Selama mengerjakan project ini saya lebih memprioritaskan beberapa hal berikut:

- Komponen yang reusable
- Struktur folder yang mudah dipahami
- Clean dan readable code
- Responsive layout
- Validasi input
- User experience yang sederhana namun nyaman digunakan

Meskipun project ini merupakan technical test, saya tetap berusaha menulis kode yang cukup mudah untuk dikembangkan apabila nantinya diintegrasikan dengan REST API atau backend yang sesungguhnya.

---

# Future Improvements

Beberapa hal yang masih dapat dikembangkan:

- Integrasi dengan backend/API
- Authentication
- Rich Text Editor untuk Content
- Search & Filter article
- Restore article dari Trash
- Delete permanent
- Unit Testing
- Dark Mode

---

# Thank You

Terima kasih telah meluangkan waktu untuk melakukan review terhadap hasil pengerjaan saya.

Saya berharap implementasi ini dapat memberikan gambaran mengenai cara saya membangun aplikasi frontend, menyusun struktur project, serta menjaga kualitas kode agar tetap mudah dikembangkan di kemudian hari.

Saya sangat terbuka apabila terdapat masukan ataupun diskusi mengenai implementasi yang telah saya buat.