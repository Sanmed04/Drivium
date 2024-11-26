import { Link} from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
    const { is_logueado, is_admin, logout } = useAuth();
    const navigate = useNavigate();
    const handlerLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/");
    };

    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <header className="bg-zinc-900 text-white p-4 md:p-10 font-[Poppins]">
            {/* Menu desktop */}
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-4 z-50">
                    <img
                        src="/images/DriviumLogoGrande.png"
                        alt="Drivium"
                        className="w-16 md:w-20"
                    />
                    <h1 className="text-3xl md:text-5xl font-bold text-center">
                        Drivium
                    </h1>
                </Link>
                <div className="md:hidden z-50" >
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {!isOpen && <IoMdMenu size={60} />}
                    </button>
                </div>
                <div className={`md:flex gap-4 ${isOpen ? "" : "hidden"}`}>
                    {/* Dropdown */}
                    <div
                        className="hidden md:flex dropdown"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={closeDropdown}
                    >
                        <Link
                            to="/autos"
                            className="flex items-center gap-1 text-xl md:text-2xl z-50"
                            onClick={closeDropdown}
                        >
                            Autos
                            <IoMdArrowDropdown />
                        </Link>
                        {isDropdownOpen && (
                            <div className="dropdown-content top-0">
                                <div className="row flex flex-col md:flex-row justify-between bg-gradient-to-b from-zinc-900 to-zinc-800  min-h-[540px]">
                                    <div className="w-full md:w-1/3 flex justify-end">
                                        <Link
                                            to="/autos?categoria=Urbano"
                                            className="flex flex-col items-center justify-center h-inherit p-4 rounded-lg transition-colors my-auto mb-24"
                                            onClick={closeDropdown}
                                        >
                                            <img
                                                src="/images/Auto9.png"
                                                alt="Urbano"
                                                className="h-[20vw] md:h-[10vw] me-auto hover:scale-105 transition-transform"
                                            />
                                            <div className="flex items-center justify-center h-full">
                                                <span className="text-3xl md:text-5xl text-white absolute mt-14 font-[Poppins] font-bold">
                                                    Urbanos
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="w-full md:w-1/3 flex justify-center">
                                        <Link
                                            to="/autos?categoria=Camioneta"
                                            className="flex flex-col items-center justify-center h-inherit p-4 rounded-lg transition-colors my-auto mb-24"
                                            onClick={closeDropdown}
                                        >
                                            <img
                                                src="/images/Auto4.png"
                                                alt="Camioneta"
                                                className="h-[20vw] md:h-[11vw] mx-auto hover:scale-105 transition-transform"
                                            />
                                            <div className="flex items-center justify-center h-full">
                                                <span className="text-3xl md:text-4xl text-white absolute mt-14 font-[Poppins] font-bold">
                                                    Camionetas
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="w-full md:w-1/3 flex justify-start">
                                        <Link
                                            to="/autos?categoria=Deportivo"
                                            className="flex flex-col items-center justify-center h-inherit p-4 rounded-lg transition-colors my-auto mb-24"
                                            onClick={closeDropdown}
                                        >
                                            <img
                                                src="/images/Auto3.png"
                                                alt="Deportivo"
                                                className="h-[20vw] md:h-[10vw] mx-auto hover:scale-105 transition-transform"
                                            />
                                            <div className="flex items-center justify-center h-full">
                                                <span className="text-3xl md:text-4xl text-white absolute mt-14 font-[Poppins] font-bold">
                                                    Deportivos
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link
                        to="/"
                        className="hidden md:flex hover:scale-105 transition-all duration-300 text-xl md:text-2xl z-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/contacto"
                        className="hidden md:flex hover:scale-105 transition-all duration-300 text-xl md:text-2xl z-50"
                        onClick={() => setIsOpen(false)}
                    >
                        Contacto
                    </Link>
                    {is_logueado ? (
                        <>
                            {is_admin && (
                                <Link
                                    to="/admin/dashboard"
                                    className="hidden md:flex hover:scale-105 transition-all duration-300 text-xl md:text-2xl z-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Dashboard
                                </Link>
                            )}
                            <a
                                className="hidden md:flex hover:scale-105 transition-all duration-300 text-xl md:text-2xl z-50 cursor-pointer"
                                onClick={handlerLogout}
                            >
                                Logout
                            </a>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="hidden md:flex hover:scale-105 transition-all duration-300 text-xl md:text-2xl z-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
            {/* Menu mobile */}
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
                    {is_logueado ? (
                        <>
                            {is_admin && (
                                <Link
                                    to="/admin/dashboard"
                                    className="hover:text-gray-300 transition-colors text-5xl mb-8"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Dashboard
                                </Link>
                            )}
                            <a
                                className="hover:text-gray-300 transition-colors text-5xl cursor-pointer"
                                onClick={handlerLogout}
                            >
                                Logout
                            </a>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="hover:text-gray-300 transition-colors text-5xl"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                    )}
                </div>
            )}
        </header>
    );
}
