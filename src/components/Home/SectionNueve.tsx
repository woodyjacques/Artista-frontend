import artist from "../../assets/img/artist.png";
import proyectos from "../../assets/img/proyectos.png";
import paiments from "../../assets/img/payments.png";

function SectionNueve() {
    return (
        <div className="font-aristotelicaLight bg-white py-16"> 
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"> 
                <div className="flex items-center bg-white shadow-lg rounded-lg p-8">
                    <div className="bg-yellow-500 p-8 rounded-md text-white"> 
                        <img src={artist} alt="" className='w-12 h-12' /> 
                    </div>
                    <div className="ml-8"> 
                        <p className="text-gray-600 font-bold text-xl">Artistas Apoyados</p> 
                        <p className="text-4xl font-bold text-gray-700 font-quicksand">+100</p> 
                    </div>
                </div>

                <div className="flex items-center bg-white shadow-lg rounded-lg p-8">
                    <div className="bg-blue-900 p-8 rounded-md text-white">
                        <img src={proyectos} alt="" className='w-12 h-12' />
                    </div>
                    <div className="ml-8">
                        <p className="text-gray-600 font-bold text-xl">Proyectos realizados</p>
                        <p className="text-4xl font-bold text-gray-700 font-quicksand">+25</p>
                    </div>
                </div>

                <div className="flex items-center bg-white shadow-lg rounded-lg p-8">
                    <div className="bg-red-800 p-8 rounded-md text-white">
                        <img src={paiments} alt="" className='w-12 h-12' />
                    </div>
                    <div className="ml-8">
                        <p className="text-gray-600 font-bold text-xl">Apoyos entregados</p>
                        <p className="text-4xl font-bold text-gray-700 font-quicksand">+$15,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionNueve;
