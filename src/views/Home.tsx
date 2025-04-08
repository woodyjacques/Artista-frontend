import Footer from "../../src/components/Home/Footer";
import SectionCero from "../../src/components/Home/SectionCero";
import SectionCinco from "../../src/components/Home/SectionCinco";
import SectionCuatro from "../../src/components/Home/SectionCuatro";
import SectionDos from "../../src/components/Home/SectionDos";
import SectionNueve from "../../src/components/Home/SectionNueve";
import SectionOcho from "../../src/components/Home/SectionOcho";
import SectionSeis from "../../src/components/Home/SectionSeis";
import SectionSiete from "../../src/components/Home/SectionSiete";
import SectionTres from "../../src/components/Home/SectionTres";
import SectionUno from "../../src/components/Home/SectionUno";
import Header from "../../src/components/Home/Header";
import WhatsAppFloatingButton from "../components/whatsapp";

function Home() {
    return (
        <div>
            <Header />
            <SectionNueve />
            <SectionOcho />
            <SectionUno />
            <SectionSiete />
            <SectionSeis />
            <SectionCinco />
            <SectionCuatro />
            <SectionTres />
            <SectionDos />
            <SectionUno />
            <SectionCero />
            <Footer />
            <WhatsAppFloatingButton />
        </div>
    );
}

export default Home;
