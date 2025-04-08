import SectionCinco from "../components/Eventos/SectionCinco";
import SectionCuatro from "../components/Eventos/SectionCuatro";
import SectionDos from "../components/Eventos/SectionDos";
import Footer from "../components/Home/Footer";
import SectionCero from "../components/Home/SectionCero";
import SectionUno from "../components/Home/SectionUno";
import Header from "../components/Nosotros/Header";
import WhatsAppFloatingButton from "../components/whatsapp";

function Eventos() {

    return (
        <div>
            <Header
                title="Eventos y noticias"
                subtitle="Solidarios" />
            <SectionCuatro
                title="Potencia tu carrera"
                subtitle="Noticias y Actualidad Artística"
            />
            <SectionCinco />
            <SectionUno />
            <SectionCuatro
                title="¡No te Pierdas Nuestros Próximos Eventos!"
                subtitle="Actividades y Encuentros Culturales"
            />
            <SectionDos />
            <SectionUno />
            <SectionCero />
            <Footer />
            <WhatsAppFloatingButton />
        </div>
    );
}

export default Eventos;