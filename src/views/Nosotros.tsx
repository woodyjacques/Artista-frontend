import Footer from "../components/Home/Footer";
import SectionCero from "../components/Home/SectionCero";
import SectionUno from "../components/Home/SectionUno";
import Header from "../components/Nosotros/Header";
import SectionCinco from "../components/Nosotros/SectionCinco";
import SectionCuatro from "../components/Nosotros/SectionCuatro";
import SectionDos from "../components/Nosotros/SectionDos";
import SectionTres from "../components/Nosotros/SectionTres";
import WhatsAppFloatingButton from "../components/whatsapp";

function Nosotros() {
    return (
        <div>
            <Header
                title="Un Compromiso con el Arte y los Artistas del Ecuador"
                subtitle="Nuestra historia"
            />
            <SectionCinco />
            <SectionCuatro />
            <SectionUno />
            <SectionTres />
            <SectionDos />
            <SectionCero />
            <Footer />
            <WhatsAppFloatingButton />
        </div>
    );
}

export default Nosotros;