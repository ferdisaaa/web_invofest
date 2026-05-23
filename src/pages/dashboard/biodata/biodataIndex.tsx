import { useState } from "react";

export default function BiodataIndex() {
    // State untuk mode edit
    const [isEditing, setIsEditing] = useState(false);
    const [formData] = useState({
        namaLengkap: "Ferdi Saputra",
        email: "sptraferdi413@gmail.com",
        role: "Admin",
        universitas: "Universitas Harkat Negeri",
        programStudi: "Sarjana Terapan Teknik Informatika",
        nim: "24009075",
    });




    return (
        <div className="p-8 max-w-4xl mx-auto w-full">
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold font-serif text-gray-900 tracking-tight">Biodata Profil</h1>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                {/* Header Profil*/}
                <div className="h-32 bg-linear-to-r from-gray-300 to-gray-500"></div>

                <div className="px-8 pb-8">
                    <div className="relative flex justify-between items-end -mt-12 mb-8">
                        <div className="w-24 h-24 bg-white p-1 rounded-full shadow-md">
                            <img
                                src=""
                                alt="ini foto Profile"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Form Biodata */}
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Kolom Kiri */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap</label>
                                    <input
                                        type="text" name="namaLengkap"
                                        value="Ferdi Saputra"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 disabled:opacity-70 disabled:cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nomor Induk Mahasiswa (NIM)</label>
                                    <input
                                        type="text" name="nim"
                                        value="24090075"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 disabled:opacity-70 disabled:cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Alamat Email</label>
                                    <input
                                        type="email" name="email"
                                        value="sptraferdi413@gmail.com"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 disabled:opacity-70 disabled:cursor-not-allowed"
                                    />
                                </div>
                            </div>

                            {/* Kolom Kanan */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Institusi / Universitas</label>
                                    <input
                                        type="text" name="universitas"
                                        value="Universitas harkat Negeri"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 disabled:opacity-70 disabled:cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Program Studi</label>
                                    <input
                                        type="text" name="programStudi"
                                        value="Teknik Informatika"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 disabled:opacity-70 disabled:cursor-not-allowed"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1">Peran Sistem</label>
                                    <input
                                        type="text" name="role"
                                        value={formData.role} disabled
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-600 cursor-not-allowed"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Tombol Simpan */}
                        {isEditing && (
                            <div className="flex gap-3 pt-6 border-t border-gray-100">
                                <button type="submit" className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-sm transition">
                                    Simpan Perubahan
                                </button>
                                <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg shadow-sm transition">
                                    Batal
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}