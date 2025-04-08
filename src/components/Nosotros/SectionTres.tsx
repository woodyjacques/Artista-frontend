import SectrionTresContact from "../../assets/img/SectrionTresContact.png"

function SectionTres() {
    return (
        <div>
            <div className="font-aristotelicaLight bg-white py-10 lg:py-20">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                    <div className="rounded-lg overflow-hidden">
                        <img src={SectrionTresContact} alt="Artistas tocando instrumentos" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>

                    <div className="text-left px-4 sm:px-8 lg:px-0">
                        <h3 className="text-red-700 font-bold text-lg sm:text-xl lg:text-2xl mb-4">
                            Cómo Empezó Todo
                        </h3>
                        <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                            La historia de la Fundación Artistas 593
                        </h2>
                        <p className=" text-gray-600 text-base sm:text-lg lg:text-xl mb-6 text-justify custom-line-spacing">
                            La Fundación Artistas nació en octubre del dos mil vente y tres, bajo acuerdo ministerial  (MCYP-MCYP-A) del Ministerio de Cultura del Ecuador, impulsada por la visión de un grupo de personas y colaboradores comprometidos con mejorar la calidad de vida de aquellos creadores que, a pesar de su talento, enfrentan desafíos económicos y sociales. En nuestros primeros meses, identificamos una realidad crítica: muchos artistas independientes carecen de los recursos necesarios para desarrollar su arte y llevar sus proyectos a cabo, mientras que otros luchan por cubrir sus necesidades básicas de salud y educación.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionTres;