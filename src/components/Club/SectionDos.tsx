import { useEffect, useState } from "react";
import apoyo from "../../assets/img/Apoyo.png";
import manoTarjetaDerecha from "../../assets/img/manoTarjetaDerecha.png";
import young from "../../assets/img/young.jpg";
import { obtenerClubs } from "../../validation/get";

interface SectionTresProps2 {
    icon: string;
    title: string;
    description: string;
}

function SectionDos() {

    const [goldClubs, setGoldClubs] = useState<
        { id: number; titulo: string; descripcion: string; icono: string; membresia: string }[]
    >([]);
    useEffect(() => {
        obtenerClubs()
            .then((data) => {
                const goldFiltered = data.filter((club: any) => club.membresia === "Gold");
                setGoldClubs(goldFiltered);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="font-aristotelicaLight flex flex-col lg:flex-row bg-gray-100 p-8 rounded-lg shadow-md max-w-7xl mx-auto">

            <div className="flex-1 space-y-12 mt-20">
                {goldClubs.map((club) => (
                    <BenefitItem
                        key={club.id}
                        icon={club.icono || apoyo}
                        title={club.titulo}
                        description={club.descripcion}
                    />
                ))}
            </div>

            <div className="relative bg-blue-900 text-white p-8 rounded-lg flex flex-col items-start justify-center space-y-6 mt-8 lg:mt-0 lg:ml-8 lg:w-1/3 max-w-sm lg:max-w-md" style={{ backgroundImage: `url(${young})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-blue-900 opacity-80 rounded-lg z-0"></div>

                <h3 className="text-2xl font-bold z-10">Membresía GOLD</h3>
                <p className="text-left text-base leading-relaxed z-10">
                    La Membresía Gold te ofrece todo lo que la Membresía Básica brinda, además de una gama de beneficios exclusivos para enriquecer tu vida personal y profesional. ¡Descubre cómo puedes aprovechar al máximo tu membresía con estos beneficios adicionales!
                </p>
                <h4 className="text-3xl font-semibold z-10 font-quicksand">$120 anual</h4>

                <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition z-10"> <a href="https://wa.me/593993923690" target="_blank" rel="noopener noreferrer">Contratar ahora</a></button>
                <img src={manoTarjetaDerecha} alt="Tarjeta de Membresía" className="w-[500px] h-auto mt-4 self-center z-10" />
            </div>


        </div >
    );
}

function BenefitItem({ icon, title, description }: SectionTresProps2) {
    return (
        <div className="flex items-start space-x-4">
            <img src={icon} alt={title} className="rounded-full p-2 flex items-center justify-center w-20 h-18" />
            <div>
                <h4 className="text-xl font-bold text-gray-800">{title}</h4>
                <p className="text-gray-600 text-base mt-1">{description}</p>
            </div>
        </div>
    );
}

export default SectionDos;
