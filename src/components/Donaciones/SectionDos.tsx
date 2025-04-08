import Maria from "../../assets/img/Maria.png";
import Carlos from "../../assets/img/Carlos.png";
import Lucia from "../../assets/img/Lucia.png";

function SectionDos() {
    return (
        <div className="font-aristotelicaLight max-w-6xl mx-auto p-8 mb-20 mt-20">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between space-y-4">
                    <div className="text-6xl text-black">“</div>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Donar a la Fundación Artistas quiniento noventa y tres ha sido una experiencia sumamente enriquecedora. Ver cómo mi contribución ayuda a que jóvenes artistas puedan contar con motivación para elaborar sus proyectos comunicativos me llena de orgullo.
                    </p>
                    <div className="text-6xl text-black self-end">”</div>
                    <div className="flex items-center space-x-3 mt-4">
                        <img src={Maria} alt="María" className="w-10 h-10 rounded-full" />
                        <div>
                            <h4 className="text-gray-800 font-bold">María P.</h4>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between space-y-4">
                    <div className="text-6xl text-black">“</div>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Donar a la Fundación Artistas quiniento noventa y tres ha sido una experiencia sumamente enriquecedora. Ver cómo mi contribución ayuda a que jóvenes artistas puedan contar con motivación para elaborar sus proyectos comunicativos me llena de orgullo.
                    </p>
                    <div className="text-6xl text-black self-end">”</div>
                    <div className="flex items-center space-x-3 mt-4">
                        <img src={Carlos} alt="Carlos" className="w-10 h-10 rounded-full" />
                        <div>
                            <h4 className="text-gray-800 font-bold">Carlos R.</h4>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between space-y-4">
                    <div className="text-6xl text-black">“</div>
                    <p className="text-gray-600 text-base leading-relaxed">
                        Lo que más me sorprendió de la Fundación es la transparencia con la que manejan los recursos y la dedicación que ponen en cada proyecto. Saber que mi aporte realmente marca la diferencia es invaluable.
                    </p>
                    <div className="text-6xl text-black self-end">”</div>
                    <div className="flex items-center space-x-3 mt-4">
                        <img src={Lucia} alt="Lucía" className="w-10 h-10 rounded-full" />
                        <div>
                            <h4 className="text-gray-800 font-bold">Lucía G.</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SectionDos;
