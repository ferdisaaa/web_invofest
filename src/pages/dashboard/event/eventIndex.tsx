
import { Link } from "react-router-dom";

export default function EventIndex() {
  return (
    <div>
      <h1 >Event Index</h1>
      <p>Selamat datang di halaman event</p> <br />
      <Link to="/dashboard/event/create" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Create Event
      </Link>
    </div>
  );
}