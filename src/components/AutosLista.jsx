import AutoItem from "./AutoItem";
import { useState } from "react";
const lista = [
    {
        id: 1,
        image: "/images/Auto1.png",
        nombre: "Auto 1",
        categoria: "Urbano",
        precio: 100,
    },
    {
        id: 2,
        image: "/images/Auto2.png",
        nombre: "Auto 2",
        categoria: "Camioneta",
        precio: 200,
    },
    {
        id: 3,
        image: "/images/Auto3.png",
        nombre: "Auto 3",
        categoria: "Deportivo",
        precio: 300,
    },
    {
        id: 4,
        image: "/images/Auto4.png",
        nombre: "Auto 4",
        categoria: "Camioneta",
        precio: 400,
    },
    {
        id: 5,
        image: "/images/Auto5.png",
        nombre: "Auto 5",
        categoria: "Deportivo",
        precio: 500,
    },
    {
        id: 6,
        image: "/images/Auto6.png",
        nombre: "Auto 6",
        categoria: "Camioneta",
        precio: 600,
    },
    {
        id: 7,
        image: "/images/Auto7.png",
        nombre: "Auto 7",
        categoria: "Camioneta",
        precio: 700,
    },
    {
        id: 8,
        image: "/images/Auto8.png",
        nombre: "Auto 8",
        categoria: "Camioneta",
        precio: 800,
    },
    {
        id: 9,
        image: "/images/Auto9.png",
        nombre: "Auto 9",
        categoria: "Urbano",
        precio: 900,
    },
];

export default function AutosLista() {
    const [autos, setAutos] = useState(lista);

    return (
        <>
            <div className="row flex flex-wrap gap-5 justify-center max-w-screen-2xl mx-auto">
                {autos.map((auto) => (
                    <AutoItem key={auto.nombre} {...auto} />
                ))}
            </div>
        </>
    );
}
