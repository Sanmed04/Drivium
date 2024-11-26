import AutoItem from "./AutoItem";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lista } from "./autos/ListaAutos";


export default function DisplayAutos({ searchTerm }) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoria = queryParams.get('categoria');
    const [autos, setAutos] = useState(lista);

    useEffect(() => {
        let filteredAutos = lista.filter(auto => 
            auto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            auto.marca.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (categoria) {
            filteredAutos = filteredAutos.filter(auto => auto.categoria === categoria);
        }

        setAutos(filteredAutos);
    }, [searchTerm, categoria]);

    return (
        <>
            {autos.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                    <p className="text-4xl text-gray-500 mt-20">Sin resultados</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center max-w-screen-2xl mx-auto">
                    {autos.map((auto) => (
                        <AutoItem key={auto.nombre} {...auto} />
                    ))}
                </div>
            )}
        </>
    );
}
