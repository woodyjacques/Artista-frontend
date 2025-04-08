import { useEffect, useState } from "react";
import SectionCinco from "../components/Campañas/SectionCinco";
import SectionCuatro from "../components/Campañas/SectionCuatro";
import SectionDos from "../components/Campañas/SectionDos";
import SectionTres from "../components/Campañas/SectionTres";
import Footer from "../components/Home/Footer";
import SectionCero from "../components/Home/SectionCero";
import SectionUno from "../components/Home/SectionUno";
import Header from "../components/Nosotros/Header";
import { obtenercampañas } from "../validation/get";
import WhatsAppFloatingButton from "../components/whatsapp";

function Campañas() {
    const [campaña, setCampaña] = useState<
        {
            id: number;
            titulo: string;
            subtitulo: string;
            descripcion: string;
            beneficios: string[];
            imagenUno: string;
            imagenDos: string;
            icono: string;
            link: string;
        }[]
    >([]);

    useEffect(() => {
        obtenercampañas()
            .then((data) => {
                setCampaña(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Header
                title="Campañas Solidarias para el Arte"
                subtitle="Transformando vidas"
            />
            <SectionUno />

            {campaña.map((item, index) =>
                index % 2 === 0 ? (
                    <div key={item.id} className="mb-8">
                        <SectionCinco
                            icono={item.icono}
                            imagen2={item.imagenDos}
                            title={item.titulo}
                            subtitle={item.subtitulo}
                            description={item.descripcion}
                        />
                        <SectionCuatro
                            img1={item.imagenUno}
                            beneficio1={item.beneficios[0] || ""}
                            beneficio2={item.beneficios[1] || ""}
                            beneficio3={item.beneficios[2] || ""}
                        />
                    </div>
                ) : (
                    <div key={item.id} className="mb-8">
                        <SectionTres
                            homeCampaña={item.icono}
                            img2={item.imagenDos}
                            title={item.titulo}
                            subtitle={item.subtitulo}
                            description={item.descripcion}
                        />
                        <SectionDos
                            img1={item.imagenUno}
                            beneficio1={item.beneficios[0] || ""}
                            beneficio2={item.beneficios[1] || ""}
                            beneficio3={item.beneficios[2] || ""}
                        />
                    </div>
                )
            )}

            <SectionCero />
            <Footer />
            <WhatsAppFloatingButton />
        </div>
    );
}

export default Campañas;
