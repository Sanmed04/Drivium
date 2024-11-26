import { useState } from "react";
import { listaUsuarios } from "../../components/usuarios/ListaUsuarios";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import UsuarioForm from "../../components/ui/UsuarioForm";

export default function Usuarios() {
    const [usuarios, setUsuarios] = useState(listaUsuarios);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleEditClick = (usuario) => {
        setUsuarioSeleccionado(usuario);
        setMostrarFormulario(true);
    };

    const handleSave = (nuevoUsuario) => {
        if (usuarioSeleccionado) {
            setUsuarios(
                usuarios.map((usuario) =>
                    usuario.nombre === usuarioSeleccionado.nombre ? nuevoUsuario : usuario
                )
            );
        } else {
            setUsuarios([...usuarios, { ...nuevoUsuario, id: usuarios.length + 1 }]);
        }
    };

    const admins = usuarios.filter(usuario => usuario.rol === "Admin");
    const usuariosRegulares = usuarios.filter(usuario => usuario.rol === "Usuario");

    return (
        <div className="flex flex-col  items-center min-h-[70.8vh]">
            <div className="flex flex-col md:flex-row justify-between items-center container md:mt-12 mt-6 mb-6 px-4 gap-4">
                <Link
                    to="/admin/dashboard"
                    className="bg-zinc-800 hover:bg-zinc-900 text-white w-full md:w-24 py-2 rounded-md flex items-center transition-all duration-300"
                >
                    <FaArrowLeft className="mx-auto" size={20} />
                </Link>
                <h1 className="text-4xl md:text-6xl font-bold text-center">
                    Dashboard Usuarios
                </h1>
                <div className="w-24"></div>
            </div>

            <div className="w-full max-w-screen-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 md:ml-8 text-center md:text-left">Administradores</h1>
                <div className="flex flex-col md:flex-row flex-wrap  items-center mx-10">
                    {admins.map((usuario) => (
                        <div
                            key={usuario.nombre}
                            className="flex flex-col items-center m-4 p-8 border rounded-lg shadow-lg relative cursor-pointer"
                            onClick={() => handleEditClick(usuario)}
                        >
                            <CiEdit className="absolute top-2 right-2" size={40} />
                            <h2 className="text-lg font-semibold">{usuario.nombre}</h2>
                            <p className="text-sm">{usuario.email}</p>
                            <p className="text-sm">{usuario.rol}</p>
                        </div>
                    ))}
                </div>

                <h1 className="text-3xl font-bold my-6 md:ml-8 text-center md:text-left">Usuarios</h1>
                <div className="flex flex-col md:flex-row flex-wrap items-center mx-10">
                    {usuariosRegulares.map((usuario) => (
                        <div
                            key={usuario.nombre}
                            className="flex flex-col items-center m-4 p-8 border rounded-lg shadow-lg relative cursor-pointer"
                            onClick={() => handleEditClick(usuario)}
                        >
                            <CiEdit className="absolute top-2 right-2" size={40} />
                            <h2 className="text-lg font-semibold">{usuario.nombre}</h2>
                            <p className="text-sm">{usuario.email}</p>
                            <p className="text-sm">{usuario.rol}</p>
                        </div>
                    ))}
                </div>
            </div>

            {mostrarFormulario && (
                <UsuarioForm
                    usuarioInicial={usuarioSeleccionado}
                    onSave={handleSave}
                    onClose={() => setMostrarFormulario(false)}
                />
            )}
        </div>
    );
}
