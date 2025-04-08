import chicaTambora from "../../assets/img/chicaTambora.jpg";
import img1Campaña from "../../assets/img/img1Campaña.png";
import friend from "../../assets/img/friend.jpg";
import cantantes from "../../../src/assets/img/cant.jpg";

function SectionTres() {
    return (
        <div className="font-aristotelicaLight max-w-7xl mx-auto p-8">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img src={chicaTambora} alt="Evento 1" className="w-full h-48 object-cover" />
                </div>

                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img src={friend} alt="Evento 2" className="w-full h-48 object-cover" />
                </div>

                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img src={img1Campaña} alt="Evento 3" className="w-full h-48 object-cover" />
                </div>

                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img src={cantantes} alt="Evento 4" className="w-full h-48 object-cover" />
                </div>
            </div>
        </div>
    );
}

export default SectionTres;
