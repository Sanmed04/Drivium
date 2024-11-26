import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function AdminReservas() {
    return (
        <div className="flex flex-col items-center min-h-[70.8vh]">
            <div className="flex flex-col md:flex-row justify-between items-center container md:mt-12 mt-6 mb-6 px-4 gap-4">
                <Link
                    to="/admin/dashboard"
                    className="bg-zinc-800 hover:bg-zinc-900 text-white w-full md:w-24 py-2 rounded-md flex items-center transition-all duration-300"
                >
                    <FaArrowLeft className="mx-auto" size={20} />
                </Link>
                <h1 className="text-4xl md:text-6xl font-bold text-center">
                    Dashboard Reservas
                </h1>
                <div className="w-24"></div>
            </div>
            <div className="w-full">
                <h2 className="text-9xl text-red-600 text-center mt-52 font-[Poppins]">Coming Soon</h2>
            </div>
        </div>
    );
}
