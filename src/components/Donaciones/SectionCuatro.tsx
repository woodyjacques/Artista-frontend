import corazon from "../../assets/img/corazon.png";

function SectionCuatro() {
    return (
        <div className="font-aristotelicaLight max-w-7xl mx-auto p-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 -mb-52">
            <div className="lg:w-1/2 space-y-4">
                <p className="text-red-800 font-semibold text-2xl">Tu Donación Hace la Diferencia</p>
                <h2 className="text-4xl font-bold text-gray-900">Apoya el Arte, Transforma Vidas</h2>
                <p className="text-gray-700 text-lg leading-relaxed custom-line-spacing">
                    Al donar a la Fundación Artistas quiniento noventa y tres, no solo ayudas a impulsar proyectos artísticos, sino que también contribuyes a mejorar las vidas de cientos de artistas en situación de vulnerabilidad.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed custom-line-spacing">
                    Tus aportes permiten la creación de oportunidades, el acceso a recursos vitales como salud, educación y vivienda, y fomentan el desarrollo cultural en nuestras comunidades. ¡Sé parte del cambio que fortalece el arte y transforma vidas!
                </p>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <img src={corazon} alt="Manos sosteniendo corazones" className="w-full h-auto max-w-[600px]" />
            </div>
        </div>
    );
}

export default SectionCuatro;
