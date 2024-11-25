import { useState, useEffect, useRef } from "react";

export default function AutoForm({ autoInicial, onSave, onClose }) {
    const [formData, setFormData] = useState(
        autoInicial || {
            nombre: "",
            categoria: "",
            precio: "",
            condicionado: false,
            image: "",
            descripcion: "",
            marca: "",
            puertas: 0,
            pasajeros: 0,
            motor: "",
        }
    );

    const categorias = ["Urbano", "Camioneta", "Deportivo"];
    const formRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (name === "image" && files.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    image: reader.result,
                });
            };
            reader.readAsDataURL(files[0]);
        } else {
            setFormData({
                ...formData,
                [name]: type === "checkbox" ? checked : value,
            });
        }
    };

    const handleSubmit = () => {
        const { nombre, categoria, precio, descripcion, marca, puertas, pasajeros, motor } = formData;
        if (!nombre || !categoria || !precio || !descripcion || !marca || puertas < 2 || pasajeros < 2 || !motor) {
            alert("Por favor, completa todos los campos correctamente.");
            return;
        }
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center p-4">
            <div ref={formRef} className="bg-white p-6 rounded-lg shadow-lg items-center w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-center">
                    {autoInicial ? "Editar Auto" : "Añadir Auto"}
                </h2>
                <div className="flex flex-col md:items-center gap-2">
                    <div className="w-full">
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className="mb-2 p-2 border w-full md:w-2/3"
                            placeholder="Nombre"
                        />
                        <select
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleInputChange}
                            className="mb-2 p-[9px] border w-full md:w-1/3"
                        >
                            {categorias.map((categoria) => (
                                <option key={categoria} value={categoria}>
                                    {categoria}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="mb-2 p-2 border w-full"
                    />
                    <div className="w-full">
                        <input
                            type="text"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleInputChange}
                            className="mb-2 p-2 border w-full"
                            placeholder="Descripción"
                        />
                    </div>
                    <div className="w-full">
                        <input
                            type="text"
                            name="marca"
                            value={formData.marca}
                            onChange={handleInputChange}
                            className="mb-2 p-2 border w-full"
                            placeholder="Marca"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="w-full md:w-1/3">
                            <label className="block text-sm font-medium text-gray-700">Puertas</label>
                            <input
                                type="number"
                                name="puertas"
                                value={formData.puertas}
                                onChange={handleInputChange}
                                className="mb-2 p-2 border w-full"
                                placeholder="Puertas"
                                min="2"
                            />
                        </div>
                        <div className="w-full md:w-1/3">
                            <label className="block text-sm font-medium text-gray-700">Pasajeros</label>
                            <input
                                type="number"
                                name="pasajeros"
                                value={formData.pasajeros}
                                onChange={handleInputChange}
                                className="mb-2 p-2 border w-full"
                                placeholder="Pasajeros"
                                min="2"
                            />
                        </div>
                        <div className="w-full md:w-1/3">
                            <label className="block text-sm font-medium text-gray-700">2L</label>
                            <input
                                type="text"
                                name="motor"
                                value={formData.motor}
                                onChange={handleInputChange}
                                className="mb-2 p-2 border w-full"
                                placeholder="2L"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <input
                            type="number"
                            name="precio"
                            value={formData.precio}
                            onChange={handleInputChange}
                            className="mb-2 p-2 border w-full"
                            placeholder="Precio"
                        />
                        
                    </div>
                </div>
                <label className="flex items-center justify-center md:justify-start mt-4">
                    <input
                        type="checkbox"
                        name="condicionado"
                        checked={formData.condicionado}
                        onChange={handleInputChange}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">Disponible</span>
                </label>
                <div className="flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="mt-4 p-2 bg-blue-500 text-white rounded w-full md:w-auto px-8 hover:bg-blue-600 transition-colors"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}
