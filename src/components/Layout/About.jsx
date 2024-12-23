import Card from "../Card";
import bgAbout from "/st5.jpg";
import icon1 from "/icons/icon-service1.png";
import icon3 from "/icons/icon-garantia.png";
import icon2 from "/icons/icon-service.png";

const cardsData = [
  {
    icon: icon1,
    content:
      "Opciones ágiles y efectivas: Brindamos respuestas dentro de las 24 horas, según la complejidad del equipo afectado.",
  },
  {
    icon: icon2,
    content:
      "Atención 24/7: Estamos disponibles para responder rápidamente y resolver cualquier consulta que puedas tener.",
  },
  {
    icon: icon3,
    content:
      "Respaldo garantizado: Nuestros servicios cuentan con garantía para brindarte tranquilidad y confianza.",
  },
];
const About = () => {
  return (
    <>
      <section className="overflow-hidden w-full flex justify-center items-center bg-white  pt-1 pb-9 lg:pt-0 lg:pb-20 lg:-mt-6 2xl:">
        <ul className="z-50  w-full  relative flex justify-center px-3 items-center flex-wrap  gap-x-2 gap-y-5  lg:gap-0 lg:justify-evenly">
          {cardsData?.map((cardData, i) => (
            <Card key={i} cardData={cardData} />
          ))}
        </ul>
      </section>

      <section className="relative  w-full py-6 flex flex-col  justify-center items-center  overflow-hidden   lg:flex-row-reverse lg:items-center lg:px-3 lg:pb-12 lg:pt-12">
    
        <article className="relative z-50 w-full px-2  flex flex-col justify-start items-center text-balance gap-4 text-center py-[4%] lg:w-1/2  lg:px-9 xl:px-12 lg:pt-[2%] lg:rounded-lg md:max-w-[700px]  lg:max-w-[800px]  xl:gap-6 2xl:max-w-[900px]">
          <h6 className="text-primary text-4xl  font-medium font-title lg:text-primary lg:text-start lg:text-4xl xl:text-5xl 2xl:text-6xl">
          ¿Por qué elegir Xiaomi Service?
          </h6>
          <p className="text-gray text-balance text-sm font-semibold font-text2 lg:text-gray lg:text-start lg:text-base lg:pr-2 xl:pr-6  xl:text-lg 2xl:text-xl ">
          Somos expertos en el mantenimiento y reparación de dispositivos Xiaomi, ofreciendo soluciones precisas y de larga duración. Contamos con nuestro propio laboratorio, lo que nos permite atender desde ajustes simples hasta reparaciones complejas con total eficiencia. Nuestro compromiso es brindarte una experiencia excepcional, combinando rapidez, calidad y tecnología de última generación, aspectos que nos destacan en el sector. Al enfocarnos exclusivamente en equipos Xiaomi, conocemos a fondo cada modelo y sus procesos, asegurando un servicio especializado y personalizado para cada cliente.
          </p>
          <div className="flex justify-center mt-1 lg:justify-start xl:mt-2 lg:self-start ">
            <a
              href="https://www.grupolacomunidad.com.ar/products/xiaomi"
              target="_blank"
            >
              <button
                id="box-glass2"
                className="group bg-gradient-to-l from-primary via-gray to-gray text-stone-100 group  rounded-3xl font-semibold border border-stone-500  pl-4 pr-1 py-[1px]  flex justify-between items-center min-w-[170px] md:text-base  xl:w-[195px]  duration-500"
              >
                TIENDA
                <i class="bx bx-arrow-back rotate-[145deg] text-2xl h-7 w-7 md:h-8 md:w-8 rounded-full bg-stone-500 text-stone-100 flex justify-center items-center  2xl:text-3xl group-hover:rotate-[220deg]  duration-500 font-normal"></i>
              </button>
            </a>
          </div>
        </article>

        <figure className="w-full h-full mt-6 lg:w-1/2 lg:pl-6 lg:-mt-8 ">
          <img
            src={bgAbout}
            alt="bgHome"
            className="w-full h-full object-cover rounded-lg  object-center grayscale-[.3] shadow-lg shadow-zinc-500"
          />
        </figure>
      </section>
    </>
  );
};
export default About;
