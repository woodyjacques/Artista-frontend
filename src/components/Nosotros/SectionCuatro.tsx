import CardCompromiso from "./components/CardCompromiso";
import CardInclusividad from "./components/CardInclusividad";
import CardInnovacion from "./components/CardInnovacion";
import CardRespeto from "./components/CardRespeto";
import CardSolidaridad from "./components/CardSolidaridad";
import CardTransparencia from "./components/CardTransparencia";

function SectionCuatro() {
    return (
        <div className="font-aristotelicaLight grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 mx-auto justify-items-center">
            <CardSolidaridad/>
            <CardInclusividad />
            <CardInnovacion/>
            <CardTransparencia />
            <CardRespeto />
            <CardCompromiso/>
        </div>
    );
}

export default SectionCuatro;
