import { Link } from "react-router-dom";

export default function categoryIndex() {
  return (
    <div className="p-6">
      <h1 >Category</h1>
      <p>Selamat datang di halaman category</p>  <br />

    <Link to="/dashboard/category/create" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Tambah Category
    </Link>
    </div>
  );
}