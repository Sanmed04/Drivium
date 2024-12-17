import { useState, useEffect } from "react";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import AutoForm from "../../components/ui/AutoForm";
import PopupBorrar from "../../components/ui/popupBorrar";

export default function AdminAutos() {
    const [autos, setAutos] = useState([]);
    const [autoSeleccionado, setAutoSeleccionado] = useState(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [mostrarPopup, setMostrarPopup] = useState(false);
    const [autoAEliminar, setAutoAEliminar] = useState(null);

    useEffect(() => {
        const fetchAutos = async () => {
            try {
                const response = await axios.get("http://localhost:8888/autos");
                if (response.data.success && Array.isArray(response.data.results)) {
                    setAutos(response.data.results); // Adjusted to match the response structure
                } else {
                    console.error("Unexpected response format:", response.data);
                }
            } catch (error) {
                console.error("Error devolviendo autos", error);
            }
        };

        fetchAutos();
    }, []);

    const handleEditClick = (auto) => {
        setAutoSeleccionado(auto);
        setMostrarFormulario(true);
    };

    const handleAddClick = () => {
        setAutoSeleccionado(null);
        setMostrarFormulario(true);
    };

    const handleSave = async (nuevoAuto) => {
        try {
            if (autoSeleccionado) {
                await axios.put(`http://localhost:8888/autos/${autoSeleccionado.ID}`, nuevoAuto);
                setAutos(
                    autos.map((auto) =>
                        auto.ID === autoSeleccionado.ID ? nuevoAuto : auto
                    )
                );
            } else {
                const response = await axios.post("http://localhost:8888/autos", nuevoAuto);
                setAutos([...autos, { ...nuevoAuto, ID: response.data.ID }]);
            }
        } catch (error) {
            console.error("Error guardando el auto", error);
        }
    };

    const handleDeleteClick = (ID) => {
        setAutoAEliminar(ID);
        setMostrarPopup(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:8888/autos/${autoAEliminar}`);
            setAutos(autos.filter((auto) => auto.ID !== autoAEliminar));
            setMostrarPopup(false);
        } catch (error) {
            console.error("Error eliminando el auto", error);
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
                    Dashboard Autos
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
                        key={auto.ID} // Ensure each child has a unique key
                        className="flex flex-col items-center m-4 p-4 border rounded-lg shadow-lg relative cursor-pointer"
                        onClick={() => handleEditClick(auto)}
                    >
                        <button
                            className="absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteClick(auto.ID);
                            }}
                        >
                            <FaTrash size={16} />
                        </button>
                        <CiEdit className="absolute top-2 right-2" size={40} />
                        <img
                            src={auto.image}
                            alt={auto.name}
                            className="w-64 md:w-52 h-32 object-contain mb-2 aspect-video"
                        />
                        <h2 className="text-lg font-semibold">{auto.name}</h2>
                        <p className="text-sm">{auto.category}</p>
                        <p className="text-sm font-bold">${auto.price}</p>
                        <p className="text-sm">
                            {auto.ac ? "Disponible" : "No disponible"}
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
            {mostrarPopup && (
                <PopupBorrar
                    onConfirm={confirmDelete}
                    onCancel={() => setMostrarPopup(false)}
                />
            )}
        </div>
    );
}
