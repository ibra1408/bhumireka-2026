# BIG Bhumireka 2026 — Komponen Next.js

Kode ini dihasilkan dari desain Figma **WEBDESIGN BHUMIREKA FINAL (Copy)**
(`node-id=0-1`, canvas "Page 1" yang berisi 12+ frame section berurutan).

## 1. Dependensi yang perlu diinstal

```bash
npm install lucide-react
```

Proyek diasumsikan sudah memakai **Next.js App Router** + **Tailwind CSS**
(`create-next-app` dengan opsi Tailwind sudah cukup). Tidak ada plugin
Tailwind tambahan yang dibutuhkan — semua class memakai utility standar
(termasuk beberapa *arbitrary value* seperti `bg-[#007eaf]`).

## 2. Struktur file

```
bhumireka/
├─ app/
│  ├─ layout.tsx          # root layout + import font Google Fonts
│  ├─ globals.css         # @tailwind base/components/utilities
│  └─ page.tsx            # merangkai seluruh section jadi 1 landing page
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx       # header (dipakai di dalam HeroSection)
│  │  └─ Footer.tsx
│  ├─ ui/
│  │  └─ Countdown.tsx    # hitung mundur hari-H ("use client")
│  └─ sections/
│     ├─ HeroSection.tsx
│     ├─ TaglineSection.tsx
│     ├─ CategoriesSection.tsx
│     ├─ CompetitionsSection.tsx
│     ├─ ParticipantsSection.tsx
│     ├─ ResearchParticipantsSection.tsx
│     ├─ DownloadsSection.tsx
│     ├─ TimelineSection.tsx
│     ├─ LocationSection.tsx
│     ├─ RegistrationFormSection.tsx   # form tab RGPD & Paper ("use client")
│     ├─ FaqSection.tsx                # accordion FAQ ("use client")
│     ├─ PartnersSection.tsx
│     └─ FinalCtaSection.tsx
└─ README.md
```

Cara pakai: salin folder `app/` dan `components/` ke root proyek Next.js
Anda (merge dengan `app/` yang sudah ada), lalu jalankan `npm run dev`.

Semua komponen menerima **props opsional** (lihat interface di setiap
file) sehingga bisa diisi ulang dengan data dari CMS/API tanpa mengubah
markup — nilai default sudah memuat konten sesuai desain Figma.

## 3. Catatan penting / penyesuaian dari desain asli

1. **Efek shader "nebula" di Hero (Cover Page)** — desain asli
   memakai efek WebGPU (`<ShaderFill>` custom Figma) untuk starfield
   animasi. Ini memerlukan runtime shader khusus & API eksperimental
   *HTML‑in‑Canvas*, tidak cocok untuk proyek Next.js standar. Diganti
   dengan pendekatan **CSS murni** (radial‑gradient + pola bintang) yang
   meniru tampilan visualnya. Jika Anda tetap ingin efek shader asli,
   beri tahu saya agar file runtime WGSL terkait disalin secara terpisah.
2. **Gambar/asset** — semua `imageUrl` masih memakai URL sementara dari
   Figma (`https://www.figma.com/api/mcp/asset/...`) yang **kedaluwarsa
   ±7 hari**. Unduh aset asli (lewat Figma → Export, atau MCP
   `download_assets`), simpan di `public/images/`, lalu ganti nilai
   default prop `imageUrl`/`logoUrl` masing‑masing komponen.
3. **Layout absolut → responsif** — kode mentah dari Figma berbasis
   posisi absolut piksel (kanvas 1440px). Semua komponen di atas sudah
   ditulis ulang memakai Flexbox/Grid + breakpoint `sm:`/`lg:` Tailwind
   agar responsif mobile‑first, sambil menjaga warna, tipografi, dan
   struktur visual sesuai desain.
4. **Linimasa (Timeline)** — pada desain asli, tahapan diletakkan bebas
   di sepanjang garis diagonal dekoratif. Ditata ulang sebagai *stepper*
   linier (vertikal di mobile, horizontal di desktop) agar markup tetap
   bersih dan dapat diakses (semantik `<ol>`).
5. **Mitra & Kolaborator** — pada file Figma, slot logo mitra masih
   berupa kotak placeholder (belum ada logo final), jadi komponen
   `PartnersSection` menampilkan placeholder abu‑abu berlabel nama mitra
   sampai Anda mengisi prop `logoUrl` dengan logo sesungguhnya.
6. **Form pendaftaran** — `RegistrationFormSection` murni mengelola
   state di client (`useState`) dan memanggil callback `onSubmitRgpd`
   / `onSubmitPaper` saat submit. Anda perlu menghubungkan callback ini
   ke API/route handler (`app/api/.../route.ts`) sendiri sesuai backend
   yang dipakai.
7. **Font** — "Plus Jakarta Sans" (teks) dan "Lilita One" (judul Hero)
   dimuat lewat tag `<link>` Google Fonts di `app/layout.tsx` agar nama
   family cocok dengan class Tailwind arbitrary (`font-['Plus_Jakarta_Sans',sans-serif]`).
   Untuk performa lebih baik pada produksi, migrasikan ke `next/font/google`.
