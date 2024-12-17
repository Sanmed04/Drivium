import { useState, useEffect, useRef } from "react";

export default function UsuarioForm({ usuarioInicial, onSave, onClose }) {
  const [formData, setFormData] = useState(
    usuarioInicial || {
      id: "",
      name: "",
      email: "",
      role: "user",
    }
  );

  const roles = ["admin", "user"];
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

  useEffect(() => {
    if (usuarioInicial) {
      setFormData(usuarioInicial);
    }
  }, [usuarioInicial]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { id, name, email, role } = formData;
    if (!name || !email || !role) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }
    onSave({ id, name, email, role });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div
        ref={formRef}
        className="bg-white p-6 rounded-lg shadow-lg items-center w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          {usuarioInicial ? "Editar Usuario" : "Añadir Usuario"}
        </h2>
        <div className="flex flex-col md:items-center gap-2">
          <div className="w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mb-2 p-2 border w-full"
              placeholder="Nombre"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mb-2 p-2 border w-full"
              placeholder="Email"
            />
          </div>
          <div className="w-full">
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="mb-2 p-2 border w-full"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

        </div>
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
