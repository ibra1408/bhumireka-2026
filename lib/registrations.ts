import { db } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const REGISTRATIONS_COLLECTION = "registrations";

// Helper untuk generate ID berurutan BR26-HK-0001 / BR26-PP-0001
async function generateRegistrationId(prefix: "BR26-HK-" | "BR26-PP-"): Promise<string> {
  const q = query(
    collection(db, REGISTRATIONS_COLLECTION),
    where("type", "==", prefix === "BR26-HK-" ? "hackathon" : "paper")
  );
  const snapshot = await getDocs(q);
  const nextNum = snapshot.size + 1;
  const formattedNum = String(nextNum).padStart(4, "0");
  return `${prefix}${formattedNum}`;
}

export interface HackathonData {
  namaTim: string;
  pilar: string;
  namaKetua: string;
  emailKetua: string;
  waKetua: string;
  afiliasi: string;
  anggota2?: string;
  anggota3?: string;
  anggota4?: string;
  anggota5?: string;
  proposal: string;
}

export interface PaperData {
  namaLengkap: string;
  email: string;
  kontakWa: string;
  afiliasi: string;
  judulPaper: string;
  tautanAbstrak: string;
}

// 1. Registrasi Hackathon
export async function registerHackathon(data: HackathonData) {
  const normalizedEmail = data.emailKetua.trim().toLowerCase();

  // Cek apakah email ketua sudah terdaftar
  const q = query(
    collection(db, REGISTRATIONS_COLLECTION),
    where("emailKetua", "==", normalizedEmail)
  );
  const existing = await getDocs(q);
  if (!existing.empty) {
    throw new Error("Email ketua sudah digunakan untuk pendaftaran tim.");
  }

  const registrationId = await generateRegistrationId("BR26-HK-");

  const docRef = doc(db, REGISTRATIONS_COLLECTION, registrationId);
  await setDoc(docRef, {
    type: "hackathon",
    registrationId,
    namaTim: data.namaTim.trim(),
    pilar: data.pilar.trim(),
    namaKetua: data.namaKetua.trim(),
    emailKetua: normalizedEmail,
    waKetua: data.waKetua.trim(),
    afiliasi: data.afiliasi.trim(),
    anggota2: data.anggota2?.trim() || "",
    anggota3: data.anggota3?.trim() || "",
    anggota4: data.anggota4?.trim() || "",
    anggota5: data.anggota5?.trim() || "",
    proposal: data.proposal.trim(),
    createdAt: serverTimestamp(),
  });

  return {
    success: true,
    message: "Pendaftaran Hackathon berhasil.",
    registrationId,
  };
}

// 2. Registrasi Paper
export async function registerPaper(data: PaperData) {
  const normalizedEmail = data.email.trim().toLowerCase();

  // Cek apakah email sudah terdaftar
  const q = query(
    collection(db, REGISTRATIONS_COLLECTION),
    where("email", "==", normalizedEmail)
  );
  const existing = await getDocs(q);
  if (!existing.empty) {
    throw new Error("Email sudah digunakan untuk pendaftaran paper.");
  }

  const registrationId = await generateRegistrationId("BR26-PP-");

  const docRef = doc(db, REGISTRATIONS_COLLECTION, registrationId);
  await setDoc(docRef, {
    type: "paper",
    registrationId,
    namaLengkap: data.namaLengkap.trim(),
    email: normalizedEmail,
    kontakWa: data.kontakWa.trim(),
    afiliasi: data.afiliasi.trim(),
    judulPaper: data.judulPaper.trim(),
    tautanAbstrak: data.tautanAbstrak.trim(),
    createdAt: serverTimestamp(),
  });

  return {
    success: true,
    message: "Pengajuan paper berhasil.",
    registrationId,
  };
}

export interface RegistrationDocData {
  type: "hackathon" | "paper";
  registrationId: string;
  namaTim?: string;
  pilar?: string;
  namaKetua?: string;
  emailKetua?: string;
  waKetua?: string;
  afiliasi?: string;
  anggota2?: string;
  anggota3?: string;
  anggota4?: string;
  anggota5?: string;
  proposal?: string;
  namaLengkap?: string;
  email?: string;
  kontakWa?: string;
  judulPaper?: string;
  tautanAbstrak?: string;
  anggota?: string[];
}

// 3. Cari Pendaftaran (Find)
export async function findRegistration(registrationId: string, email: string) {
  const idUpper = registrationId.trim().toUpperCase();
  const normalizedEmail = email.trim().toLowerCase();

  const docRef = doc(db, REGISTRATIONS_COLLECTION, idUpper);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Data pendaftaran tidak ditemukan.");
  }

  const data = docSnap.data();
  const storedEmail = (data.emailKetua || data.email || "").toLowerCase();

  if (storedEmail !== normalizedEmail) {
    throw new Error("ID pendaftaran dan email tidak cocok.");
  }

  // Format anggota menjadi array jika hackathon
  const anggota = [
    data.anggota2,
    data.anggota3,
    data.anggota4,
    data.anggota5,
  ].filter(Boolean);

  const resultData: RegistrationDocData = {
    ...(data as RegistrationDocData),
    anggota,
  };

  return {
    success: true,
    data: resultData,
  };
}

// 4. Update Pendaftaran
export async function updateRegistration(
  registrationId: string,
  email: string,
  updatedData: Partial<HackathonData>
) {
  const idUpper = registrationId.trim().toUpperCase();
  const normalizedEmail = email.trim().toLowerCase();

  const docRef = doc(db, REGISTRATIONS_COLLECTION, idUpper);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Data pendaftaran tidak ditemukan.");
  }

  const currentData = docSnap.data();
  const storedEmail = (currentData.emailKetua || currentData.email || "").toLowerCase();

  if (storedEmail !== normalizedEmail) {
    throw new Error("Email tidak cocok dengan data pendaftaran.");
  }

  await updateDoc(docRef, {
    namaTim: updatedData.namaTim?.trim(),
    pilar: updatedData.pilar?.trim(),
    namaKetua: updatedData.namaKetua?.trim(),
    emailKetua: updatedData.emailKetua?.trim().toLowerCase(),
    waKetua: updatedData.waKetua?.trim(),
    afiliasi: updatedData.afiliasi?.trim(),
    anggota2: updatedData.anggota2?.trim() || "",
    anggota3: updatedData.anggota3?.trim() || "",
    anggota4: updatedData.anggota4?.trim() || "",
    anggota5: updatedData.anggota5?.trim() || "",
    proposal: updatedData.proposal?.trim(),
    updatedAt: serverTimestamp(),
  });

  return {
    success: true,
    message: "Data pendaftaran berhasil diperbarui.",
  };
}
