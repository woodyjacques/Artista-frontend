import { FacebookSvg, TwitterSvg, InstagramSvg, LinkedInSvg } from "../../assets/svg/RedesFooter";
import logo from "../../assets/img/logo.png"

function Footer() {
    return (
        <div className="font-aristotelicaLight text-[1.1em]">
            <footer className="bg-blue-900 text-white p-10 flex flex-col lg:flex-row justify-between">
                <div className=" font-quicksand flex-1 min-w-[200px] m-2">
                    <h3 className="font-bold mb-4"><img src={logo} alt="" /></h3>
                    <p>exclusive@gmail.com<br />
                        +88015-88898-9999</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-white text-lg"><FacebookSvg /></a>
                        <a href="#" className="text-white text-lg"><InstagramSvg /></a>
                        <a href="#" className="text-white text-lg"><TwitterSvg /></a>
                        <a href="#" className="text-white text-lg"><LinkedInSvg /></a>
                    </div>
                </div>
                <div className="flex-1 min-w-[200px] m-2">
                    <h3 className="font-bold mb-4">Campañas</h3>
                    <ul className="list-none p-0">
                        <li className="mb-2"><a href="#" className="text-white hover:underline">Rutas del arte</a></li>
                        <li className="mb-2"><a href="#" className="text-white hover:underline">Techo creativo</a></li>
                        <li className="mb-2"><a href="#" className="text-white hover:underline">Espacios para Soñar</a></li>
                        <li className="mb-2"><a href="#" className="text-white hover:underline">Voces que sanan</a></li>
                    </ul>
                </div>
                <div className="flex-1 min-w-[200px] m-2">
                    <h3 className="font-bold mb-4">Menú</h3>
                    <ul className="list-none p-0">
                        <li className="mb-2"><a href="#" className="text-white hover:underline">Inicio</a></li>
                        <li className="mb-2"><a href="#" className="text-white hover:underline">Nosotros</a></li>
                        <li className="mb-2"><a href="#" className="text-white hover:underline">Campañas</a></li>
                        <li className="mb-2"><a href="#" className="text-white hover:underline">Eventos</a></li>
                        <li className="mb-2"><a href="#" className="text-white hover:underline">Donaciones</a></li>
                        <li className="mb-2"><a href="#" className="text-white hover:underline">Contacto</a></li>
                    </ul>
                </div>
                <div className="flex-1 min-w-[200px] m-2">
                    <h3 className="font-bold mb-4">NEWSLETTER</h3>
                    <p>Suscríbete a nuestro boletín semanal y recibe actualizaciones por correo electrónico.</p>
                    <div className="mt-4 flex items-center border border-gray-400 rounded overflow-hidden w-full max-w-md">
                        <input
                            type="email"
                            placeholder="Ingrese el correo electrónico"
                            className="p-3 flex-grow text-white bg-blue-900 outline-none w-3/4"
                        />
                        <button className="bg-yellow-400 text-black p-3 font-bold w-1/4 h-full">
                            Enviar
                        </button>
                    </div>
                </div>
            </footer>
            <div className="font-quicksand text-white text-center p-5 border-t border-white text-sm bg-blue-900">
                &copy; Copyright 2024. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;
