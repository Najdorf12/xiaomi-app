import CardService from "../CardService";
import bgService from "/bg/bg12.jpg";
import iconService1 from "/icons/icon-service4.png";
import iconService2 from "/icons/icon-repair.png";
import iconService3 from "/icons/icon-service3.png";

const servicesData = [
  {
    icon: iconService1,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum repudiandae blanditiis culpa reprehenderit laudantium quis perferendis aspernatur sint nihil repellendus.",
  },
  {
    icon: iconService2,
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum repudiandae blanditiis culpa reprehenderit laudantium quis perferendis aspernatur sint nihil repellendus.",
  },
  {
    icon: iconService3,
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum repudiandae blanditiis culpa reprehenderit laudantium quis perferendis aspernatur sint nihil repellendus.",
  },
];

const Service = () => {
  return (
    <section className="overflow-hidden relative w-full  bg-[rgb(0,0,0)] pt-10 pb-20 px-[3%] md:py-[4%]  flex flex-col justify-start items-start">
      <figure className="absolute inset-0 w-full h-full flex justify-end items-end self-end grayscale-[.8]">
        <img
          src={bgService}
          alt="bgService"
          className="w-full h-[70%] max-w-[400px] object-cover object-[-40px] md:max-w-none md:w-[55%] md:object-center lg:w-[55%] lg:h-[90%]"
        />
      </figure>
      <article className="relative z-50 flex flex-col  gap-2 text-balance px-3 ">
        <h5 className="text-gray font-title text-5xl lg:text-6xl xl:text-7xl">
          A que nos dedicamos?
        </h5>
      </article>
      <ul className=" relative z-50 w-full  flex flex-col justify-center items-center gap-2 mt-6 md:items-start lg:mt-9 xl:mt-12 lg:gap-4">
        {servicesData?.map((serviceData, i) => (
          <CardService key={i} serviceData={serviceData} />
        ))}
      </ul>
    </section>
  );
};
export default Service;
