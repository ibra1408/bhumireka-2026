import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhumireka 2026 | GNSS Innovation Challenge",
  description:
    "Bhumireka 2026, kompetisi inovasi teknologi GNSS untuk kebencanaan dan transportasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}