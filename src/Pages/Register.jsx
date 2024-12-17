import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden.',
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:8888/register", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate("/login");
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.message,
        });
      }
    } catch (error) {
      console.error("Error registrando el usuario", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || 'Error al registrar el usuario',
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-[70.8vh]">
      <div className="md:w-1/3 flex justify-end">
        <img
          src="/images/Car1.webp"
          alt="bg"
          className="scale-125 hidden md:block"
        />
      </div>
      <div className="md:w-1/3 flex justify-center">
        <div className=" bg-zinc-800 p-8 rounded-lg shadow-lg w-96 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Regístrate
          </h2>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Nombre
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                placeholder="Confirma tu contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>

      <div className="md:w-1/3 flex justify-start">
        <img src="/images/Car2.webp" alt="bg" className="hidden md:block" />
      </div>
    </div>
  );
}
