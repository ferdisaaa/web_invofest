import { useState } from "react";
import { useNavigate, Link } from "react-router";
import api from "../../../API/AxiosInstance"; // Sesuaikan jika letak foldernya berbeda

export default function CategoryCreate() {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // useNavigate digunakan untuk redirect halaman
  const navigate = useNavigate();

  // Fungsi ini dipanggil saat form di-submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi sederhana
    if (!name.trim()) {
      setError("Nama kategori wajib diisi!");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // endpoint POST ke backend
      await api.post("/categories", { name: name });

      // Jika sukses, arahkan kembali ke halaman index tabel kategori
      navigate("/dashboard/category");
    } catch (err: any) {
      console.error("Gagal menyimpan:", err);
      // Menangkap pesan error dari backend
      setError(
        err.response?.data?.message ||
        "Terjadi kesalahan saat menyimpan data. Cek koneksi server."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Tambah Kategori</h1>
        <p className="text-gray-500 mt-1 text-sm">Silakan masukkan nama kategori event yang baru.</p>
      </div>

      {/* Menampilkan pesan error jika validasi gagal atau server bermasalah */}
      {error && (
        <div className="p-4 mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg shadow-sm">
          {error}
        </div>
      )}

      {/* Form */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Nama Kategori <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Mengubah isi state saat diketik
              placeholder="Contoh: Teknologi, Olahraga, dll"
              disabled={isLoading}
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex items-center gap-3 mt-8">
            {/* Tombol Simpan */}
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex justify-center items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-wait"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Menyimpan...
                </>
              ) : (
                "Simpan Kategori"
              )}
            </button>

            {/* Tombol Batal */}
            <Link
              to="/dashboard/category"
              className="px-5 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 disabled:opacity-50"
            >
              Batal
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}