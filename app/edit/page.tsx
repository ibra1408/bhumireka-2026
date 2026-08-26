"use client";

import { FormEvent, useState } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    Edit3,
    Mail,
    Search,
    ShieldCheck,
    Users,
} from "lucide-react";

export default function EditRegistrationPage() {
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);

    const [registrationId, setRegistrationId] = useState("");
    const [email, setEmail] = useState("");

    const [form, setForm] = useState({
        namaTim: "",
        pilar: "",
        namaKetua: "",
        emailKetua: "",
        waKetua: "",
        institusi: "",
        anggota2: "",
        anggota3: "",
        anggota4: "",
        anggota5: "",
        proposal: "",
    });

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!registrationId || !email) {
            return;
        }

        setLoading(true);

        /*
          NANTI:
          Di sini kita akan melakukan request ke Google Apps Script.
    
          Contoh:
    
          fetch("YOUR_WEBHOOK_URL", {
            method: "POST",
            body: JSON.stringify({
              action: "find_registration",
              registrationId,
              email,
            }),
          });
        */

        setTimeout(() => {
            setForm({
                namaTim: "Geo Rescue Team",
                pilar: "Kebencanaan",
                namaKetua: "Nama Ketua",
                emailKetua: email,
                waKetua: "081234567890",
                institusi: "Universitas Contoh",
                anggota2: "Anggota Dua",
                anggota3: "Anggota Tiga",
                anggota4: "Anggota Empat",
                anggota5: "",
                proposal: "https://contoh.com/proposal",
            });

            setVerified(true);
            setLoading(false);
        }, 800);
    };

    const handleChange = (
        field: keyof typeof form,
        value: string
    ) => {
        setForm((previous) => ({
            ...previous,
            [field]: value,
        }));

        setSaved(false);
    };

    const handleSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        /*
          NANTI:
          Data dikirim ke Google Apps Script.
    
          Contoh payload:
    
          {
            action: "update_registration",
            registrationId,
            email,
            ...form
          }
        */

        setSaved(true);

        setTimeout(() => {
            setSaved(false);
        }, 4000);
    };

    return (
        <main className="min-h-screen bg-[#F4F7FB]">
            {/* NAVBAR */}

            <nav className="border-b border-white/10 bg-[#001228] px-4 py-4">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <a
                        href="/"
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF8C00]">
                            <span className="text-lg font-black text-white">
                                B
                            </span>
                        </div>

                        <div>
                            <div className="font-display font-bold text-white">
                                BHUMIREKA
                            </div>

                            <div className="text-xs tracking-widest text-blue-300">
                                2026
                            </div>
                        </div>
                    </a>

                    <a
                        href="/"
                        className="flex items-center gap-2 text-sm font-medium text-blue-200 transition hover:text-white"
                    >
                        <ArrowLeft size={17} />
                        Kembali
                    </a>
                </div>
            </nav>

            {/* HEADER */}

            <section className="bg-gradient-to-br from-[#001228] via-[#004B87] to-[#00336B] px-4 py-16">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                        <Edit3
                            size={30}
                            className="text-[#FF8C00]"
                        />
                    </div>

                    <h1 className="font-display text-3xl font-black text-white md:text-5xl">
                        Edit Pendaftaran Tim
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-blue-200">
                        Perbarui informasi tim hackathon tanpa perlu membuat akun.
                        Gunakan ID pendaftaran dan email ketua untuk mengakses data.
                    </p>
                </div>
            </section>

            {/* CONTENT */}

            <section className="px-4 py-12">
                <div className="mx-auto max-w-3xl">
                    {!verified ? (
                        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                            {/* TITLE */}

                            <div className="border-b border-gray-100 p-6 md:p-8">
                                <div className="mb-2 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#004B87]/10">
                                        <Search
                                            size={20}
                                            className="text-[#004B87]"
                                        />
                                    </div>

                                    <h2 className="font-display text-xl font-bold text-[#004B87]">
                                        Cari Pendaftaran
                                    </h2>
                                </div>

                                <p className="text-sm leading-relaxed text-gray-500">
                                    Masukkan ID pendaftaran dan email ketua yang digunakan
                                    ketika melakukan registrasi.
                                </p>
                            </div>

                            {/* VERIFICATION FORM */}

                            <form
                                onSubmit={handleSearch}
                                className="space-y-5 p-6 md:p-8"
                            >
                                <div>
                                    <label className="form-label">
                                        ID Pendaftaran
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>

                                    <input
                                        value={registrationId}
                                        onChange={(event) =>
                                            setRegistrationId(
                                                event.target.value.toUpperCase()
                                            )
                                        }
                                        placeholder="Contoh: BR26-HK-0042"
                                        className="form-input uppercase"
                                        required
                                    />

                                    <p className="mt-2 text-xs text-gray-400">
                                        ID diberikan setelah pendaftaran berhasil.
                                    </p>
                                </div>

                                <div>
                                    <label className="form-label">
                                        Email Ketua
                                        <span className="text-red-500">
                                            *
                                        </span>
                                    </label>

                                    <div className="relative">
                                        <Mail
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                        />

                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            placeholder="email.ketua@example.com"
                                            className="form-input pl-11"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-[#004B87]/10 bg-[#004B87]/5 p-4">
                                    <div className="flex gap-3">
                                        <ShieldCheck
                                            size={20}
                                            className="mt-0.5 shrink-0 text-[#004B87]"
                                        />

                                        <div>
                                            <div className="text-sm font-bold text-[#004B87]">
                                                Verifikasi Data
                                            </div>

                                            <p className="mt-1 text-xs leading-relaxed text-gray-500">
                                                ID pendaftaran dan email ketua digunakan untuk
                                                memastikan hanya pemilik pendaftaran yang dapat
                                                mengubah data tim.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#004B87] py-4 font-bold text-white transition hover:bg-[#003765] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    <Search size={19} />

                                    {loading
                                        ? "Mencari Data..."
                                        : "Cari Data Pendaftaran"}
                                </button>
                            </form>

                            <div className="border-t bg-gray-50 px-6 py-4 text-center text-xs text-gray-400">
                                Belum mendaftar?{" "}
                                <a
                                    href="/#registrasi"
                                    className="font-semibold text-[#004B87]"
                                >
                                    Daftar di sini
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* SUCCESS / ID */}

                            <div className="rounded-3xl bg-gradient-to-br from-[#004B87] to-[#002b55] p-6 text-white shadow-xl md:p-8">
                                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                                    <div>
                                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#32CD32]">
                                            <CheckCircle2 size={18} />
                                            Pendaftaran Ditemukan
                                        </div>

                                        <h2 className="font-display text-2xl font-black">
                                            {form.namaTim}
                                        </h2>

                                        <p className="mt-1 text-sm text-blue-200">
                                            Data tim dapat diperbarui melalui formulir di bawah.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4">
                                        <div className="text-xs text-blue-300">
                                            ID PENDAFTARAN
                                        </div>

                                        <div className="mt-1 font-mono text-lg font-bold tracking-wider text-white">
                                            {registrationId}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* EDIT FORM */}

                            <form
                                onSubmit={handleSave}
                                className="overflow-hidden rounded-3xl bg-white shadow-xl"
                            >
                                <div className="border-b border-gray-100 p-6 md:p-8">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF8C00]/10">
                                            <Users
                                                size={20}
                                                className="text-[#FF8C00]"
                                            />
                                        </div>

                                        <div>
                                            <h2 className="font-display text-xl font-bold text-[#004B87]">
                                                Informasi Tim
                                            </h2>

                                            <p className="text-sm text-gray-400">
                                                Data yang dapat diperbarui oleh peserta.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6 p-6 md:p-8">
                                    {/* NAMA + PILAR */}

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <div>
                                            <label className="form-label">
                                                Nama Tim
                                            </label>

                                            <input
                                                value={form.namaTim}
                                                onChange={(event) =>
                                                    handleChange(
                                                        "namaTim",
                                                        event.target.value
                                                    )
                                                }
                                                className="form-input"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="form-label">
                                                Pilar Masalah
                                            </label>

                                            <select
                                                value={form.pilar}
                                                onChange={(event) =>
                                                    handleChange(
                                                        "pilar",
                                                        event.target.value
                                                    )
                                                }
                                                className="form-input"
                                                required
                                            >
                                                <option value="">
                                                    Pilih Pilar
                                                </option>

                                                <option value="Kebencanaan">
                                                    Kebencanaan
                                                </option>

                                                <option value="Transportasi">
                                                    Transportasi
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* KETUA */}

                                    <div className="border-t pt-6">
                                        <h3 className="mb-4 font-bold text-[#004B87]">
                                            Ketua Tim
                                        </h3>

                                        <div className="grid gap-5 md:grid-cols-2">
                                            <div>
                                                <label className="form-label">
                                                    Nama Ketua
                                                </label>

                                                <input
                                                    value={form.namaKetua}
                                                    onChange={(event) =>
                                                        handleChange(
                                                            "namaKetua",
                                                            event.target.value
                                                        )
                                                    }
                                                    className="form-input"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="form-label">
                                                    Email Ketua
                                                </label>

                                                <input
                                                    type="email"
                                                    value={form.emailKetua}
                                                    onChange={(event) =>
                                                        handleChange(
                                                            "emailKetua",
                                                            event.target.value
                                                        )
                                                    }
                                                    className="form-input"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="form-label">
                                                    WhatsApp Ketua
                                                </label>

                                                <input
                                                    type="tel"
                                                    value={form.waKetua}
                                                    onChange={(event) =>
                                                        handleChange(
                                                            "waKetua",
                                                            event.target.value
                                                        )
                                                    }
                                                    className="form-input"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label className="form-label">
                                                    Institusi
                                                </label>

                                                <input
                                                    value={form.institusi}
                                                    onChange={(event) =>
                                                        handleChange(
                                                            "institusi",
                                                            event.target.value
                                                        )
                                                    }
                                                    className="form-input"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* ANGGOTA */}

                                    <div className="border-t pt-6">
                                        <h3 className="mb-4 font-bold text-[#004B87]">
                                            Anggota Tim
                                        </h3>

                                        <div className="space-y-4">
                                            {[
                                                ["anggota2", "Anggota 2"],
                                                ["anggota3", "Anggota 3"],
                                                ["anggota4", "Anggota 4"],
                                                ["anggota5", "Anggota 5 (Opsional)"],
                                            ].map(([field, label]) => (
                                                <div key={field}>
                                                    <label className="form-label">
                                                        {label}
                                                    </label>

                                                    <input
                                                        value={
                                                            form[
                                                            field as keyof typeof form
                                                            ]
                                                        }
                                                        onChange={(event) =>
                                                            handleChange(
                                                                field as keyof typeof form,
                                                                event.target.value
                                                            )
                                                        }
                                                        className="form-input"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* PROPOSAL */}

                                    <div className="border-t pt-6">
                                        <label className="form-label">
                                            Tautan Proposal
                                        </label>

                                        <input
                                            type="url"
                                            value={form.proposal}
                                            onChange={(event) =>
                                                handleChange(
                                                    "proposal",
                                                    event.target.value
                                                )
                                            }
                                            placeholder="https://..."
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    {/* WARNING */}

                                    <div className="rounded-2xl border border-[#FF8C00]/20 bg-[#FF8C00]/5 p-4">
                                        <div className="flex gap-3">
                                            <span className="text-xl">
                                                ⚠️
                                            </span>

                                            <div>
                                                <div className="text-sm font-bold text-[#C76700]">
                                                    Periksa kembali data
                                                </div>

                                                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                                                    Pastikan semua data anggota, pilar masalah, dan
                                                    tautan proposal sudah benar sebelum menyimpan
                                                    perubahan.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SAVE */}

                                    <button
                                        type="submit"
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#32CD32] to-[#1E9E1E] py-4 font-bold text-white shadow-lg transition hover:brightness-95"
                                    >
                                        <CheckCircle2 size={20} />

                                        Simpan Perubahan
                                    </button>

                                    {/* SUCCESS */}

                                    {saved && (
                                        <div className="flex items-center gap-3 rounded-xl border border-[#32CD32]/20 bg-[#32CD32]/10 p-4 text-sm font-semibold text-green-700">
                                            <CheckCircle2 size={20} />

                                            Perubahan berhasil disimpan.
                                        </div>
                                    )}
                                </div>

                                {/* FOOTER FORM */}

                                <div className="border-t bg-gray-50 px-6 py-4 text-center text-xs text-gray-400">
                                    ID Pendaftaran dan timestamp tidak dapat diubah.
                                </div>
                            </form>

                            {/* BACK */}

                            <button
                                onClick={() => {
                                    setVerified(false);
                                    setSaved(false);
                                }}
                                className="mx-auto flex items-center gap-2 text-sm font-semibold text-[#004B87]"
                            >
                                <ArrowLeft size={16} />
                                Kembali ke pencarian
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* FOOTER */}

            <footer className="bg-[#001228] px-4 py-8 text-center text-xs text-blue-300">
                © 2026 Bhumireka. Hak Cipta Dilindungi.
            </footer>
        </main>
    );
}