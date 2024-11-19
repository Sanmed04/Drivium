import AutosLista from "../components/AutosLista";

export default function Explorar() {    
    return (
        <>
            <div className="w-full max-w-xl mx-auto mt-8 mb-8 px-4">
                <input
                    type="text"
                    placeholder="Buscar autos..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
            </div>
            <AutosLista />
        </>
    );
}
