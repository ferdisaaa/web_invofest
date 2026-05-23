import { useState } from "react";
import { useNavigate, Link } from "react-router";
import api from "../../../API/AxiosInstance";

export default function PembicaraCreate() {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Validasi sederhana
        if (!name.trim() || !role.trim() || !image.trim()) {
            setError("Semua kolom wajib diisi!");
            setIsLoading(false);
            return;
        }

        try {
            // data ke backend
            await api.post("/pembicara", {
                name,
                role,
                image
            });

            // Jika berhasil, balik ke halaman tabel pembicara
            navigate("/dashboard/pembicara");
        } catch (err: any) {
            console.error("Gagal menyimpan pembicara:", err);
            setError(err.response?.data?.message || "Gagal menyimpan data ke server.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-3xl mx-auto w-full">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Tambah Pembicara Baru</h1>
                <p className="text-gray-500 mt-1 text-sm">Masukkan detail pembicara beserta URL foto profilnya.</p>
            </div>

            {error && (
                <div className="p-4 mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg">
                    {error}
                </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <form onSubmit={handleSubmit} className="p-6 space-y-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/*Nama*/}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Nama Pembicara <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Contoh: Budi Santoso"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/*Role*/}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Peran / Posisi <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                                placeholder="Contoh: Software Engineer"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/*Foto URl*/}
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="flex-1 w-full">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                URL Foto Profil <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="url"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                required
                                placeholder="https://contoh.com/foto.jpg"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/*preview*/}
                        <div className="shrink-0 flex flex-col items-center justify-center p-3 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 w-32 h-32">
                            {image ? (
                                <img
                                    src={image}
                                    alt="Preview"
                                    className="w-full h-full object-cover rounded-md"
                                    onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150?text=Invalid+URL' }}
                                />
                            ) : (
                                <span className="text-xs text-gray-400 text-center">Foto</span>
                            )}
                        </div>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors disabled:opacity-70"
                        >
                            {isLoading ? "Menyimpan..." : "Simpan Pembicara"}
                        </button>

                        <Link
                            to="/dashboard/pembicara"
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