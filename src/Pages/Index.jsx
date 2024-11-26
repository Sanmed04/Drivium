import { Link } from "react-router-dom";

export default function Index() {
    return (
        <>
            <div className="min-h-[70.8vh]">
                <div className="absolute top-0 left-0 w-full h-full bg-black">
                    <div className="relative h-full">
                        <video
                            className="cursor-default w-full h-full object-cover md:object-fill"
                            poster=""
                            preload="false"
                            autoPlay="autoplay"
                            muted="muted"
                            playsInline="playsInline"
                        >
                            <source src="/videos/index.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute text-white text-center text-[75px] md:text-[115px] font-bold top-[50%] left-[50%] md:left-[28%] transform w-full -translate-x-1/2 -translate-y-1/2 font-[Poppins] flex flex-col">
                            <span className="strokeme">Viaja sin límites</span>
                            <div className="flex justify-center w-full md:w-2/3 md:ms-20">
                                <Link to="/autos" className="bg-transparent border-2 border-blue-500 hover:bg-blue-500 transition-all duration-300 text-white px-8 py-3 rounded-md text-3xl font-normal mt-10">
                                    Explora mas
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20 px-4 md:px-20 mt-40">
                {/* Empresas que confían */}
                <div className="mb-28">
                    <h2 className="text-4xl font-bold text-center mb-16 font-[Poppins]">Empresas que confían en nosotros</h2>
                    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-20">
                        <img src="/images/empresas/cocacola.png" alt="cocacola logo" className="h-40 grayscale hover:grayscale-0 transition-all duration-300" />
                        <img src="/images/empresas/shell.png" alt="shell logo" className="h-40 grayscale hover:grayscale-0 transition-all duration-300" />
                        <img src="/images/empresas/mercadoLibre.jpg" alt="mercado libre logo" className="h-40 grayscale hover:grayscale-0 transition-all duration-300" />
                        <img src="/images/empresas/spotify.png" alt="spotify logo" className="h-40 grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                </div>

                {/* Reseñas de clientes */}
                <div className="mb-28">
                    <h2 className="text-4xl font-bold text-center mb-16 font-[Poppins]">Lo que dicen nuestros clientes</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img src="/images/avatars/cliente1.png" alt="Cliente 1" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h3 className="font-bold">Mario García</h3>
                                    <div className="flex text-yellow-400">
                                        ★★★★★
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600">&quot;Excelente servicio, los autos están en perfectas condiciones y el proceso de alquiler fue muy sencillo. ¡Totalmente recomendado!&quot;</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img src="/images/avatars/cliente2.png" alt="Cliente 2" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h3 className="font-bold">Carlos Rodríguez</h3>
                                    <div className="flex text-yellow-400">
                                        ★★★★★
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600">&quot;La mejor opción para alquilar un auto. El personal es muy amable y profesional. Los precios son muy competitivos.&quot;</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <img src="/images/avatars/cliente3.png" alt="Cliente 3" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h3 className="font-bold">Ana Martínez</h3>
                                    <div className="flex text-yellow-400">
                                        ★★★★★
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600">&quot;Mi experiencia con Drivium fue increíble. El auto estaba impecable y el servicio al cliente es excepcional. ¡Volveré a confiar en ellos!&quot;</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
