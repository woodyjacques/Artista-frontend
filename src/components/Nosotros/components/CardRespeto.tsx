import young from "../../../assets/img/young.jpg";
import respeto from "../../../assets/img/respeto.png";

function CardRespeto() {
    return (
        <div
            className="mb-10 relative bg-cover bg-center rounded-2xl w-80 h-96 flex items-center justify-center"
            style={{ backgroundImage: `url(${young})` }}
        >
            <div className="absolute inset-0 bg-blue-900 opacity-80 rounded-2xl z-0"></div>

            <div className="absolute top-5 text-white text-2xl z-10">
                <img className="w-16 h-16 rounded-full" src={respeto} alt="" />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-64 h-72 flex flex-col justify-center items-center z-20 -mb-32">
                <h3 className="text-2xl font-semibold mb-2">Respeto</h3>
                <p className="text-gray-700 text-lg">
                    Valorar y respetar la diversidad de expresiones artísticas y las circunstancias personales de los artistas, promoviendo un trato digno y equitativo para todos
                </p>
            </div>
        </div>
    );
}

export default CardRespeto;