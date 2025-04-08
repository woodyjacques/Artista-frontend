import SectionDos from "../components/Contacto/SectionDos";
import SectionTres from "../components/Contacto/SectionTres";
import Footer from "../components/Home/Footer";
import SectionCero from "../components/Home/SectionCero";
import SectionUno from "../components/Home/SectionUno";
import Header from "../components/Nosotros/Header";
import WhatsAppFloatingButton from "../components/whatsapp";

function Contacto() {
    return (
        <div>
            <Header
            title="Estamos aquí para ayudarte"
            subtitle="Contáctanos"
            />
            <SectionTres/>
            <SectionUno/>
            <SectionDos/>
            <SectionCero />
            <Footer />
            <WhatsAppFloatingButton />
        </div>
    );
}

export default Contacto;