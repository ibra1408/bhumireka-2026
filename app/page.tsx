"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Car,
  ChevronDown,
  Download,
  ExternalLink,
  FileText,
  Globe,
  MessageCircle,
  Mail,
  MapPin,
  Menu,
  Satellite,
  ShieldCheck,
  Users,
  X,
  Zap,
} from "lucide-react";

type Tab = "hackathon" | "paper";

const timeline = [
  {
    number: "01",
    title: "Pendaftaran & Seleksi",
    description:
      "Penjaringan 80 mahasiswa dan 40 peneliti/praktisi dari seluruh Indonesia.",
    date: "Fase 01",
  },
  {
    number: "02",
    title: "Technical Meeting",
    description:
      "Pemaparan KAK, aturan kompetisi, teknis pengerjaan, dan pembagian informasi starter kit.",
    date: "Fase 02",
  },
  {
    number: "03",
    title: "Hackathon & Mentoring",
    description:
      "Pengembangan purwarupa, coding, pengolahan data GNSS, dan pendampingan.",
    date: "Fase 03",
  },
  {
    number: "04",
    title: "Pameran & Presentasi",
    description:
      "Pameran poster inovasi dan pemaparan gagasan ilmiah di hadapan peserta.",
    date: "Fase 04",
  },
  {
    number: "05",
    title: "Demo Day",
    description:
      "Presentasi pitching 5 menit, live demo, penilaian, dan pengumuman pemenang.",
    date: "Fase 05",
  },
];

