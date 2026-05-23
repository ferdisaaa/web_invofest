import { useEffect, useState } from "react";
import { Link } from "react-router"; // Sesuaikan dengan router yang berhasil di App.tsx kamu
import api from "../../../API/AxiosInstance";

interface Category {
  id: number;
  name: string;
}

export default function CategoryIndex() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // State khusus untuk Edit
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState<string>("");

  useEffect(() => {
    api.get("/categories")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Gagal memuat data kategori.");
        setLoading(false);
      });
  }, []);

  //  FUNGSI HAPUS 
  const handleDelete = async (id: number) => {
    if (window.confirm("Yakin ingin menghapus kategori ini?")) {
      try {
        await api.delete(`/categories/${id}`);
        setCategories(categories.filter((cat) => cat.id !== id));
      } catch (err) {
        alert("Gagal menghapus data. Pastikan server backend berjalan.");
      }
    }
  };

  // FUNGSI MULAI EDIT
  const startEdit = (category: Category) => {
    setEditingId(category.id); // Tandai ID mana yang sedang diedit
    setEditName(category.name); // Isi input dengan nama lama
  };

  // FUNGSI BATAL EDIT 
  const cancelEdit = () => {
    setEditingId(null);
    setEditName("");
  };

  // FUNGSI SIMPAN EDIT (UPDATE)
  const handleUpdate = async (id: number) => {
    if (!editName.trim()) {
      alert("Nama kategori tidak boleh kosong!");
      return;
    }

    try {
      await api.put(`/categories/${id}`, { name: editName });

      // Update data di layar
      setCategories(
        categories.map((cat) =>
          cat.id === id ? { ...cat, name: editName } : cat
        )
      );

      // Tutup edit
      setEditingId(null);
    } catch (err) {
      alert("Gagal memperbarui kategori.");
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight font-serif">Kategori Event</h1>
        </div>

        <Link
          to="/dashboard/category/create"
          className="inline-flex items-center px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white text-sm font-medium rounded-lg shadow-sm transition-all"
        >
          + Tambah Category
        </Link>
      </div>

      {loading && <p className="text-center text-gray-500 animate-pulse py-12">Sedang memuat data...</p>}

      {error && (
        <div className="p-4 mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          {categories.length === 0 ? (
            <div className="p-12 text-center text-gray-500">Belum ada data kategori saat ini.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase w-16 text-center">No</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Nama Kategori</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase w-48 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {categories.map((category, index) => (
                    <tr key={category.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-500 text-center">{index + 1}</td>

                      <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                        {/* Jika sedang mode edit, tampilkan input box. Jika tidak, tampilkan teks biasa */}
                        {editingId === category.id ? (
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="w-full px-3 py-1.5 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoFocus
                          />
                        ) : (
                          category.name
                        )}
                      </td>

                      <td className="px-6 py-4 text-sm text-center">
                        <div className="flex justify-center space-x-3">
                          {/* Tombol berubah sesuai mode (Edit/Hapus atau Simpan/Batal) */}
                          {editingId === category.id ? (
                            <>
                              <button
                                onClick={() => handleUpdate(category.id)}
                                className="text-green-600 hover:text-green-800 font-bold"
                              >
                                Simpan
                              </button>
                              <button
                                onClick={cancelEdit}
                                className="text-gray-500 hover:text-gray-700 font-medium"
                              >
                                Batal
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => startEdit(category)}
                                className="text-blue-600 hover:text-blue-800 font-medium"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(category.id)}
                                className="text-red-600 hover:text-red-800 font-medium"
                              >
                                Hapus
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}