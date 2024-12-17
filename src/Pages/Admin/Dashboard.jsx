import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { BsJournalBookmark } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { useEffect } from "react";

export default function Dashboard() {
  const { token, role } = useAuth();

  useEffect(() => {
    if (role === 'admin') {
      getDashboard();
    }
  }, [role]);

  const getDashboard = async () => {
    try {
      const response = await axios.get("http://localhost:8888/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  if (role !== 'admin') {
    return <div>No tienes acceso a esta página</div>;
  }

  return (
    <div className="flex flex-col md:space-y-24 space-y-12 items-center min-h-[70.8vh]">
      <div className="mt-12 md:mt-24">
        <h1 className="text-4xl md:text-6xl font-bold">Administrador</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl md:max-w-6xl items-center">
        <Link
          to="/admin/autos"
          className="flex-1 flex-col bg-zinc-800 rounded-lg p-8 h-[300px] md:h-[400px] w-[300px] md:w-[400px]
                     hover:bg-zinc-900 hover:scale-105 transition-all duration-300 flex items-center justify-center space-y-4"
        >
          <FaCar className="text-6xl text-white" size={200} />
          <h2 className="text-4xl font-bold text-white">Autos</h2>
        </Link>
        <Link
          to="/admin/reservas"
          className="flex-1 flex-col bg-zinc-800 rounded-lg p-8 h-[300px] md:h-[400px] w-[300px] md:w-[400px]
                     hover:bg-zinc-900 hover:scale-105 transition-all duration-300 flex items-center justify-center space-y-4"
        >
          <BsJournalBookmark className="text-6xl text-white" size={200} />
          <h2 className="text-4xl font-bold text-white">Reservas</h2>
        </Link>
        <Link
          to="/admin/usuarios"
          className="flex-1 flex-col bg-zinc-800 rounded-lg p-8 h-[300px] md:h-[400px] w-[300px] md:w-[400px]
                     hover:bg-zinc-900 hover:scale-105 transition-all duration-300 flex items-center justify-center space-y-4"
        >
          <FaUsers className="text-6xl text-white" size={200} />
          <h2 className="text-4xl font-bold text-white">Usuarios</h2>
        </Link>
      </div>
    </div>
  );
}