const faqs = [
  {
    question: "Apakah anggota tim harus dari universitas atau jurusan yang sama?",
    answer:
      "Tidak harus. Kolaborasi lintas disiplin seperti geodesi, teknik komputer, informatika, data science, dan bidang terkait sangat disarankan.",
  },
  {
    question: "Apakah ada biaya pendaftaran?",
    answer: "Tidak. Bhumireka 2026 dirancang sebagai acara 100% gratis.",
  },
  {
    question:
      "Bagaimana jika tim kami tidak memiliki perangkat receiver GNSS mahal?",
    answer:
      "Tidak menjadi masalah. Purwarupa ditekankan pada inovasi software dan pemanfaatan low-cost sensor yang dapat menjawab persoalan lokal.",
  },
  {
    question: "Apakah peserta wajib menggunakan data GNSS tertentu?",
    answer:
      "Tidak. Peserta dapat menggunakan sumber data yang relevan dengan solusi yang dibuat, termasuk data GNSS terbuka apabila dibutuhkan.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("hackathon");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollToRegistration = (tab: Tab) => {
    setActiveTab(tab);

    document
      .getElementById("registration")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F0F7FC] text-[#0f2740]">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="glass-nav flex items-center justify-between rounded-2xl border border-white/20 px-4 py-3 shadow-lg sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B77C4] text-white shadow-md">
                <Satellite size={21} />
              </div>

              <div>
                <div className="text-sm font-black tracking-[0.15em] text-[#0B77C4]">
                  BHUMIREKA
                </div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-slate-500">
                  INNOVATION CHALLENGE 2026
                </div>
              </div>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              <a href="#about" className="nav-link">
                Tentang
              </a>
              <a href="#competition" className="nav-link">
                Kompetisi
              </a>
              <a href="#timeline" className="nav-link">
                Linimasa
              </a>
              <a href="#faq" className="nav-link">
                FAQ
              </a>

              <button
                onClick={() => scrollToRegistration("hackathon")}
                className="rounded-xl bg-[#F5C211] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#E0AA00]"
              >
                Daftar Sekarang
              </button>
              <a
                href="/edit"
                className="rounded-xl bg-[#F5C211] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#E0AA00]"
              >
                Edit Pendaftaran
              </a>
            </div>

            <button
              onClick={() => setMobileMenu((prev: boolean) => !prev)}
              className="rounded-xl p-2 text-[#0B77C4] md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </nav>

          {mobileMenu && (
            <div className="mt-2 rounded-2xl border border-white/20 bg-white p-4 shadow-xl md:hidden">
              <div className="flex flex-col gap-2">
                {[
                  ["Tentang", "#about"],
                  ["Kompetisi", "#competition"],
                  ["Linimasa", "#timeline"],
                  ["FAQ", "#faq"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenu(false)}
                    className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    {label}
                  </a>
                ))}

                <button
                  onClick={() => {
                    setMobileMenu(false);
                    scrollToRegistration("hackathon");
                  }}
                  className="mt-2 rounded-xl bg-[#F5C211] px-4 py-3 font-bold text-white"
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-gradient-to-br from-[#001228] via-[#004B87] to-[#00336B] px-4 pt-24 pb-6 flex flex-col justify-between">
        <div className="absolute inset-0 -z-20 bg-[#0B77C4]" />

        <div className="absolute right-[-10%] top-[15%] -z-10 h-[500px] w-[500px] rounded-full bg-[#52B437]/20 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-10%] -z-10 h-[550px] w-[550px] rounded-full bg-[#F5C211]/20 blur-3xl" />

        <div className="mx-auto flex w-full max-w-7xl my-auto items-center px-4 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-white backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#52B437]" />
                INOVASI PRESISI UNTUK MITIGASI MANDIRI
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[84px]">
                BHUMIREKA
                <span className="block text-[#52B437]">2026</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                Perancangan Purwarupa Sederhana Teknologi GNSS untuk
                Menyelesaikan Masalah Bencana Alam &amp; Sosial.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollToRegistration("hackathon")}
                  className="group flex items-center justify-center gap-3 rounded-2xl bg-[#F5C211] px-6 py-4 font-black text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  Daftar RPD Challenge
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <button
                  onClick={() => scrollToRegistration("paper")}
                  className="group flex items-center justify-center gap-3 rounded-2xl bg-[#52B437] px-6 py-4 font-black text-[#2E6C1C] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  Ajukan Paper
                  <FileText size={18} />
                </button>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <div className="relative aspect-square overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
                <div className="absolute inset-0 tech-radar opacity-70" />

                <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#52B437]/50 bg-[#52B437]/10 shadow-[0_0_80px_rgba(50,205,50,0.25)]">
                  <div className="absolute inset-5 rounded-full border border-[#F5C211]/50">
                    <div className="absolute left-1/2 top-[-10px] h-5 w-5 -translate-x-1/2 rounded-full bg-[#F5C211] shadow-[0_0_25px_rgba(255,140,0,0.8)]" />
                  </div>
                </div>

                <div className="absolute left-[14%] top-[24%] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#52B437] backdrop-blur">
                  <Satellite />
                </div>

                <div className="absolute right-[14%] top-[20%] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#F5C211] backdrop-blur">
                  <Car />
                </div>

                <div className="absolute bottom-[20%] left-[14%] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur">
                  <MapPin />
                </div>

                <div className="absolute bottom-[16%] right-[13%] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#52B437] backdrop-blur">
                  <Zap />
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-[#072B54]/70 p-4 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-200">
                        GNSS Innovation
                      </div>
                      <div className="mt-1 font-black text-white">
                        Data → Insight → Action
                      </div>
                    </div>
                    <div className="h-3 w-3 animate-pulse rounded-full bg-[#52B437]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-2 pb-2">
          <a
            href="#why"
            className="text-white/60 transition hover:text-white"
          >
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </section>

      {/* WHY BHUMIREKA */}
      <section id="why" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="section-label">01 / WHY BHUMIREKA?</div>

            <h2 className="section-title mt-4">
              Data presisi
              <span className="text-[#0B77C4]"> untuk aksi nyata.</span>
            </h2>
          </div>

          <div className="rounded-[32px] bg-[#E8F3FA] p-7 sm:p-10">
            <p className="text-lg leading-8 text-slate-600">
              Tantangan keruangan hari ini membutuhkan solusi yang konkret.
              Menghadapi ancaman nyata baik bencana alam dan bencana sosial,
              maka pemanfaatan teknologi satelit navigasi (GNSS) menjadi kunci.
              <span className="font-bold text-[#0B77C4]">
                {" "}
                Bhumireka hadir untuk menantang Anda mengubah data presisi
                tinggi menjadi perangkat lunak dan purwarupa yang murah,
                aplikatif, untuk menyelamatkan nyawa.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#F0F7FC] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="section-label">02 / TENTANG ACARA</div>
            <h2 className="section-title mt-4">
              Bangun solusi yang
              <span className="text-[#0B77C4]"> berguna.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ajang kolaborasi dan kompetisi pembuatan perangkat lunak dan
              purwarupa berbasis GNSS untuk menghasilkan inovasi praktis yang
              memberikan dampak sosial nyata.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="feature-card md:col-span-2">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B77C4] text-white">
                <Satellite size={26} />
              </div>

              <h3 className="text-2xl font-black">Objektif</h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Mendorong integrasi data observasi satelit dan data geospasial
                menjadi solusi ketahanan nasional yang sederhana, terukur,
                murah, dan dapat diimplementasikan.
              </p>
            </div>

            <div className="feature-card">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C211] text-white">
                <Zap size={26} />
              </div>

              <h3 className="text-2xl font-black">Impact First</h3>
              <p className="mt-4 leading-7 text-slate-600">
                Fokus pada solusi yang menyelesaikan masalah nyata, bukan
                sekadar demonstrasi teknologi.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="pillar-card group border-[#0B77C4]/10">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B77C4] text-white">
                    <ShieldCheck />
                  </div>

                  <div className="text-sm font-black uppercase tracking-[0.18em] text-[#0B77C4]">
                    Pilar 01
                  </div>

                  <h3 className="mt-2 text-3xl font-black">Kebencanaan</h3>
                </div>

                <span className="text-5xl font-black text-slate-100">01</span>
              </div>

              <p className="mt-6 leading-7 text-slate-600">
                Pemantauan deformasi infrastruktur, sistem peringatan dini,
                mitigasi bencana, dan pemanfaatan data posisi untuk
                meningkatkan kesiapsiagaan.
              </p>
            </div>

            <div className="pillar-card group border-[#F5C211]/10">
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5C211] text-white">
                    <Car />
                  </div>

                  <div className="text-sm font-black uppercase tracking-[0.18em] text-[#F5C211]">
                    Pilar 02
                  </div>

                  <h3 className="mt-2 text-3xl font-black">Transportasi</h3>
                </div>

                <span className="text-5xl font-black text-slate-100">02</span>
              </div>

              <p className="mt-6 leading-7 text-slate-600">
                Navigasi cerdas, optimasi rute, pemantauan armada, dan
                penerapan positioning technology untuk sistem transportasi yang
                lebih efisien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITION */}
      <section id="competition" className="bg-gradient-to-br from-[#001228] via-[#004B87] to-[#00336B] px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="section-label section-label-light">
                03 / KATEGORI &amp; KETENTUAN
              </div>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                Pilih arena,
                <span className="text-[#52B437]"> buat dampak.</span>
              </h2>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-blue-100 backdrop-blur">
              2 Pilar • 2 Format • 1 Misi
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* HACKATHON */}
            <div className="competition-card border-[#F5C211]/40">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#F5C211]/10 px-4 py-2 text-xs font-black tracking-wider text-[#F3B200]">
                  MAIN EVENT
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">
                  HACKATHON
                </span>
              </div>

              <h3 className="mt-7 text-3xl font-black">RPD Challenge</h3>

              <div className="mt-7 space-y-6">
                <InfoItem
                  title="Peserta"
                  text="80 Mahasiswa (Diploma/S1) se-Indonesia, terbagi dalam 16 tim."
                />
                <InfoItem
                  title="Ketentuan"
                  text="Peserta menyiapkan kit purwarupa, skrip program, dan data secara mandiri sesuai KAK."
                />
                <InfoItem
                  title="Dukungan"
                  text="Panitia menyediakan akses data GNSS terbuka jika dibutuhkan."
                />
                <InfoItem
                  title="Output"
                  text="Live demo dan presentasi 5 menit pada Demo Day."
                />
                <InfoItem
                  title="Penghargaan"
                  text="Perwakilan Indonesia di ajang RPD Challenge 2027 di Singapura."
                />
              </div>

              <button
                onClick={() => scrollToRegistration("hackathon")}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F5C211] px-5 py-4 font-black text-white transition hover:bg-[#E0AA00]"
              >
                Daftar RPD Challenge
                <ArrowRight size={18} />
              </button>
            </div>

            {/* PAPER */}
            <div className="competition-card border-[#52B437]/40">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#52B437]/10 px-4 py-2 text-xs font-black tracking-wider text-green-700">
                  SIDE EVENT
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">
                  PAPER
                </span>
              </div>

              <h3 className="mt-7 text-3xl font-black">
                Paper Presentation
              </h3>

              <div className="mt-7 space-y-6">
                <InfoItem
                  title="Peserta"
                  text="Terbuka untuk 40 orang dari kalangan umum, peneliti, dan praktisi."
                />
                <InfoItem
                  title="Kegiatan"
                  text="Pameran poster inovasi dan pemaparan gagasan ilmiah di hadapan peserta."
                />
                <InfoItem
                  title="Fokus"
                  text="Karya ilmiah dan gagasan aplikatif berbasis data geospasial serta GNSS."
                />
                <InfoItem
                  title="Output"
                  text="Presentasi, poster, dan abstrak yang siap dikembangkan menjadi publikasi."
                />
                <InfoItem
                  title="Penghargaan"
                  text="Kesempatan publikasi di Jurnal Geomatika atau Jurnal Globe."
                />
              </div>

              <button
                onClick={() => scrollToRegistration("paper")}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#52B437] px-5 py-4 font-black text-[#2E6C1C] transition hover:bg-[#449C2B]"
              >
                Ajukan Paper
                <FileText size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STARTER KIT */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="starter-box relative overflow-hidden rounded-[36px] bg-[#E5F2F9] p-7 sm:p-10 lg:p-14">

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <div className="section-label text-green-700">
                  04 / STARTER KIT
                </div>

                <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                  Baru pertama kali mengolah data spasial?
                  <span className="text-green-700"> Jangan khawatir.</span>
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Kami menyediakan starter kit untuk membantu tim Anda memahami
                  data dan mulai coding tanpa harus memulai semuanya dari nol.
                </p>
              </div>

              <div className="grid gap-3">
                <ResourceItem
                  title="Contoh Data Raw GNSS / RINEX"
                  description="Contoh format data untuk eksplorasi awal."
                />
                <ResourceItem
                  title="Dokumen KAK Pra-Acara"
                  description="Kerangka acuan dan gambaran kompetisi."
                />
                <ResourceItem
                  title="Panduan API Geospasial"
                  description="Pengenalan layanan data geospasial terbuka."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="bg-[#F0F7FC] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="section-label">05 / LINIMASA</div>
            <h2 className="section-title mt-4">
              Dari ide hingga
              <span className="text-[#0B77C4]"> demo nyata.</span>
            </h2>
          </div>

          <div className="mt-14">
            {timeline.map((item, index) => (
              <div key={item.number} className="timeline-row">
                <div className="timeline-number">
                  {item.number}
                </div>

                <div className="timeline-line">
                  {index < timeline.length - 1 && <div />}
                </div>

                <div className="timeline-content">
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-[#F5C211]">
                    {item.date}
                  </div>

                  <h3 className="mt-2 text-2xl font-black">{item.title}</h3>

                  <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section
        id="registration"
        className="bg-white px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="section-label justify-center">06 / REGISTRASI</div>

            <h2 className="section-title mx-auto mt-4">
              Siap ikut <span className="text-[#0B77C4]">Bhumireka?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-600">
              Pilih jenis pendaftaran yang sesuai lalu lengkapi informasi
              peserta.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(0,75,135,0.08)]">
            {/* TABS */}
            <div className="grid grid-cols-2 border-b border-slate-200">
              <button
                onClick={() => setActiveTab("hackathon")}
                className={`relative px-5 py-5 text-sm font-black transition sm:text-base ${activeTab === "hackathon"
                  ? "text-[#0B77C4]"
                  : "text-slate-400 hover:text-slate-700"
                  }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Users size={18} />
                  Pendaftaran Tim Hackathon
                </div>

                {activeTab === "hackathon" && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#F5C211]" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("paper")}
                className={`relative px-5 py-5 text-sm font-black transition sm:text-base ${activeTab === "paper"
                  ? "text-[#0B77C4]"
                  : "text-slate-400 hover:text-slate-700"
                  }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <FileText size={18} />
                  Pendaftaran Paper Individu
                </div>

                {activeTab === "paper" && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-[#52B437]" />
                )}
              </button>
            </div>

            {/* FORM */}
            <div className="p-6 sm:p-10">
              {activeTab === "hackathon" ? (
                <HackathonForm />
              ) : (
                <PaperForm />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gradient-to-br from-[#001228] via-[#004B87] to-[#00336B] px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="section-label section-label-light justify-center">
              07 / FAQ
            </div>

            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              Pertanyaan yang
              <span className="text-[#52B437]"> sering muncul.</span>
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >
                    <span className="font-bold text-white">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#52B437] transition ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-blue-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="section-label justify-center">
              08 / PARTNER ECOSYSTEM
            </div>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Mitra &amp; Kolaborator
            </h2>

            <p className="mt-3 text-slate-500">
              Area ini disiapkan untuk logo mitra, sponsor, dan kolaborator.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="flex h-28 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-400"
              >
                Logo Mitra
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#F5C211] px-6 py-12 sm:px-10 lg:px-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.2em] text-white/70">
                Ready to build?
              </div>

              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                Ubah data presisi menjadi solusi yang berdampak.
              </h2>
            </div>

            <button
              onClick={() => scrollToRegistration("hackathon")}
              className="flex shrink-0 items-center gap-2 rounded-2xl bg-white px-6 py-4 font-black text-[#0B77C4] shadow-lg transition hover:-translate-y-1"
            >
              Mulai Registrasi
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-[#001228] via-[#004B87] to-[#00336B] px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B77C4] text-white shadow-md">
                  <Satellite size={22} />
                </div>

                <div>
                  <div className="font-black text-white tracking-[0.18em]">
                    BHUMIREKA 2026
                  </div>
                  <div className="text-xs text-blue-200">
                    GNSS Innovation Challenge
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-lg leading-7 text-blue-200">
                Platform kompetisi inovasi teknologi GNSS untuk mendorong
                solusi nyata pada bidang kebencanaan, transportasi, dan
                ketahanan nasional.
              </p>
            </div>

            <div>
              <h3 className="font-black text-white">Kontak</h3>

              <div className="mt-5 space-y-4 text-sm text-blue-200">
                <a
                  href="#"
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Mail size={17} />
                  email@bhumireka.id
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 hover:text-white"
                >
                  <span className="font-bold">WA</span>
                  +62 xxx-xxxx-xxxx
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-black text-white">Social</h3>

              <div className="mt-5 flex gap-3">
                <SocialButton icon={<Globe size={18} />} />
                <SocialButton icon={<MessageCircle size={18} />} />
                <SocialButton icon={<Mail size={18} />} />
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-blue-300">
            © 2026 Bhumireka. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* COMPONENTS                                                                 */
/* -------------------------------------------------------------------------- */

function InfoItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#52B437]" />

      <div>
        <div className="font-black">{title}</div>
        <p className="mt-1 leading-7 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function ResourceItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <a
      href="#"
      className="group flex items-center justify-between rounded-2xl border border-green-900/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B77C4] text-white">
          <Download size={18} />
        </div>

        <div>
          <div className="font-black">{title}</div>
          <div className="mt-1 text-sm text-slate-500">{description}</div>
        </div>
      </div>

      <ExternalLink
        size={17}
        className="text-slate-400 transition group-hover:text-[#0B77C4]"
      />
    </a>
  );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-blue-100 transition hover:bg-[#52B437] hover:text-[#2E6C1C]"
    >
      {icon}
    </a>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-slate-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="form-input"
      />
    </div>
  );
}

function HackathonForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [regId, setRegId] = useState("");
  const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload: Record<string, string> = { action: "register_hackathon" };
    fd.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      });
      const json = await res.json();
      if (json.success === true) {
        setRegId(json.registrationId || "");
        setStatus("success");
        form.reset();
      } else {
        throw new Error(json.message || "Gagal mengirim data.");
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Terjadi kesalahan. Coba lagi.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#52B437]/10 text-[#52B437]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-8 w-8"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        </div>
        <h3 className="text-2xl font-black text-[#0f2740]">Pendaftaran Tim Berhasil!</h3>
        <p className="max-w-md text-slate-500">Terima kasih. Data tim kamu sudah kami terima dan tersimpan di sistem.</p>

        {regId && (
          <div className="my-2 w-full max-w-sm rounded-2xl border border-[#0B77C4]/20 bg-[#E8F3FA] p-5 shadow-sm">
            <div className="text-xs font-black uppercase tracking-wider text-[#0B77C4]">
              ID Pendaftaran Kamu
            </div>
            <div className="mt-2 font-mono text-2xl font-black tracking-widest text-[#0f2740]">
              {regId}
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Simpan ID ini. Digunakan bersama email ketua apabila ingin mengubah data pendaftaran di kemudian hari.
            </p>
          </div>
        )}

        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a
            href="/edit"
            className="rounded-xl bg-[#0B77C4] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#004B87]"
          >
            Edit Data Pendaftaran
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div>
        <div className="mb-6">
          <h3 className="text-2xl font-black">Form Tim Hackathon</h3>
          <p className="mt-2 text-sm text-slate-500">
            Isi informasi ketua, tim, dan proposal.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Nama Tim"
            name="namaTim"
            placeholder="Contoh: GeoRescue"
          />

          <div>
            <label
              htmlFor="pilar_fokus"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Pilar Masalah
            </label>

            <select
              id="pilar"
              name="pilar"
              required
              className="form-input appearance-none"
            >
              <option value="">Pilih pilar</option>
              <option value="Kebencanaan">Kebencanaan</option>
              <option value="Transportasi">Transportasi</option>
            </select>
          </div>

          <Field
            label="Nama Ketua"
            name="namaKetua"
            placeholder="Nama lengkap"
          />

          <Field
            label="Email Ketua"
            name="emailKetua"
            type="email"
            placeholder="email@contoh.com"
          />

          <Field
            label="WA Ketua"
            name="waKetua"
            type="tel"
            placeholder="08xxxxxxxxxx"
          />

          <Field
            label="Afiliasi"
            name="afiliasi"
            placeholder=" Institusi / Universitas / Swasta"
          />
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-lg font-black">Anggota Tim</h4>

        <div className="grid gap-5 md:grid-cols-2">
          {[2, 3, 4, 5].map((number) => (
            <Field
              key={number}
              label={`Nama Anggota ${number}`}
              name={`anggota${number}`}
              placeholder={`Nama anggota ${number}`}
              required={false}
            />
          ))}
        </div>
      </div>

      <div>
        <Field
          label="Tautan Proposal"
          name="proposal"
          type="url"
          placeholder="https://..."
        />
      </div>

      {status === "error" && (
        <div className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
          ⚠️ {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F5C211] px-5 py-4 font-black text-white transition hover:bg-[#E0AA00] disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
            Mengirim...
          </>
        ) : (
          <>
            Kirim Pendaftaran
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}

function PaperForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload: Record<string, string> = { action: "register_paper" };
    fd.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      });
      const json = await res.json();
      if (json.success === true) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(json.message || "Gagal mengirim data.");
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Terjadi kesalahan. Coba lagi.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#52B437]/10 text-[#52B437]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-8 w-8"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
        </div>
        <h3 className="text-2xl font-black text-[#0f2740]">Paper Terkirim!</h3>
        <p className="max-w-md text-slate-500">Terima kasih. Pengajuan paper kamu sudah kami terima dan akan segera kami tinjau.</p>
        <button onClick={() => setStatus("idle")} className="mt-2 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50">Ajukan Paper Lain</button>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div>
        <div className="mb-6">
          <h3 className="text-2xl font-black">Form Paper Individu</h3>
          <p className="mt-2 text-sm text-slate-500">
            Isi data penulis dan karya ilmiah yang diajukan.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field
            label="Nama Lengkap"
            name="namaLengkap"
            placeholder="Nama lengkap"
          />

          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="email@contoh.com"
          />

          <Field
            label="Kontak WA"
            name="kontakWa"
            type="tel"
            placeholder="08xxxxxxxxxx"
          />

          <Field
            label="Institusi"
            name="afiliasi"
            placeholder="Universitas / Institusi"
          />

          <div className="md:col-span-2">
            <Field
              label="Judul Paper"
              name="judulPaper"
              placeholder="Masukkan judul paper"
            />
          </div>

          <div className="md:col-span-2">
            <Field
              label="Tautan Abstrak"
              name="tautanAbstrak"
              type="url"
              placeholder="https://..."
            />
          </div>
        </div>
      </div>

      {status === "error" && (
        <div className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
          ⚠️ {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#52B437] px-5 py-4 font-black text-[#2E6C1C] transition hover:bg-[#449C2B] disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
            Mengirim...
          </>
        ) : (
          <>
            Ajukan Paper
            <FileText size={18} />
          </>
        )}
      </button>
    </form>
  );
}