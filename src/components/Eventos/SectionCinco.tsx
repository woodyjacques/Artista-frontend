import chica from "../../assets/img/chicaTambora.jpg";

function SectionCinco() {
    return (
        <div className="font-aristotelicaLight grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">

            <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
                <img src={chica} alt="Evento musical" className="rounded-t-lg w-full h-56 object-cover" />

                <div className="flex space-x-3 mt-5">
                    <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1.5 rounded-full">Arte</span>
                    <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1.5 rounded-full">Gratis</span>
                </div>

                <h3 className="text-gray-800 text-xl mt-3">
                    Exposición "Colores del Alma" en Quito
                </h3>

                <div className="mt-5">
                    <a href="#" className="text-yellow-400 text-base flex items-center font-bold">
                        Saber más
                        <span className="ml-1">→</span>
                    </a>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
                <img src={chica} alt="Evento musical" className="rounded-t-lg w-full h-56 object-cover" />

                <div className="flex space-x-3 mt-5">
                    <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1.5 rounded-full">Arte</span>
                    <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1.5 rounded-full">Gratis</span>
                </div>

                <h3 className="text-gray-800 text-xl mt-3">
                    Exposición "Colores del Alma" en Quito
                </h3>

                <div className="mt-5">
                    <a href="#" className="text-blue-600 text-base flex items-center font-bold">
                        Saber más
                        <span className="ml-1">→</span>
                    </a>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
                <img src={chica} alt="Evento musical" className="rounded-t-lg w-full h-56 object-cover" />

                <div className="flex space-x-3 mt-5">
                    <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1.5 rounded-full">Arte</span>
                    <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1.5 rounded-full">Gratis</span>
                </div>

                <h3 className="text-gray-800 text-xl mt-3">
                    Exposición "Colores del Alma" en Quito
                </h3>

                <div className="mt-5">
                    <a href="#" className="text-pink-600 text-base flex items-center font-bold">
                        Saber más
                        <span className="ml-1">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SectionCinco;
