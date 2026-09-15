"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { findRegistration, updateRegistration } from "@/lib/registrations";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Edit3,
  Mail,
  Search,
  ShieldCheck,
  Satellite,
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
    afiliasi: "",
    anggota2: "",
    anggota3: "",
    anggota4: "",
    anggota5: "",
    proposal: "",
  });

  const [searchError, setSearchError] = useState("");
  const [saveError, setSaveError] = useState("");

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!registrationId || !email) return;

    setLoading(true);
    setSearchError("");

    try {
      const res = await findRegistration(registrationId, email);

      if (!res.success) {
        throw new Error("Data tidak ditemukan.");
      }

      const d = res.data;
      const anggotaArr: string[] = d.anggota || [];

      setForm({
        namaTim: d.namaTim || "",
        pilar: d.pilar || "",
        namaKetua: d.namaKetua || "",
        emailKetua: d.emailKetua || "",
        waKetua: d.waKetua || "",
        afiliasi: d.afiliasi || "",
        anggota2: anggotaArr[0] || "",
        anggota3: anggotaArr[1] || "",
        anggota4: anggotaArr[2] || "",
        anggota5: anggotaArr[3] || "",
        proposal: d.proposal || "",
      });

      setVerified(true);
    } catch (err: unknown) {
      setSearchError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSaved(false);
  };

  const handleSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSaveError("");
    setSaved(false);

    try {
      const res = await updateRegistration(registrationId, email, {
        namaTim: form.namaTim,
        pilar: form.pilar,
        namaKetua: form.namaKetua,
        emailKetua: form.emailKetua,
        waKetua: form.waKetua,
        afiliasi: form.afiliasi,
        anggota2: form.anggota2,
        anggota3: form.anggota3,
        anggota4: form.anggota4,
        anggota5: form.anggota5,
        proposal: form.proposal,
      });

      if (!res.success) {
        throw new Error("Gagal menyimpan perubahan.");
      }

      setSaved(true);
    } catch (err: unknown) {
      setSaveError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F0F7FC] text-[#0f2740]">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="glass-nav flex items-center justify-between rounded-2xl border border-white/20 px-4 py-3 shadow-lg sm:px-6">
            <Link href="/" className="flex items-center gap-3">
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
            </Link>

            <Link
              href="/"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-50 hover:text-[#0B77C4]"
            >
              <ArrowLeft size={17} />
              Kembali
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-[#001228] via-[#004B87] to-[#00336B] px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="absolute inset-0 tech-radar opacity-25" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur">
            <Edit3 size={30} />
          </div>

          <div className="section-label-light justify-center">
            <div className="text-xl font-black text-white">
              EDIT DATA PENDAFTARAN
            </div>
          </div>

          <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">
            Edit Pendaftaran Tim
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Gunakan ID pendaftaran dan email ketua untuk mengakses data.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {!verified ? (
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(0,75,135,0.08)]">
              <div className="border-b border-slate-200 p-6 md:p-8">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B77C4] text-white">
                    <Search size={20} />
                  </div>

                  <h2 className="text-xl font-black text-[#0B77C4]">
                    Cari Pendaftaran
                  </h2>
                </div>

                <p className="text-sm leading-6 text-slate-500">
                  Masukkan ID pendaftaran dan email ketua yang digunakan ketika
                  melakukan registrasi.
                </p>
              </div>

              <form onSubmit={handleSearch} className="space-y-5 p-6 md:p-8">
                <div>
                  <label className="form-label">
                    ID Pendaftaran <span className="text-red-500">*</span>
                  </label>

                  <input
                    value={registrationId}
                    onChange={(event) =>
                      setRegistrationId(event.target.value.toUpperCase())
                    }
                    placeholder="Contoh: BR26-HK-0042"
                    className="form-input uppercase"
                    required
                  />

                  <p className="mt-2 text-xs text-slate-400">
                    ID diberikan setelah pendaftaran berhasil.
                  </p>
                </div>

                <div>
                  <label className="form-label">
                    Email Ketua <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="email@contoh.com"
                      className="form-input pl-11"
                      required
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-[#0B77C4]/10 bg-[#E8F3FA] p-4">
                  <div className="flex gap-3">
                    <ShieldCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-[#0B77C4]"
                    />

                    <div>
                      <div className="text-sm font-black text-[#0B77C4]">
                        Verifikasi Data
                      </div>

                      <p className="mt-1 text-xs leading-6 text-slate-500">
                        ID pendaftaran dan email ketua digunakan untuk
                        memastikan hanya pemilik pendaftaran yang dapat mengubah
                        data tim.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F5C211] px-5 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#E0AA00] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
                      Mencari Data...
                    </>
                  ) : (
                    <>
                      <Search size={19} />
                      Cari Data Pendaftaran
                    </>
                  )}
                </button>

                {searchError && (
                  <div className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
                    ⚠️ {searchError}
                  </div>
                )}
              </form>

              <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-center text-xs text-slate-400">
                Belum mendaftar?{" "}
                <Link
                  href="/#registration"
                  className="font-bold text-[#0B77C4]"
                >
                  Daftar di sini
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-[32px] bg-gradient-to-br from-[#001228] via-[#004B87] to-[#00336B] p-6 text-white shadow-xl md:p-8">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-black text-[#52B437]">
                      <CheckCircle2 size={18} />
                      Pendaftaran Ditemukan
                    </div>

                    <h2 className="text-2xl font-black">{form.namaTim}</h2>

                    <p className="mt-1 text-sm text-blue-100">
                      Data tim dapat diperbarui melalui formulir di bawah.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
                    <div className="text-xs font-bold tracking-[0.18em] text-blue-200">
                      ID PENDAFTARAN
                    </div>

                    <div className="mt-1 font-mono text-lg font-bold tracking-wider text-white">
                      {registrationId}
                    </div>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSave}
                className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(0,75,135,0.08)]"
              >
                <div className="border-b border-slate-200 p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5C211] text-white">
                      <Users size={20} />
                    </div>

                    <div>
                      <h2 className="text-xl font-black text-[#0B77C4]">
                        Informasi Tim
                      </h2>

                      <p className="text-sm text-slate-400">
                        Data yang dapat diperbarui oleh peserta.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 p-6 md:p-8">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="form-label">Nama Tim</label>

                      <input
                        value={form.namaTim}
                        onChange={(event) =>
                          handleChange("namaTim", event.target.value)
                        }
                        className="form-input"
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label">Pilar Masalah</label>

                      <select
                        value={form.pilar}
                        onChange={(event) =>
                          handleChange("pilar", event.target.value)
                        }
                        className="form-input"
                        required
                      >
                        <option value="">Pilih Pilar</option>
                        <option value="Kebencanaan">Kebencanaan</option>
                        <option value="Transportasi">Transportasi</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-6">
                    <h3 className="mb-4 font-black text-[#0B77C4]">
                      Ketua Tim
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="form-label">Nama Ketua</label>

                        <input
                          value={form.namaKetua}
                          onChange={(event) =>
                            handleChange("namaKetua", event.target.value)
                          }
                          className="form-input"
                          required
                        />
                      </div>

                      <div>
                        <label className="form-label">Email Ketua</label>

                        <input
                          type="email"
                          value={form.emailKetua}
                          onChange={(event) =>
                            handleChange("emailKetua", event.target.value)
                          }
                          className="form-input"
                          required
                        />
                      </div>

                      <div>
                        <label className="form-label">WhatsApp Ketua</label>

                        <input
                          type="tel"
                          value={form.waKetua}
                          onChange={(event) =>
                            handleChange("waKetua", event.target.value)
                          }
                          className="form-input"
                          required
                        />
                      </div>

                      <div>
                        <label className="form-label">Institusi</label>

                        <input
                          value={form.afiliasi}
                          onChange={(event) =>
                            handleChange("afiliasi", event.target.value)
                          }
                          className="form-input"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-6">
                    <h3 className="mb-4 font-black text-[#0B77C4]">
                      Anggota Tim
                    </h3>

                    <div className="space-y-4">
                      {[
                        ["anggota2", "Anggota 2"],
                        ["anggota3", "Anggota 3"],
                        ["anggota4", "Anggota 4"],
                        ["anggota5", "Anggota 5"],
                      ].map(([field, label]) => (
                        <div key={field}>
                          <label className="form-label">{label}</label>

                          <input
                            value={form[field as keyof typeof form]}
                            onChange={(event) =>
                              handleChange(
                                field as keyof typeof form,
                                event.target.value,
                              )
                            }
                            className="form-input"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-6">
                    <label className="form-label">Tautan Proposal</label>

                    <input
                      type="url"
                      value={form.proposal}
                      onChange={(event) =>
                        handleChange("proposal", event.target.value)
                      }
                      placeholder="https://..."
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="rounded-2xl border border-[#F5C211]/30 bg-[#F5C211]/10 p-4">
                    <div className="flex gap-3">
                      <AlertTriangle
                        size={21}
                        className="mt-0.5 shrink-0 text-[#E0AA00]"
                      />

                      <div>
                        <div className="text-sm font-black text-[#9A7300]">
                          Periksa kembali data
                        </div>

                        <p className="mt-1 text-xs leading-6 text-slate-600">
                          Pastikan semua data anggota, pilar masalah, dan tautan
                          proposal sudah benar sebelum menyimpan perubahan.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#52B437] px-5 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#449C2B] disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
                        Menyimpan...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={20} />
                        Simpan Perubahan
                      </>
                    )}
                  </button>

                  {saveError && (
                    <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-600">
                      ⚠️ {saveError}
                    </div>
                  )}

                  {saved && (
                    <div className="flex items-center gap-3 rounded-2xl border border-[#52B437]/20 bg-[#52B437]/10 p-4 text-sm font-bold text-green-700">
                      <CheckCircle2 size={20} />
                      Perubahan berhasil disimpan.
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-center text-xs text-slate-400">
                  ID Pendaftaran dan timestamp tidak dapat diubah.
                </div>
              </form>

              <button
                onClick={() => {
                  setVerified(false);
                  setSaved(false);
                }}
                className="mx-auto flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-[#0B77C4] transition hover:bg-white"
              >
                <ArrowLeft size={16} />
                Kembali ke pencarian
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-gradient-to-br from-[#001228] via-[#004B87] to-[#00336B] px-4 py-10 text-center text-xs text-blue-200">
        &copy; 2026 Bhumireka. Hak Cipta Dilindungi.
      </footer>
    </main>
  );
}
