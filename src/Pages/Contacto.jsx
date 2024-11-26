import { useState } from 'react';

export default function Contacto() {
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 4000);
    };

    return (
        <>
            <div className="">
                <div className="absolute inset-0 bgContacto h-screen bg-cover bg-center bg-no-repeat "></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col border-2 text-white border-black bg-black/50 rounded-lg p-4 backdrop-blur-sm space-y-4 shadow"
                >
                    <label htmlFor="nombre" className="text-white text-2xl">
                        Nombre
                    </label>
                    <input
                        type="text"
                        placeholder="Ingrese su nombre"
                        className="bg-transparent text-white text-2xl"
                    />
                    <label htmlFor="email" className="text-white text-2xl">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Ingrese su email"
                        className="bg-transparent text-white text-2xl"
                    />
                    <label htmlFor="mensaje" className="text-white text-2xl">
                        Mensaje
                    </label>

                    <textarea
                        name="mensaje"
                        id="mensaje"
                        cols="30"
                        rows="5"
                        maxLength={200}
                        className="max-h-[300px] bg-transparent border-2 border-white text-white text-2xl"
                    ></textarea>
                    <button type="submit" className="bg-white text-black text-2xl rounded-lg py-4 hover:bg-gray-700 hover:text-white transition-all duration-300">
                        Enviar
                    </button>
                    {showPopup && (
                        <div className="mt-4 p-2 bg-green-500 text-white rounded">
                            Mensaje enviado correctamente
                        </div>
                    )}
                </form>
            </div>
        </>
    );
}
