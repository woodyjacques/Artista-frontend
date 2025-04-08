import surgical from "../../assets/img/surgical.jpg";
import smiling from "../../assets/img/smiling.jpg";
import land from "../../assets/img/land.jpg";
import friend from "../../assets/img/friend.jpg";

function SectionDos() {
    return (
        <section className="font-aristotelicaLight text-white p-20 rounded-3xl max-w-7xl mx-auto my-20  relative bg-cover bg-center">
            <div className="absolute inset-0  rounded-3xl"></div>
            <div className="relative z-10 text-center">
                <h3 className="text-red-800 text-xl font-bold mb-4">¡Conoce cómo estamos haciendo la diferencia!</h3>
                <h2 className="text-4xl font-bold mb-10 text-black">Nuestras Campañas de Apoyo Artístico</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="bg-white shadow-md p-6 rounded-lg  flex flex-col md:flex-row items-center">
                    <img src={friend} alt="Rutas del Arte" className="rounded-lg mb-4 md:mb-0 md:mr-6 object-cover h-40 w-48" />
                    <div className="flex flex-col flex-grow">
                        <h4 className="text-xl font-bold mb-2 text-black">"Rutas del Arte"</h4>
                        <p className="text-gray-700 mb-4">
                            Donación de vente furgonetas para proyectos comunitarios artísticos
                        </p>
                        <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                            <div className="bg-red-800 h-2.5 rounded-full w-2/5"></div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 font-bold">Beneficiados: nueve</p>
                        <div className="flex gap-4 mt-auto">
                            <a href="https://wa.me/593993923690" target="_blank" rel="noopener noreferrer">
                                <button className="bg-red-800 text-white py-2 px-4 rounded-full font-semibold hover:bg-red-700 transition font-bold">
                                    Ser beneficiario
                                </button>
                            </a>
                            <button className="bg-blue-800 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-900 transition font-bold">
                                Ver
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
                    <img src={smiling} alt="Techo Creativo" className="rounded-lg mb-4 md:mb-0 md:mr-6 object-cover h-40 w-48" />
                    <div className="flex flex-col flex-grow">
                        <h4 className="text-xl font-bold mb-2 text-black">"Techo Creativo"</h4>
                        <p className="text-gray-700 mb-4">
                            Donación de ciento cicuenta viviendas prefabricadas para artistas de bajos recursos.
                        </p>
                        <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                            <div className="bg-red-800 h-2.5 rounded-full w-2/5"></div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 font-bold">Beneficiados: nueve</p>
                        <div className="flex gap-4 mt-auto">
                            <a href="https://wa.me/593993923690" target="_blank" rel="noopener noreferrer">
                                <button className="bg-red-800 text-white py-2 px-4 rounded-full font-semibold hover:bg-red-700 transition">
                                    Ser beneficiario
                                </button>
                            </a>
                            <button className="bg-blue-800 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-900 transition">
                                Ver
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
                    <img src={land} alt="Espacios para Soñar" className="rounded-lg mb-4 md:mb-0 md:mr-6 object-cover h-40 w-48" />
                    <div className="flex flex-col flex-grow">
                        <h4 className="text-xl font-bold mb-2 text-black">"Espacios para Soñar"</h4>
                        <p className="text-gray-700 mb-4">
                            Donación de cuatro cientos terrenos para artistas de alta vulnerabilidad.
                        </p>
                        <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                            <div className="bg-red-800 h-2.5 rounded-full w-2/5"></div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 font-bold">Beneficiados: nueve</p>
                        <div className="flex gap-4 mt-auto">
                            <a href="https://wa.me/593993923690" target="_blank" rel="noopener noreferrer">
                                <button className="bg-red-800 text-white py-2 px-4 rounded-full font-semibold hover:bg-red-700 transition">
                                    Ser beneficiario
                                </button>
                            </a>
                            <button className="bg-blue-800 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-900 transition">
                                Ver
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center">
                    <img src={surgical} alt="Voces que sanan" className="rounded-lg mb-4 md:mb-0 md:mr-6 object-cover h-40 w-96" />
                    <div className="flex flex-col flex-grow">
                        <h4 className="text-xl font-bold mb-2 text-black">"Voces que sanan"</h4>
                        <p className="text-gray-700 mb-4">
                            Donación de cien cirugías para artistas con problemas en sus cuerdas vocales.
                        </p>
                        <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                            <div className="bg-red-800 h-2.5 rounded-full w-2/5"></div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 font-bold">Beneficiados: nueve</p>
                        <div className="flex gap-4 mt-auto">
                            <a href="https://wa.me/593993923690" target="_blank" rel="noopener noreferrer">
                                <button className="bg-red-800 text-white py-2 px-4 rounded-full font-semibold hover:bg-red-700 transition">
                                    Ser beneficiario
                                </button>
                            </a>
                            <button className="bg-blue-800 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-900 transition">
                                Ver
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionDos;
