import { useEffect, useState } from "react";
import { Link } from "react-router"; // Sesuaikan jika kamu pakai react-router-dom
import api from "../../../API/AxiosInstance";

interface Event {
  id: number;
  name: string;
  categoryId: number;
  location: string;
  dateEvent: string;
  description: string;
}

export default function EventIndex() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // --- STATE UNTUK INLINE EDITING ---
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Event>>({});

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    api.get("/events")
      .then((res) => {
        setEvents(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Gagal memuat data event.");
        setLoading(false);
      });
  };

  // --- FUNGSI HAPUS ---
  const handleDelete = async (id: number) => {
    if (window.confirm("Hapus event ini?")) {
      try {
        await api.delete(`/events/${id}`);
        setEvents(events.filter((e) => e.id !== id));
      } catch (err) {
        alert("Gagal menghapus.");
      }
    }
  };

  // --- FUNGSI MULAI EDIT (Masuk ke mode baris input) ---
  const startEdit = (event: Event) => {
    setEditingId(event.id);
    setEditForm({
      name: event.name,
      location: event.location,
      dateEvent: event.dateEvent.split("T")[0], // Ambil bagian tanggal saja YYYY-MM-DD
      description: event.description,
      categoryId: event.categoryId
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  // --- FUNGSI SIMPAN PERUBAHAN ---
  const handleUpdate = async (id: number) => {
    try {
      await api.put(`/events/${id}`, {
        ...editForm,
        categoryId: Number(editForm.categoryId) // Pastikan angka
      });

      // Update data di layar
      setEvents(events.map((e) => (e.id === id ? { ...e, ...editForm } as Event : e)));
      setEditingId(null);
      alert("Berhasil diperbarui!");
    } catch (err) {
      alert("Gagal memperbarui data.");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="p-8 max-w-full mx-auto w-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-serif">Event Management</h1>
        </div>
        <Link to="/dashboard/event/create" className="px-4 py-2 bg-green-700 text-white rounded-lg font-bold">+ Tambah Event</Link>
      </div>

      {loading && <p className="text-center animate-pulse py-10">Memuat data...</p>}
      {error && <p className="text-center text-red-500 py-10">{error}</p>}
      {!loading && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-1000px">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-4 py-4 text-xs font-bold text-gray-600 uppercase text-center w-12">No</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-600 uppercase w-1/4">Nama Event</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-600 uppercase w-1/5">Lokasi</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-600 uppercase w-1/6">Tanggal</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-600 uppercase">Deskripsi</th>
                <th className="px-4 py-4 text-xs font-bold text-gray-600 uppercase text-center w-32">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {events.map((event, index) => (
                <tr key={event.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-4 text-sm text-center text-gray-500">{index + 1}</td>

                  {/* KOLOM NAMA */}
                  <td className="px-4 py-4 text-sm">
                    {editingId === event.id ? (
                      <input type="text" className="w-full border p-1 rounded" value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                    ) : (
                      <span className="font-bold text-gray-800">{event.name}</span>
                    )}
                  </td>

                  {/* KOLOM LOKASI */}
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {editingId === event.id ? (
                      <input type="text" className="w-full border p-1 rounded" value={editForm.location}
                        onChange={(e) => setEditForm({ ...editForm, location: e.target.value })} />
                    ) : (
                      event.location
                    )}
                  </td>

                  {/* KOLOM TANGGAL */}
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {editingId === event.id ? (
                      <input type="date" className="w-full border p-1 rounded text-xs" value={editForm.dateEvent}
                        onChange={(e) => setEditForm({ ...editForm, dateEvent: e.target.value })} />
                    ) : (
                      formatDate(event.dateEvent)
                    )}
                  </td>

                  {/* KOLOM DESKRIPSI */}
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {editingId === event.id ? (
                      <input type="text" className="w-full border p-1 rounded text-xs" value={editForm.description}
                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })} />
                    ) : (
                      <p className="truncate w-48">{event.description}</p>
                    )}
                  </td>

                  {/* AKSI */}
                  <td className="px-4 py-4 text-sm text-center">
                    <div className="flex justify-center gap-2">
                      {editingId === event.id ? (
                        <>
                          <button onClick={() => handleUpdate(event.id)} className="text-green-600 font-bold hover:underline">Simpan</button>
                          <button onClick={cancelEdit} className="text-gray-400 hover:underline">Batal</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => startEdit(event)} className="text-blue-600 hover:underline">Edit</button>
                          <button onClick={() => handleDelete(event.id)} className="text-red-600 hover:underline">Hapus</button>
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
  );
}