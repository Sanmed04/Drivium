import { useState } from "react";
import AutosLista from "../components/AutosLista";

export default function Explorar() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <div className="w-full max-w-xl mx-auto mt-8 mb-8 px-4 font-[Poppins]">
                <input
                    type="text"
                    placeholder="Buscar por marca o modelo..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <AutosLista searchTerm={searchTerm} />
        </>
    );
}
