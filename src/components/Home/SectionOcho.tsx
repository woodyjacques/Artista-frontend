
import SectionOcho1 from "../../assets/img/SectionOcho.png";

function SectionOcho() {
    return (
        <div className=" font-aristotelicaLight py-10 lg:py-20">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                <div className="rounded-lg overflow-hidden">
                    <img src={SectionOcho1} alt="Artistas tocando instrumentos" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                </div>

                <div className="text-left px-4 sm:px-8 lg:px-0">
                    <h3 className="text-red-700 font-bold text-lg sm:text-xl lg:text-2xl mb-4">
                        Apoyo Integral para el Desarrollo del Arte en Ecuador
                    </h3>
                    <h2 className=" font-quicksand text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                        Fundación Artistas 593
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed text-justify custom-line-spacing">
                        La Fundación Artistas, creada en octubre, tiene como misión mejorar la calidad de vida de los artistas vulnerables en Ecuador. A través de proyectos de capacitación, apoyos económicos y una red de solidaridad, buscamos que el talento artístico florezca sin limitaciones.
                        En nuestro primer año, hemos crecido enfrentando desafíos internos, implementando mejoras, y apoyando a artistas en la realización de sus proyectos, estudios y bienestar. Seguimos comprometidos con hacer del arte una fuerza transformadora y accesible para todos los creadores del país.
                    </p>

                    <button className=" font-bold bg-red-800 text-white px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 mt-10">
                        Saber más
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SectionOcho;
