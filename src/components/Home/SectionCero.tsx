import dollar from "../../assets/img/dollar.png";
import person from "../../assets/img/person.png";
import cora from "../../assets/img/cora.png";

function SectionCero() {
    return (
        <section className="font-aristotelicaLight bg-red-800 text-white py-20">
            <div className="max-w-6xl mx-auto px-4 grid gap-12 md:gap-16 grid-cols-1 md:grid-cols-3">
                <div className="flex flex-row items-center text-left gap-6">
                    <img src={person} alt="Impacto Real" className="w-16 h-16" />
                    <div>
                        <h3 className="font-bold text-xl">Impacto Real</h3>
                        <p className="text-base">Promovemos el arte</p>
                    </div>
                </div>
                <div className="flex flex-row items-center text-left gap-6">
                    <img src={cora} alt="Responsabilidad Social" className="w-16 h-16" />
                    <div>
                        <h3 className="font-bold text-xl">Responsabilidad Social</h3>
                        <p className="text-base">Proyectos que transforman vidas</p>
                    </div>
                </div>
                <div className="flex flex-row items-center text-left gap-6">
                    <img src={dollar} alt="Transparencia Financiera" className="w-16 h-16" />
                    <div>
                        <h3 className="font-bold text-xl">Transparencia Financiera</h3>
                        <p className="text-base">Gestión eficiente de recursos</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionCero;
