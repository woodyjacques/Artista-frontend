import SectionSeis1 from "../../assets/img/SectionSeis.png";

function SectionSeis() {
  return (
    <div className="font-aristotelicaLight bg-white py-10 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Únete al Club <br/>de Artistas 593
          </h2>
          <p className="custom-line-spacing text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8" style={{ lineHeight: "1.8" }}>
            En el Club de Artistas de la Fundación Artistas, ofrecemos dos tipos de membresías
            diseñadas para apoyar a nuestros miembros, brindándoles beneficios exclusivos que
            mejoran su bienestar y desarrollo artístico. ¡Forma parte de esta comunidad solidaria y
            accede a recursos únicos que te ayudarán a crecer como artista!
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={SectionSeis1} alt="Club de Artistas 593" className="w-full md:w-[150%] lg:w-[200%]" />
        </div>
      </div>
    </div>
  );
}

export default SectionSeis;
