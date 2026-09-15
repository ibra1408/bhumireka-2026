import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIG Bhumireka 2026",
  description:
    "The 1st Rapid Geospasial Prototype Development in Indonesia — kompetisi inovasi GNSS oleh Badan Informasi Geospasial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      {/*
        Font "Plus Jakarta Sans" (teks umum) dan "Lilita One" (judul Hero)
        dimuat lewat Google Fonts agar nama family cocok dengan utility
        Tailwind arbitrary value (font-['Plus_Jakarta_Sans',sans-serif])
        yang dipakai di seluruh komponen.

        Untuk performa lebih baik, ganti dengan `next/font/google`:
          import { Plus_Jakarta_Sans, Lilita_One } from "next/font/google";
      */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['Plus_Jakarta_Sans',sans-serif]">{children}</body>
    </html>
  );
}
