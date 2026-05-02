export default function EventCreate() {
  return (
    <div className="p-6">
      <h1 className="font-bold font-2xl pb-10 font-serif">Add new Event</h1>
      <label className="">Nama Event :</label><br />
      <input type="text" className="border border-gray-300 rounded-md p-2" /> <br />
      <label className="">Pembicara:</label><br />
      <input type="text" className="border border-gray-300 rounded-md p-2" /> <br />
        <label className="">Tanggal:</label><br />
        <input type="date" className="border border-gray-300 rounded-md p-2" /> <br />
        <label className="">jam:</label><br />
        <input type="time" className="border border-gray-300 rounded-md p-2" /> <br />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4">
        Simpan
      </button>
    </div>
  );
}