import mujerCanto from "../../assets/img/mujerCanto.png";
import friend from "../../assets/img/friend.jpg";

function SeccionCuatro() {
    return (
        <div className="font-aristotelicaLight relative w-full min-h-[600px] md:min-h-[900px] flex flex-col md:flex-row items-end rounded-b-3xl overflow-hidden">

            <img
                src={friend}
                alt="Fondo de amigos"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-blue-900 bg-opacity-90 rounded-b-3xl"></div>

            <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center md:items-end h-full mb-4 md:mb-0">
                <img
                    src={mujerCanto}
                    alt="Mujer cantando"
                    className="w-1/2 sm:w-3/5 max-w-[550px] sm:max-w-[650px] md:max-w-[800px] transform rounded-b-lg"
                />
            </div>

            <div className="relative z-10 w-full md:w-1/2 text-center md:text-right flex flex-col justify-end h-full px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-24">

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">¿Por qué ser parte del Club?</h2>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-normal md:leading-loose lg:leading-[2] text-white mb-6 sm:mb-8">
                    Al unirte al Club de Artistas, accedes a una serie de beneficios diseñados<br />
                    específicamente para apoyar tu bienestar, desarrollo artístico y crecimiento personal.<br />
                    Nuestras membresías te brindan oportunidades únicas para mejorar tu salud, promover tu<br />
                    carrera y disfrutar de servicios exclusivos que harán una diferencia en tu vida artística.
                </p>

                <div className="relative z-10 flex justify-center md:justify-end">
                    <a href="https://wa.me/593993923690" target="_blank" rel="noopener noreferrer">
                        <button className="text-black font-bold bg-yellow-400 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-yellow-300 transition duration-300">
                            Ver las membresías
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SeccionCuatro;
