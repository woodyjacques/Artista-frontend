import { useState } from "react";
import SectionDiez1 from "../../assets/img/SectionDiez.png";
import { FacebookSvg, TwitterSvg, InstagramSvg, LinkedInSvg } from "../../assets/svg/RedesFooter";
import logo from "../../assets/img/logo.png"
import young from "../../assets/img/young.jpg";
import correo from "../../assets/img/Correo.png";
import what from "../../assets/img/WhatsApp.png";
import ubicaciones from "../../assets/img/Ubicaciones.png";
import contacto from "../../assets/img/contacto.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative rounded-b-3xl" style={{ backgroundImage: `url(${young})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className="rounded-b-3xl absolute inset-0 bg-blue-900 opacity-80 z-0"></div>

            <div className=" relative z-10">

                <div className="font-quicksand bg-transparent py-4">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0 md:flex hidden">

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-white">

                            <div className="flex items-center space-x-2">
                                <div className="bg-red-800 rounded-full p-2">
                                    <img src={correo} alt="" />
                                </div>
                                <span>correo@dominio.com</span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <div className="bg-red-800 rounded-full p-2">
                                    <img src={what} alt="" />
                                </div>
                                <span>+593 987676576</span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <div className="bg-red-800 rounded-full p-2">
                                    <img src={ubicaciones} alt="" />
                                </div>
                                <span>Dirección física</span>
                            </div>
                        </div>

                        <div className="flex space-x-4 text-white">
                            <a href="#" className="text-white text-lg"><FacebookSvg /></a>
                            <a href="#" className="text-white text-lg"><InstagramSvg /></a>
                            <a href="#" className="text-white text-lg"><TwitterSvg /></a>
                            <a href="#" className="text-white text-lg"><LinkedInSvg /></a>
                        </div>
                    </div>
                </div>

                <header className="font-aristotelicaLight  bg-transparent py-4">

                    <div className="w-full flex justify-between items-center">

                        <img src={logo} alt="Logo" className="md:hs-22 pl-4 ml-10" />

                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>

                        <nav className="hidden md:flex space-x-6 text-white text-lg md:text-xl ml-auto mr-10">
                            <a href="/" className="hover:text-yellow-400">Inicio</a>
                            <a href="/nosotros" className="hover:text-yellow-400">Nosotros</a>
                            <a href="/campañas" className="hover:text-yellow-400">Campañas</a>
                            <a href="/eventos" className="hover:text-yellow-400">Eventos</a>
                            <a href="/club" className="hover:text-yellow-400">Club de Artistas</a>
                            <a href="/donaciones" className="hover:text-yellow-400">Donaciones</a>
                        </nav>

                        <a href="/contacto" className="hidden md:flex bg-red-800 text-white rounded-l-full py-2 px-6 text-lg items-center hover:bg-red-600 pr-4">
                            <div className="flex items-center justify-center rounded-full h-8 w-8 mr-3">
                                <img src={contacto} alt="" />
                            </div>
                            <span>Contacto</span>
                        </a>
                    </div>

                    <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4 transition duration-300 ease-in-out px-4`}>
                        <nav className="flex flex-col space-y-4 text-white text-lg">
                            <a href="/" className="hover:text-yellow-400">Inicio</a>
                            <a href="/nosotros" className="hover:text-yellow-400">Nosotros</a>
                            <a href="/campañas" className="hover:text-yellow-400">Campañas</a>
                            <a href="/eventos" className="hover:text-yellow-400">Eventos</a>
                            <a href="/club" className="hover:text-yellow-400">Club de Artistas</a>
                            <a href="/donaciones" className="hover:text-yellow-400">Donaciones</a>
                        </nav>

                        <a href="#" className=" mt-4 bg-red-800 rounded-full text-white py-2 pl-2 pr-6 text-lg flex items-center justify-center hover:bg-red-600 ml-0">
                            <div className="flex items-center justify-center rounded-full h-8 w-8">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 18a7.978 7.978 0 013.674-6.72 7.993 7.993 0 0112.652 0A7.978 7.978 0 0120 18H4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span>Contacto</span>
                        </a>

                    </div>
                </header>

                <div className="font-aristotelicaBold rounded-b-lg font-arima relative bg-transparent text-white py-8 sm:py-12 lg:py-32">
                    <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 lg:px-0">

                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                            <h3 className="text-base sm:text-xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 whitespace-nowrap">
                                Apoyando el Talento Artístico de Ecuador
                            </h3>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-10 relative z-20">
                                <span className="relative">Transformando</span>
                                <span className="absolute -ml-8 sm:-ml-10 md:-ml-12 -top-8 sm:-top-10 md:-top-12 left-0 text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-transparent transform translate-x-1 sm:translate-x-2 md:translate-x-4 lg:translate-x-6 translate-y-1 sm:translate-y-2 md:translate-y-4 lg:translate-y-6 stroke-text hidden md:inline opacity-50">
                                    Transformando
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-12">
                                Brindamos apoyo integral a los artistas que más lo necesitan, ofreciendo recursos, capacitación y acompañamiento. Juntos, estamos transformando el arte en una poderosa herramienta de cambio social, cultural y económico en Ecuador.
                            </p>
                            <div className="flex flex-wrap gap-4 sm:gap-6">
                                <button className="bg-red-800 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-red-700 transition text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                                    Ver proyectos
                                </button>
                                <a href="https://wa.me/593993923690" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-yellow-500 text-black px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-yellow-600 transition text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                                        Hacer donación
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto overflow-hidden ml-10">
                                <img src={SectionDiez1} alt="Artista" className="w-full h-auto" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;

