import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, Link } from "react-router-dom";

export default function RentarCalendario({ precio, isLoggedIn }) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showPopup, setShowPopup] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [totalPrice, setTotalPrice] = useState(precio);
    const [diffDays, setDiffDays] = useState(1);
    const [showLoginAlert, setShowLoginAlert] = useState(false);
    const navigate = useNavigate();

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleFinalizeReservation = () => {
        setShowPopup(false);
        setShowConfirmation(true);
        setTimeout(() => {
            setShowConfirmation(false);
            navigate("/");
        }, 4000);
    };

    const handleButtonClick = () => {
        if (isLoggedIn) {
            togglePopup();
        } else {
            setShowLoginAlert(true);
        }
    };

    useEffect(() => {
        const diffTime = endDate - startDate;
        const calculatedDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        setDiffDays(calculatedDays);
        setTotalPrice(precio * calculatedDays);
    }, [startDate, endDate, precio]);

    return (
        <div className="mt-4">
            <button
                onClick={handleButtonClick}
                className="text-white btn btn-primary w-full md:w-auto md:px-32 bg-blue-500 hover:bg-blue-600 rounded-xl text-2xl py-4"
            >
                Rentar
            </button>
            {showPopup && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={togglePopup}
                >
                    <div
                        className="bg-white p-4 md:p-8 rounded-lg relative w-full mx-5 max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={togglePopup}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                        >
                            Cerrar
                        </button>
                        <p className="text-lg font-bold">
                            Selecciona las fechas:
                        </p>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-2">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                minDate={new Date()}
                                className="border p-2 rounded w-full"
                            />
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                className="border p-2 rounded w-full"
                            />
                        </div>
                        <p className="mt-4 text-xl font-bold">
                            Días: {diffDays} - Precio total: ${totalPrice}
                        </p>
                        <button
                            onClick={handleFinalizeReservation}
                            className="mt-4 text-white btn btn-success w-full bg-green-500 hover:bg-green-600 rounded-xl text-xl py-2"
                        >
                            Finalizar Reserva
                        </button>
                    </div>
                </div>
            )}
            {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg h-1/3 w-full mx-5 max-w-md">
                        <p className="text-3xl font-bold mb-2">
                            Reserva confirmada.
                        </p>
                        <p className="text-xl font-bold">
                            Usted será redirigido a la página principal.
                        </p>
                        <span>
                            <div className="flex justify-center items-center mt-10">
                                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
                            </div>
                        </span>
                    </div>
                </div>
            )}
            {showLoginAlert && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={() => setShowLoginAlert(false)}
                >
                    <div
                        className="bg-white p-8 rounded-lg h-[250px] flex flex-col justify-center items-center mx-5"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <p className="text-2xl font-bold mb-4">
                            Por favor, inicie sesión para realizar esta acción.
                        </p>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
                            <button
                                onClick={() => setShowLoginAlert(false)}
                                className="text-white btn btn-primary w-full bg-red-500 hover:bg-red-600 rounded-xl text-xl py-2 text-center"
                            >
                                Cerrar
                            </button>
                            <Link
                                to="/login"
                                className="text-white btn btn-primary w-full bg-blue-500 hover:bg-blue-600 rounded-xl text-xl py-2 text-center"
                            >
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
