import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <div className="flex justify-center items-center h-[70.8vh]">
                <div className="md:w-1/3 flex justify-end">
                    <img src="/images/Car1.webp" alt="bg" className="scale-125" />
                </div>
                <div className="md:w-1/3 flex justify-center">
                    <div className=" bg-zinc-800 p-8 rounded-lg shadow-lg w-96 text-white">
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Iniciar Sesión
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                                    placeholder="correo@ejemplo.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">
                                    Contraseña
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            passwordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                                        placeholder="Ingresa tu contraseña"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-1 top-1/2 -translate-y-1/2 text-2xl text-black pr-2"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {passwordVisible ? (
                                            <FaEye />
                                        ) : (
                                            <FaEyeSlash size={25} />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Iniciar Sesión
                            </button>
                        </form>
                    </div>
                </div>

                <div className="md:w-1/3 flex justify-start">
                    <img src="/images/Car2.webp" alt="bg" className="" />
                </div>
            </div>
        </>
    );
}
