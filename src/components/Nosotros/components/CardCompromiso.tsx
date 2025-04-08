
import young from "../../../assets/img/young.jpg";
import compromiso from "../../../assets/img/compromiso.png";

function CardCompromiso() {
    return (
        <div
            className="mb-10 relative bg-cover bg-center rounded-2xl w-80 h-96 flex items-center justify-center"
            style={{ backgroundImage: `url(${young})` }}
        >
            <div className="absolute inset-0 bg-red-900 opacity-80 rounded-2xl z-0"></div>

            <div className="absolute top-5 text-white text-2xl z-10">
                <img className="w-16 h-16 rounded-full" src={compromiso} alt="" />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-64 h-72 flex flex-col justify-center items-center z-20 -mb-32">
                <h3 className="text-2xl font-semibold mb-2">Compromiso</h3>
                <p className="text-gray-700 text-lg">
                    Cumplir con sus promesas y metas, garantizando que los beneficios y el apoyo lleguen de manera puntual y efectiva a quienes lo necesitan
                </p>
            </div>
        </div>
    );
}

export default CardCompromiso;