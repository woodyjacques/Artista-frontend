import logoColor from "../../assets/img/logoColor.png";
import chicaTambora from "../../assets/img/chicaTambora.jpg";

import apoyoIntegral from "../../assets/img/apoyoIntegral.png";
import bienestarSeguridad from "../../assets/img/bienestarSeguridad.png";
import comunidad from "../../assets/img/comunidad.png";

function SectionSiete() {
    return (
        <div className="font-aristotelicaLight  bg-white py-20">
            <div className="container mx-auto text-center">
                <div className="mb-10">
                    <img src={logoColor} alt="Logo Artistas 593" className="mx-auto h-32" />
                </div>

                <h2 className="text-4xl md:text-2xl font-bold text-red-800 mb-8">
                    Potencia tu carrera
                </h2>
                <h3 className="font-quicksand text-6xl font-bold text-black mb-16">
                    Club de Artistas 593
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

                    <div className="relative rounded-lg overflow-hidden">
                        <img src={chicaTambora} alt="Apoyo Integral" className="rounded-lg w-full h-64 object-cover" />
                        <div className="w-[90%] rounded-lg p-6 bg-white shadow-lg mx-auto -mt-20 z-10 relative text-left">
                            <div className="rounded-lg -mt-16 bg-yellow-500 p-6 mb-8 w-24 h-24">
                                <img src={apoyoIntegral} alt="" className="w-full h-full object-contain" />
                            </div>
                            <h4 className="text-2xl mb-4">Apoyo Integral para tu Desarrollo Artístico</h4>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden">
                        <img src={chicaTambora} alt="Bienestar" className="rounded-lg w-full h-64 object-cover" />
                        <div className="w-[90%] rounded-lg p-6 bg-white shadow-lg mx-auto -mt-20 z-10 relative text-left">
                            <div className="rounded-lg -mt-16 bg-blue-900 p-6 mb-8 w-24 h-24">
                                <img src={bienestarSeguridad} alt="" className="w-full h-full object-contain" />
                            </div>
                            <h4 className="text-2xl mb-4">Bienestar y Seguridad Garantizados</h4>
                        </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden">
                        <img src={chicaTambora} alt="Comunidad" className="rounded-lg w-full h-64 object-cover" />
                        <div className="w-[90%] rounded-lg p-6 bg-white shadow-lg mx-auto -mt-20 z-10 relative text-left">
                            <div className="rounded-lg -mt-16 bg-blue-900 p-6 mb-8 w-24 h-24">
                                <img src={comunidad} alt="" className="w-full h-full object-contain" />
                            </div>
                            <h4 className="text-2xl mb-4">Comunidad y <br />Conexiones</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SectionSiete;
