import correoWeb from "../../assets/img/CorreoWeb.png";
import telefono from "../../assets/img/Telefono.png";
import paginaWeb from "../../assets/img/paginWeb.png";
import direccion from "../../assets/img/direccion.png";

function SectionTres() {
    return (
        <div className=" font-aristotelicaLight mb-20 top-20 max-w-7xl mx-auto p-8 flex flex-col lg:flex-row gap-12">

            <div className="flex flex-col gap-6 lg:w-1/3">

                <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
                    <img src={correoWeb} alt="Correo electrónico" className="w-12 h-12 rounded-full p-2" />
                    <div>
                        <h4 className="text-gray-800 font-bold">Correo electrónico</h4>
                        <p className="text-gray-600 text-sm font-quicksand">fundacion593@hotmail.com</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
                    <img src={telefono} alt="Teléfono" className="w-12 h-12 rounded-full p-2" />
                    <div>
                        <h4 className="text-gray-800 font-bold">Teléfono</h4>
                        <p className="text-gray-600 text-sm font-quicksand">+593 987654334</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
                    <img src={direccion} alt="Dirección" className="w-12 h-12 rounded-full  p-2" />
                    <div>
                        <h4 className="text-gray-800 font-bold">Dirección</h4>
                        <p className="text-gray-600 text-sm font-quicksand">Ruta 36 km, Los Cerrillos, Canelones</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
                    <img src={paginaWeb} alt="Página Web" className="w-12 h-12 rounded-full p-2" />
                    <div>
                        <h4 className="text-gray-800 font-bold">Página Web</h4>
                        <p className="text-gray-600 text-sm font-quicksand">www.fundacion593.ec</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 lg:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900">Enviar mensaje</h3>
                <p className="text-gray-600 text-sm mt-2">
                    ¡Estamos encantados de saber de ti! Por favor, utiliza este formulario para ponerte en contacto con nosotros.
                    Ya sea que tengas preguntas o comentarios.
                </p>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    
                    <input
                        type="text"
                        placeholder="Nombre Completo"
                        className="border border-gray-300 rounded-lg p-3 text-sm w-full"
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="border border-gray-300 rounded-lg p-3 text-sm w-full"
                    />
                    <input
                        type="tel"
                        placeholder="Teléfono"
                        className="border border-gray-300 rounded-lg p-3 text-sm w-full"
                    />
                    <input
                        type="text"
                        placeholder="Asunto"
                        className="border border-gray-300 rounded-lg p-3 text-sm w-full"
                    />
                    <textarea
                        placeholder="Mensaje"
                        className="border border-gray-300 rounded-lg p-3 text-sm w-full md:col-span-2"
                    ></textarea>

                    <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition w-full md:w-auto md:col-span-1 md:col-start-1">
                        Enviar
                    </button>
                </form>

            </div>
        </div>
    );
}

export default SectionTres;
