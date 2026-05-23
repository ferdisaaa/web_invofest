import { useState } from "react";
import { useNavigate, Link } from "react-router"; // Sesuaikan jika pakai react-router-dom
import api from "../../../API/AxiosInstance";

export default function EventCreate() {
  // State untuk  kolom yang dibutuhkan backend
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validasi sederhana
    if (!name || !categoryId || !location || !date || !time || !description) {
      setError("Semua kolom wajib diisi!");
      setIsLoading(false);
      return;
    }

    try {
      // Menggabungkan input Tanggal dan Jam menjadi satu format
      const combinedDateTime = new Date(`${date}T${time}:00`).toISOString();

      //data ke backend
      await api.post("/events", {
        name: name,
        categoryId: Number(categoryId),
        location: location,
        dateEvent: combinedDateTime,
        description: description,
      });

      // Jika berhasil, balik ke halaman tabel event
      navigate("/dashboard/event");
    } catch (err: any) {
      console.error("Gagal menyimpan event:", err);
      setError(err.response?.data?.message || "Gagal menyimpan data ke server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Tambah Event Baru</h1>
        <p className="text-gray-500 mt-1 text-sm">Lengkapi detail form di bawah untuk membuat event Invofest.</p>
      </div>

      {error && (
        <div className="p-4 mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg">
          {error}
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {/* Baris 1: Nama Event & Kategori */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Event <span className="text-red-500">*</span></label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Contoh: Seminar AI"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">ID Kategori <span className="text-red-500">*</span></label>
              <input type="number" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required placeholder="Contoh: 1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>

          {/*Tanggal & Jam*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tanggal Event <span className="text-red-500">*</span></label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Jam Event <span className="text-red-500">*</span></label>
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>

          {/*Lokasi*/}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Lokasi <span className="text-red-500">*</span></label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required placeholder="Contoh: Auditorium Kampus"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/*Deskripsi*/}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Deskripsi <span className="text-red-500">*</span></label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Penjelasan singkat event..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
          </div>


          <div className="flex items-center gap-3 pt-4">
            <button
              type="submit" disabled={isLoading}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors disabled:opacity-70"
            >
              {isLoading ? "Menyimpan..." : "Simpan Event"}
            </button>

            <Link
              to="/dashboard/event"
              className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg shadow-sm transition-colors"
            >
              Batal
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}