import tv1 from "../../assets/img/tv1.png";
import tv2 from "../../assets/img/tv2.png";

function SectionCinco() {
    return (
        <div className="font-aristotelicaLight text-center py-8 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16">Membresías del Club</h2>
            <div className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-12 relative z-10 -mt-20">

                <div className="bg-white relative max-w-xl w-full rounded-lg border border-gray-200 p-8 md:p-12 shadow-lg min-h-[400px] md:min-h-[600px] text-left transform md:translate-y-40">
                    <h3 className="absolute top-12 left-0 w-full md:w-2/3 bg-yellow-500 text-black text-lg font-semibold p-4 rounded-r-lg">
                        <span className="inline-block mr-2"><img src={tv2} alt="" className="w-8 h-8" /></span>Membresía Básica
                    </h3>

                    <div className="pt-16 md:pt-20 text-center mt-5">
                        <p className="text-gray-700 mt-4">
                            Ideal para aquellos artistas que buscan apoyo esencial y acceso a beneficios fundamentales.
                        </p>
                        <ul className="list-none mt-4 space-y-2 text-left inline-block">
                            <li>• Beneficios y descuentos en Servicios de Salud</li>
                            <li>• Reembolsos de Recetas médicas y exámenes médicos</li>
                            <li>• Acceso Prioritario a Talleres y Capacitaciones</li>
                            <li>• Beneficios en Producción Artística</li>
                            <li>• Servicios Funerarios Gratuitos</li>
                            <li>• Servicios de Hospedaje</li>
                            <li>• Beneficios en Medicina Estética</li>
                            <li>• Beneficios en Gimnasio</li>
                        </ul>

                        <a href="https://wa.me/593993923690" target="_blank" rel="noopener noreferrer">
                            <button className="font-bold bg-yellow-500 text-black mt-6 py-3 px-4 w-full md:w-2/3 rounded-full hover:bg-yellow-600 mx-auto block">
                                Quiero afiliarme
                            </button>
                        </a>
                    </div>
                </div>

                <div className="bg-white relative max-w-xl w-full rounded-lg border border-gray-200 p-8 md:p-12 shadow-lg min-h-[400px] md:min-h-[600px] text-left transform md:translate-y-40">
                    <h3 className="absolute top-12 left-0 w-full md:w-2/3 bg-red-700 text-white text-lg font-semibold p-4 rounded-r-lg">
                        <span className="inline-block mr-2"><img src={tv1} alt="" className="w-8 h-8" /></span> Membresía GOLD
                    </h3>

                    <div className="pt-16 md:pt-20 text-center mt-5">
                        <p className="text-gray-700 mt-4">
                            La Membresía Gold del Club de Artistas ofrece todo lo que la Membresía Básica brinda, además de beneficios exclusivos:
                        </p>
                        <ul className="list-none mt-4 space-y-2 text-left inline-block">
                            <li>• Apoyo en Viajes Nacionales e Internacionales</li>
                            <li>• Servicios Domésticos</li>
                            <li>• Servicios de Hospedaje</li>
                            <li>• Beneficios en Medicina Estética</li>
                            <li>• Acceso a Complejo Turístico</li>
                            <li>• Beneficios para tu Mascota</li>
                            <li>• Víveres Mensuales</li>
                            <li>• Tarjetas BONO</li>
                        </ul>

                        <a href="https://wa.me/593993923690" target="_blank" rel="noopener noreferrer">
                            <button className="font-bold bg-red-700 text-white mt-6 py-3 px-4 w-full md:w-2/3 rounded-full hover:bg-red-800 mx-auto block">
                                Quiero afiliarme
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionCinco;
