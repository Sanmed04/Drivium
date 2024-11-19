export default function Contacto() {
    return (
        <>
            <div className="backdrop-blur-m">
                <div className="absolute inset-0 bgContacto h-screen bg-cover bg-center bg-no-repeat "></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <form
                    action=""
                    className="flex flex-col border-2 text-white border-black bg-black/50 rounded-lg p-4 backdrop-blur-sm space-y-4 shadow"
                >
                    <input
                        type="text"
                        placeholder="Ingrese su nombre"
                        className="bg-transparent text-white text-2xl"
                    />
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
                </form>
            </div>
        </>
    );
}
