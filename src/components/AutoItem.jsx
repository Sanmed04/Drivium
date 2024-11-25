import { useState } from "react";
import AutoPopup from "./AutoPopup";
import { IoPersonSharp } from "react-icons/io5";

import { useAuth } from "../contexts/AuthContext";

export default function AutoItem({
    image,
    nombre,
    categoria,
    precio,
    descripcion,
    id,
    pasajeros,
    puertas,
    motor,
    condicionado,
    marca,
}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { is_logueado } = useAuth();

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <div
                onClick={togglePopup}
                className="card w-[300px] rounded-3xl p-4 drop-shadow-xl bg-white cursor-pointer font-[Tektur]"
            >
                <div className="card-body pt-5">
                    <div className="h-[200px] flex justify-center items-center">
                        <img
                            className="h-fit object-cover w-auto hover:scale-110 transition-all duration-300"
                            src={image}
                            alt="Auto"
                        />
                    </div>
                    <div className="flex ">
                        <h5 className="card-title text-2xl font-bold truncate">
                            {nombre}
                        </h5>
                        <div className="flex ms-auto items-center">
                            <div className="rounded-full  p-2">
                                <IoPersonSharp />
                            </div>
                            <p className="card-text text-md ">{pasajeros}</p>
                        </div>
                    </div>
                    <p className="card-text text-sm">{categoria}</p>
                    <p className="text-2xl font-bold mt-2"> ${precio}</p>
                    <button
                        onClick={togglePopup}
                        className="py-2 text-white btn btn-primary w-full mt-6 bg-blue-500 hover:bg-blue-600 rounded-xl"
                    >
                        Ver más
                    </button>
                </div>
            </div>
            {isPopupOpen && (
                <AutoPopup
                    image={image}
                    nombre={nombre}
                    categoria={categoria}
                    precio={precio}
                    descripcion={descripcion}
                    marca={marca}
                    pasajeros={pasajeros}
                    puertas={puertas}
                    motor={motor}
                    condicionado={condicionado}
                    togglePopup={togglePopup}
                    is_logueado={is_logueado}
                />
            )}
        </>
    );
}