import CardService from "../CardService";
import bgService from "/bg/bg12.jpg";
import iconService1 from "/icons/icon-service4.png";
import iconService2 from "/icons/icon-repair.png";
import iconService3 from "/icons/icon-service3.png";

const servicesData = [
  {
    icon: iconService1,
    content:
      "Garantía extendida en reparaciones: Todas nuestras reparaciones incluyen garantía, asegurándote tranquilidad y confianza en nuestro trabajo.",
  },
  {
    icon: iconService2,
    content:
      "Actualización de software y optimización: Mejoramos el rendimiento de tu celular mediante actualizaciones de software, eliminación de virus y ajustes personalizados para un desempeño óptimo.",
  },
  {
    icon: iconService3,
    content:
      "Atención personalizada: Nos aseguramos de entender tus necesidades específicas y ofrecerte soluciones adaptadas a tu caso, con un seguimiento cercano durante todo el proceso.",
  },
];

const Service = () => {
  return (
    <section className="overflow-hidden relative w-full bg-[rgb(0,0,0)] lg:bg-transparent pt-10 pb-20 px-[3%] md:py-[4%]  flex flex-col justify-start items-start">
      <figure className="absolute inset-0 w-full h-full flex justify-end items-end self-end grayscale-[.8]">
        <img
          src={bgService}
          alt="bgService"
          className="w-full h-[70%] max-w-[400px] object-cover object-[-40px] md:max-w-none md:w-[55%] md:object-center lg:w-[50%] lg:h-[80%] lg:rounded-tl-lg lg:rounded-bl-lg"
        />
      </figure>
      <article className="relative z-50 flex flex-col  gap-2 text-balance px-3 ">
        <h5 className="text-gray font-title text-5xl lg:text-5xl xl:text-6xl">
          A que nos dedicamos?
        </h5>
      </article>
      <ul className=" relative z-50 w-full  flex flex-col justify-center items-center gap-2 mt-6 md:items-start lg:mt-9 xl:mt-12 ">
        {servicesData?.map((serviceData, i) => (
          <CardService key={i} serviceData={serviceData} />
        ))}
      </ul>
    </section>
  );
};
export default Service;
