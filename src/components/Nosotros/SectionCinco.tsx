import mision from "../../assets/img/mision.png";
import vision from "../../assets/img/vision.png";

function SectionCinco() {
    return (
        <div className="font-aristotelicaLight flex justify-center items-center py-16 px-4 bg-gray-50">
            <div className="max-w-7xl bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-8">

                <div className="flex-1 text-center">
                    <img src={mision} alt="Misión" className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Misión</h3>
                    <p className="text-gray-700 text-xl custom-line-spacing">
                        Apoyar a los artistas vulnerables de nuestro país, mejorando su calidad de vida a través de proyectos sociales, donaciones, recursos, capacitaciones y oportunidades que fomenten su desarrollo, promoviendo la autosustentabilidad y el crecimiento del arte como motor de transformación social en el Ecuador.
                    </p>
                </div>

                <div className="flex-1 text-center">
                    <img src={vision} alt="Visión" className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-red-800 mb-4">Visión</h3>
                    <p className="text-gray-700 text-xl custom-line-spacing">
                        Ser un referente en el desarrollo y sostenibilidad del arte en Ecuador, creando un entorno donde todos los artistas tengan acceso a las herramientas necesarias para prosperar y contribuir a la cultura del país.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SectionCinco;
