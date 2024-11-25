import { useState } from "react";
import { lista } from "../../components/autos/ListaAutos";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import AutoForm from "../../components/ui/AutoForm";

export default function AdminAutos() {
    const [autos, setAutos] = useState(lista);
    const [autoSeleccionado, setAutoSeleccionado] = useState(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleEditClick = (auto) => {
        setAutoSeleccionado(auto);
        setMostrarFormulario(true);
    };

    const handleAddClick = () => {
        setAutoSeleccionado(null);
        setMostrarFormulario(true);
    };

    const handleSave = (nuevoAuto) => {
        if (autoSeleccionado) {
            setAutos(
                autos.map((auto) =>
                    auto.nombre === autoSeleccionado.nombre ? nuevoAuto : auto
                )
            );
        } else {
            setAutos([...autos, { ...nuevoAuto, id: autos.length + 1 }]);
        }
    };

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
                    Dashboard de Autos
                </h1>
                <button
                    onClick={handleAddClick}
                    className="bg-blue-500 text-white md:w-24 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 w-full text-center"
                >
                    Añadir auto
                </button>
            </div>

            <div className="flex flex-wrap justify-center max-w-screen-2xl mx-auto">
                {autos.map((auto) => (
                    <div
                        key={auto.nombre}
                        className="flex flex-col items-center m-4 p-4 border rounded-lg shadow-lg relative cursor-pointer"
                        onClick={() => handleEditClick(auto)}
                    >
                        <CiEdit className="absolute top-2 right-2" size={40} />
                        <img
                            src={auto.image}
                            alt={auto.nombre}
                            className="w-64 md:w-52 h-32 object-contain mb-2 aspect-video"
                        />
                        <h2 className="text-lg font-semibold">{auto.nombre}</h2>
                        <p className="text-sm">{auto.categoria}</p>
                        <p className="text-sm font-bold">${auto.precio}</p>
                        <p className="text-sm">
                            {auto.condicionado ? "Disponible" : "No disponible"}
                        </p>
                    </div>
                ))}
            </div>
            {mostrarFormulario && (
                <AutoForm
                    autoInicial={autoSeleccionado}
                    onSave={handleSave}
                    onClose={() => setMostrarFormulario(false)}
                />
            )}
        </div>
    );
}
