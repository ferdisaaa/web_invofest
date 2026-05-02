export function CategoryCreate() {
  return (
    <div className="p-6">
      <h1 className="font-bold font-2xl pb-10 font-serif">Add new Category</h1>
      <p className="pb-2">Nama</p>
      <input type="text" className="border border-gray-300 rounded-md p-2" /> <br />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4">
        Simpan
      </button>
    </div>
  );
}