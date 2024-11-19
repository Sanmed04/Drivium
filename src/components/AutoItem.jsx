import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa";
import { MdOutlineSensorDoor } from "react-icons/md";
import { PiTreasureChest } from "react-icons/pi";
import { Link } from "react-router-dom";
import RentarCalendario from "./RentarCalendario";

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
    const [selectedColorPopup, setSelectedColorPopup] = useState("");

    const togglePopup = () => {
        if (isPopupOpen) {
            setSelectedColorPopup("");
        }
        setIsPopupOpen(!isPopupOpen);
    };

    const handleColorClickPopup = (color) => {
        setSelectedColorPopup(color);
    };

    const getHueFilterPopup = () => {
        switch (selectedColorPopup) {
            case "red":
                return "hue-rotate(0deg)";
            case "green":
                return "hue-rotate(90deg)";
            case "blue":
                return "hue-rotate(180deg)";
            default:
                return "none";
        }
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
                    <button className="py-2 text-white btn btn-primary w-full mt-6 bg-blue-500 hover:bg-blue-600 rounded-xl">
                        Ver mas
                    </button>
                </div>
            </div>
            {isPopupOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-[Poppins]"
                    onClick={togglePopup}
                >
                    <div
                        className="bg-white p-12 pb-8 md:p-12 rounded-lg max-w-7xl flex md:flex-row flex-col w-[90vw] h-[60vh]md:h-[50vh] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={togglePopup}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                        >
                            <IoMdClose className="z-50" size={64} />
                        </button>
                        <div className="mx-auto w-[300px] sm:w-[400px] md:w-1/2 h-full flex justify-center items-center my-auto">
                            <img
                                src={image}
                                alt="Auto"
                                className="object-contain"
                                style={{ filter: getHueFilterPopup() }}
                            />
                        </div>
                        <div className="w-full md:w-1/2 md:my-5 md:ml-16">
                            <span className="flex space-x-4">
                                <h5 className="text-3xl md:text-5xl font-bold truncate">
                                    {marca} {nombre}
                                </h5>
                            </span>

                            <Link
                                to={`/autos?categoria=${categoria}`}
                                className="text-xlmd:text-2xl md:mt-1 underline"
                            >
                                {categoria}
                            </Link>
                            <p className="hidden md:block text-xl md:mt-4">
                                {descripcion}
                            </p>
                            <p className="text-2xl md:text-4xl font-bold my-2 md:mt-4">
                                {" "}
                                ${precio},00
                            </p>

                            <div className="flex space-x-2 mt-2 items-center">
                                <p className="text-lg md:text-xl mr-2">
                                    Disponible en 3 colores
                                </p>
                                <div
                                    className="w-10 h-10 border-2 border-gray-300 flex justify-center items-center cursor-pointer"
                                    onClick={() => handleColorClickPopup("red")}
                                >
                                    <div className="w-6 h-6 bg-red-500"></div>
                                </div>
                                <div
                                    className="w-10 h-10 border-2 border-gray-300 flex justify-center items-center cursor-pointer"
                                    onClick={() =>
                                        handleColorClickPopup("green")
                                    }
                                >
                                    <div className="w-6 h-6 bg-green-500"></div>
                                </div>
                                <div
                                    className="w-10 h-10 border-2 border-gray-300 flex justify-center items-center cursor-pointer"
                                    onClick={() =>
                                        handleColorClickPopup("blue")
                                    }
                                >
                                    <div className="w-6 h-6 bg-blue-500"></div>
                                </div>
                            </div>
                            <div className="flex mt-4 space-x-4">
                                <div className="flex flex-col items-center">
                                    <div className="flex justify-center items-center border-2 border-gray-300 p-2 rounded-full">
                                        <IoPersonOutline size={20} />
                                    </div>
                                    <p className="card-text text-lg mt-1  ">
                                        {pasajeros}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="flex justify-center items-center border-2 border-gray-300 p-2 rounded-full">
                                        <MdOutlineSensorDoor size={20} />
                                    </div>
                                    <p className="card-text text-lg mt-1  ">
                                        {puertas}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="flex justify-center items-center border-2 border-gray-300 p-2 rounded-full">
                                        <PiTreasureChest size={20} />
                                    </div>
                                    <p className="card-text text-lg mt-1  ">
                                        {motor}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="flex justify-center items-center border-2 border-gray-300 p-2 rounded-full">
                                        <FaRegSnowflake size={20} />
                                    </div>
                                    <p className="card-text text-lg mt-1  ">
                                        {condicionado ? "Si" : "No"}
                                    </p>
                                </div>
                            </div>
                            <RentarCalendario precio={precio} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
