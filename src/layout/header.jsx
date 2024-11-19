import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <header className="bg-zinc-900 text-white p-4 md:p-10">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-4 z-50">
                    <img
                        src="/images/DriviumLogoGrande.png"
                        alt="Drivium"
                        className="w-16 md:w-20"
                    />
                    <h1 className="text-3xl md:text-5xl font-bold text-center">Drivium</h1>
                </Link>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IoMdClose size={60} /> : <IoMdMenu size={60} />}
                    </button>
                </div>
                <div className="hidden md:flex gap-4">
                    <Link
                        to="/"
                        className="hover:text-gray-300 transition-colors text-xl md:text-2xl"
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/contacto"
                        className="hover:text-gray-300 transition-colors text-xl md:text-2xl"
                    >
                        Contacto
                    </Link>
                    <div className="dropdown">
                        <Link
                            to="/autos"
                            className="dropbtn flex items-center gap-1 text-xl md:text-2xl"
                        >
                            Autos 
                            <IoMdArrowDropdown />
                        </Link>
                        <div className="dropdown-content">
                            <div className="text-white p-4 bg-zinc-900 text-center">
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Selecciona categoria
                                </h2>
                            </div>
                            <div className="row flex flex-col md:flex-row justify-between bg-gradient-to-b from-zinc-900 to-zinc-800">
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <Link
                                        to="/autos?categoria=Urbano"
                                        className="flex flex-col items-center justify-center h-inherit p-4 rounded-lg transition-colors"
                                    >
                                        <img
                                            src="/images/Auto9.png"
                                            alt="Urbano"
                                            className="h-[20vw] md:h-[10vw] mx-auto hover:scale-105 transition-transform"
                                        />
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-3xl md:text-5xl text-white absolute mb-8 font-bold">
                                                {/* Urbanos */}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <Link
                                        to="/autos?categoria=Camioneta"
                                        className="flex flex-col items-center justify-center h-inherit p-4 rounded-lg transition-colors"
                                    >
                                        <img
                                            src="/images/Auto4.png"
                                            alt="Camioneta"
                                            className="h-[20vw] md:h-[10vw] mx-auto hover:scale-105 transition-transform"
                                        />
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-3xl md:text-4xl text-white absolute mb-8">
                                                {/* Camionetas */}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <Link
                                        to="/autos?categoria=Deportivo"
                                        className="flex flex-col items-center justify-center h-inherit p-4 rounded-lg transition-colors"
                                    >
                                        <img
                                            src="/images/Auto3.png"
                                            alt="Deportivo"
                                            className="h-[20vw] md:h-[10vw] mx-auto hover:scale-105 transition-transform"
                                        />
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-3xl md:text-4xl text-white absolute mb-8">
                                                {/* Deportivos */}
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/login"
                        className="hover:text-gray-300 transition-colors text-xl md:text-2xl"
                    >
                        Login
                    </Link>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-zinc-900 bg-opacity-95 flex flex-col items-center justify-center z-20">
                    
                    <button
                        className="absolute top-4 right-4 text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        <IoMdClose size={60} />
                    </button>
                    <Link
                        to="/"
                        className="hover:text-gray-300 transition-colors text-5xl mb-8"
                        onClick={() => setIsOpen(false)}
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/contacto"
                        className="hover:text-gray-300 transition-colors text-5xl mb-8"
                        onClick={() => setIsOpen(false)}
                    >
                        Contacto
                    </Link>
                    <Link
                        to="/autos"
                        className="hover:text-gray-300 transition-colors text-5xl mb-8"
                        onClick={() => setIsOpen(false)}
                    >
                        Autos
                    </Link>
                    <Link
                        to="/login"
                        className="hover:text-gray-300 transition-colors text-5xl"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            )}
        </header>
    );
}
