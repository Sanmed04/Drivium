import AutoItem from "./AutoItem";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const lista = [
    {
        id: 1,
        image: "/images/Auto1.png",
        nombre: "Civic Family",
        categoria: "Urbano", 
        descripcion: "Auto compacto con motor 3.5L y 5 puertas",
        precio: 4100,
        marca: "Honda",
        puertas: 5,
        pasajeros: 5,
        motor: "3.5L",
        condicionado: true,
    },
    {
        id: 2,
        image: "/images/Auto2.png",
        nombre: "Venue",
        categoria: "Camioneta",
        descripcion: "Auto compacto con motor 1.5L y 5 puertas",
        precio: 3200,
        marca: "Hyundai",
        puertas: 5,
        pasajeros: 5,
        motor: "1.5L",
        condicionado: true,
    },
    {
        id: 3,
        image: "/images/Auto3.png",
        nombre: "AMG GT",
        categoria: "Deportivo",
        descripcion: "Auto deportivo con motor 2L y 2 puertas",
        precio: 6300,
        marca: "Mercedes Benz",
        puertas: 2,
        pasajeros: 2,
        motor: "2L",
        condicionado: true,



    },
    {
        id: 4,
        image: "/images/Auto4.png",
        nombre: "Safari",
        categoria: "Camioneta",
        descripcion: "Auto compacto con motor 3.5L y 5 puertas",
        precio: 6400,
        marca: "Tata",
        puertas: 5,
        pasajeros: 5,
        motor: "3.5L",
        condicionado: true,
    },
    {
        id: 5,
        image: "/images/Auto5.png",
        nombre: "i4 Sport",
        categoria: "Deportivo",
        descripcion: "Auto deportivo con motor 2.5L y 4 puertas",
        precio: 7600,
        marca: "BMW",
        puertas: 4,
        pasajeros: 5,
        motor: "2.5L",
        condicionado: true,
    },
    {
        id: 6,
        image: "/images/Auto6.png",
        nombre: "Explorer",
        categoria: "Camioneta",
        descripcion: "Auto compacto con motor 1.5L y 4 puertas",
        precio: 6600,
        marca: "Ford",
        puertas: 4,
        pasajeros: 5,
        motor: "1.5L",
        condicionado: true,
    },
    {
        id: 7,
        image: "/images/Auto7.png",
        nombre: "VF8",
        categoria: "Camioneta",
        descripcion: "Auto compacto con motor 1.5L y 4 puertas",
        precio: 5500,
        marca: "VinFast",
        puertas: 4,
        pasajeros: 5,
        motor: "1.5L",
        condicionado: true,
    },
    {
        id: 8,
        image: "/images/Auto8.png",
        nombre: "Q3",
        categoria: "Camioneta",
        descripcion: "Auto compacto con motor 1.5L y 4 puertas",
        precio: 5800,
        marca: "Audi",
        puertas: 4,
        pasajeros: 4,
        motor: "1.5L",
        condicionado: true,
    },
    {
        id: 9,
        image: "/images/Auto9.png",
        nombre: "Corolla",
        categoria: "Urbano",
        descripcion: "Auto compacto con motor 1.5L y 4 puertas",
        precio: 3900,
        marca: "Toyota",
        puertas: 4,
        pasajeros: 5,
        motor: "1.5L",
        condicionado: true,
    },
];

export default function AutosLista({ searchTerm }) {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center max-w-screen-2xl mx-auto">
                {autos.map((auto) => (
                    <AutoItem key={auto.nombre} {...auto} />
                ))}
            </div>
        </>
    );
}
