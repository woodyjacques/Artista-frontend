import SectionCinco from "../components/Donaciones/SectionCinco";
import SectionCuatro from "../components/Donaciones/SectionCuatro";
import SectionDos from "../components/Donaciones/SectionDos";
import SectionTres from "../components/Donaciones/SectionTres";
import Footer from "../components/Home/Footer";
import SectionCero from "../components/Home/SectionCero";
import SectionUno from "../components/Home/SectionUno";
import Header from "../components/Nosotros/Header";
import WhatsAppFloatingButton from "../components/whatsapp";

function Donaciones() {
    return (
        <div>
            <Header
            title="Dona y Sé Parte de la"
            subtitle="Transformación"
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

export default Donaciones;