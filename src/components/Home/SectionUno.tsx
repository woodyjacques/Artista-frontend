import young from "../../assets/img/young.jpg";

function SectionUno() {
    return (
        <section className="font-aristotelicaLight text-white px-32 py-20 rounded-3xl max-w-[96%] mx-auto my-20 shadow-2xl relative bg-cover bg-center" style={{ backgroundImage: `url(${young})` }}>
            <div className="absolute inset-0 bg-blue-900 bg-opacity-85 rounded-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="md:w-2/3 order-2 md:order-1 mt-8 md:mt-0">
                    <h2 className="text-4xl font-bold mb-4">Tu Aporte Transforma Vidas</h2>
                    <p className="text-lg font-bold">
                        Cada donación nos ayuda a brindar apoyo a artistas que lo necesitan. Con tu ayuda, podemos ofrecer recursos, capacitación y oportunidades que impulsan el arte en Ecuador.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-16 right-8 z-10">
                <a href="https://wa.me/593993923690" target="_blank" rel="noopener noreferrer">
                    <button className="bg-yellow-400 text-black py-2 px-10 rounded-full font-bold text-base hover:bg-yellow-500 transition">
                        Donar ahora
                    </button>
                </a>
            </div>
        </section>
    );
}

export default SectionUno;
