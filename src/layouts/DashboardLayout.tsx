import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    //fungsi untuk logout
    const handleLogout = () => {
        logout(); // Hapus status login di Zustand
        //redirect ke login setelah logout
        navigate("/login");
    };


    return (
    <div className="flex w-full min-h-screen">

        {/*kiri*/}
        <div className="bg-pink-400 w-64 flex flex-col justify-between p-4">
            {/*atas*/}


            <div>
                <h1 className="text-2xl font-bold text-center text-white">Invofest</h1>
            </div>

            
            {/*tengah*/}
            <div className="flex flex-col gap-6 w-full">
                <ul>
                    <li>
                        <Link to="/dashboard" className="font-bold">Dashboard</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/dashboard/category" className="font-bold">Category</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/dashboard/pembicara" className="font-bold">Pembicara</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/dashboard/event"className="font-bold">Event</Link>
                    </li>
                </ul>
            </div>


            {/*bawah*/}
            <div>
                <button type="button"
                onClick={handleLogout}
                className="w-full bg-blue-500 text-white rounded-2xl cursor-pointer hover:bg-red-800">Logout</button>
            </div>
        </div>

        {/*kanan*/}
        <div className="p-4">
        <Outlet />
        </div>
    </div>
    );
  }