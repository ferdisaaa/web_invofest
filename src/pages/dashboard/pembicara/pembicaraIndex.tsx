import { useEffect, useState } from "react";
import { Link } from "react-router"; // Sesuaikan jika kamu pakai react-router-dom
import api from "../../../API/AxiosInstance";

interface Pembicara {
  id: number;
  name: string;
  role: string;
  image: string;
}

export default function PembicaraIndex() {
  const [pembicaras, setPembicaras] = useState<Pembicara[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // --- STATE UNTUK INLINE EDITING ---
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Pembicara>>({});

  useEffect(() => {
    fetchPembicaras();
  }, []);

  const fetchPembicaras = () => {
    api.get("/pembicara")
      .then((res) => {
        setPembicaras(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Gagal memuat data pembicara.");
        setLoading(false);
      });
  };

  // --- FUNGSI HAPUS ---
  const handleDelete = async (id: number) => {
    if (window.confirm("Hapus pembicara ini?")) {
      try {
        await api.delete(`/pembicara/${id}`);
        setPembicaras(pembicaras.filter((p) => p.id !== id));
      } catch (err) {
        alert("Gagal menghapus.");
      }
    }
  };

  // --- FUNGSI MULAI EDIT ---
  const startEdit = (pembicara: Pembicara) => {
    setEditingId(pembicara.id);
    setEditForm({
      name: pembicara.name,
      role: pembicara.role,
      image: pembicara.image,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  // --- FUNGSI SIMPAN PERUBAHAN ---
  const handleUpdate = async (id: number) => {
    try {
      await api.put(`/pembicara/${id}`, editForm);

      // Update data di layar
      setPembicaras(pembicaras.map((p) => (p.id === id ? { ...p, ...editForm } as Pembicara : p)));
      setEditingId(null);
      alert("Data berhasil diperbarui!");
    } catch (err) {
      alert("Gagal memperbarui data.");
    }
  };

  return (
    <div className="p-8 max-w-full mx-auto w-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-serif">Pembicara Event</h1>
        </div>
        <Link to="/dashboard/pembicara/create" className="px-4 py-2 bg-green-700 text-white rounded-lg font-bold">+ Tambah Pembicara</Link>
      </div>

      {loading && <p className="text-center animate-pulse py-10">Memuat data...</p>}

      {error && (
        <div className="p-4 mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-4 py-4 text-xs font-bold text-gray-600 uppercase text-center w-12">No</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-600 uppercase w-24 text-center">Foto</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-600 uppercase w-1/3">Nama Pembicara</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-600 uppercase w-1/4">Peran / Posisi</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-600 uppercase text-center w-32">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pembicaras.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-500">Belum ada data pembicara.</td>
                </tr>
              ) : (
                pembicaras.map((pembicara, index) => (
                  <tr key={pembicara.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-4 text-sm text-center text-gray-500">{index + 1}</td>

                    {/* KOLOM FOTO */}
                    <td className="px-4 py-4 text-sm flex justify-center">
                      {editingId === pembicara.id ? (
                        <input type="text" placeholder="URL Foto" className="w-full border p-1 rounded text-xs" value={editForm.image}
                          onChange={(e) => setEditForm({ ...editForm, image: e.target.value })} />
                      ) : (
                        <img
                          src={pembicara.image}
                          alt={pembicara.name}
                          className="h-12 w-12 rounded-full object-cover border border-gray-300"
                          onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150?text=No+Image' }} // Jika URL gambar mati/salah
                        />
                      )}
                    </td>

                    {/* KOLOM NAMA */}
                    <td className="px-4 py-4 text-sm">
                      {editingId === pembicara.id ? (
                        <input type="text" className="w-full border p-1 rounded" value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                      ) : (
                        <span className="font-bold text-gray-800">{pembicara.name}</span>
                      )}
                    </td>

                    {/* KOLOM ROLE */}
                    <td className="px-4 py-4 text-sm text-gray-600">
                      {editingId === pembicara.id ? (
                        <input type="text" className="w-full border p-1 rounded" value={editForm.role}
                          onChange={(e) => setEditForm({ ...editForm, role: e.target.value })} />
                      ) : (
                        pembicara.role
                      )}
                    </td>

                    {/* AKSI */}
                    <td className="px-4 py-4 text-sm text-center">
                      <div className="flex justify-center gap-2">
                        {editingId === pembicara.id ? (
                          <>
                            <button onClick={() => handleUpdate(pembicara.id)} className="text-green-600 font-bold hover:underline">Simpan</button>
                            <button onClick={cancelEdit} className="text-gray-400 hover:underline">Batal</button>
                          </>
                        ) : (
                          <>
                            <button onClick={() => startEdit(pembicara)} className="text-blue-600 hover:underline">Edit</button>
                            <button onClick={() => handleDelete(pembicara.id)} className="text-red-600 hover:underline">Hapus</button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}