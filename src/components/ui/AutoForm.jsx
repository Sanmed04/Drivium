import { useState, useEffect, useRef } from "react";

export default function AutoForm({ autoInicial, onSave, onClose }) {
    const [formData, setFormData] = useState(
        autoInicial || {
            name: "",
            category: "",
            price: "",
            ac: false,
            image: "",
            description: "",
            brand: "",
            doors: 0,
            passengers: 0,
            engine: "",
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
        const { name, category, price, description, brand, doors, passengers, engine } = formData;
        if (!name || !category || !price || !description || !brand || doors < 2 || passengers < 2 || !engine) {
            alert("Por favor, completa todos los campos correctamente.");
            return;
        }
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            <div ref={formRef} className="bg-white p-6 rounded-lg shadow-lg items-center w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-center">
                    {autoInicial ? "Editar Auto" : "Añadir Auto"}
                </h2>
                <div className="flex flex-col md:items-center gap-2">
                    <div className="w-full">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mb-2 p-2 border w-full md:w-2/3"
                            placeholder="Nombre"
                        />
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="mb-2 p-[9px] border w-full md:w-1/3"
                        >
                            {categorias.map((category) => (
                                <option key={category} value={category}>
                                    {category}
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
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="mb-2 p-2 border w-full"
                            placeholder="Descripción"
                        />
                    </div>
                    <div className="w-full">
                        <input
                            type="text"
                            name="brand"
                            value={formData.brand}
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
                                name="doors"
                                value={formData.doors}
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
                                name="passengers"
                                value={formData.passengers}
                                onChange={handleInputChange}
                                className="mb-2 p-2 border w-full"
                                placeholder="Pasajeros"
                                min="2"
                            />
                        </div>
                        <div className="w-full md:w-1/3">
                            <label className="block text-sm font-medium text-gray-700">Motor</label>
                            <input
                                type="text"
                                name="engine"
                                value={formData.engine}
                                onChange={handleInputChange}
                                className="mb-2 p-2 border w-full"
                                placeholder="2L"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            className="mb-2 p-2 border w-full"
                            placeholder="Precio"
                        />
                        
                    </div>
                </div>
                <label className="flex items-center justify-center md:justify-start mt-4">
                    <input
                        type="checkbox"
                        name="ac"
                        checked={formData.ac}
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
