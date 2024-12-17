import AutoItem from "./AutoItem";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function DisplayAutos({ searchTerm }) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoria = queryParams.get('categoria');
    const [autos, setAutos] = useState([]);
    const [filteredAutos, setFilteredAutos] = useState([]);

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

    useEffect(() => {
        let filtered = autos.filter(auto => 
            (auto.name && auto.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (auto.brand && auto.brand.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        if (categoria) {
            filtered = filtered.filter(auto => auto.category === categoria);
        }

        setFilteredAutos(filtered);
    }, [searchTerm, categoria, autos]);

    return (
        <>
            {filteredAutos.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                    <p className="text-4xl text-gray-500 mt-20">Sin resultados</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center max-w-screen-2xl mx-auto">
                    {filteredAutos.map((auto) => (
                        <AutoItem key={auto.ID} {...auto} />
                    ))}
                </div>
            )}
        </>
    );
}
