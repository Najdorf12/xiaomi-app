import Card from "../Card";
import bgAbout from "/bg/bg21.jpg";
import icon1 from "/icons/icon-service1.png";
import icon3 from "/icons/icon-garantia.png";
import icon2 from "/icons/icon-service.png";

const cardsData = [
  {
    icon: icon1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, illo.",
  },
  {
    icon: icon2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, illo.",
  },
  {
    icon: icon3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, illo.",
  },
];
const About = () => {
  return (
    <>
      <section className="overflow-hidden w-full flex justify-center items-center bg-gray2 py-12 xl:py-14 2xl:py-20">
        <ul className="z-50  w-full  relative flex justify-center px-3 items-center flex-wrap  gap-x-2 gap-y-4 lg:gap-6 2xl:gap-x-20">
          {cardsData?.map((cardData, i) => (
            <Card key={i} cardData={cardData} />
          ))}
        </ul>
      </section>
    
      <section className="relative w-full h-[80vh] flex justify-center items-start overflow-hidden  lg:h-screen pt-[4%] lg:pt-[2%] ">
        <figure className="w-full h-full absolute inset-0 ">
          <img
            src={bgAbout}
            alt="bgHome"
            className="w-full h-full object-cover object-[-100px] md:object-center "
          />
        </figure>
        <article className="relative z-50 w-full h-full mx-2  flex flex-col justify-start items-center text-balance gap-3 text-center md:max-w-[800px] lg:self-center xl:gap-4 2xl:max-w-[1000px]">
          <h6 className="text-gray2 text-2xl font-medium font-title lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Lorem, ipsum dolor sit amet consectetur adipiscing.
          </h6>
          <p className="text-gray text-sm font-medium font-text2 lg:text-base xl:text-lg 2xl:text-xl ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            quis similique explicabo eum blanditiis atque dolorem, maiores vitae
            eaque neque.
          </p>
          <div className="flex justify-center mt-1 ">
            <button
              id="box-glass2"
              className="group bg-gradient-to-l from-secondary via-gray to-gray text-stone-100 group  rounded-3xl font-semibold border border-stone-500  pl-4 pr-1 py-[1px]  flex justify-between items-center min-w-[170px] md:text-base  xl:w-[195px]  duration-500"
            >
              TIENDA
              <i class="bx bx-arrow-back rotate-[145deg] text-2xl h-7 w-7 md:h-8 md:w-8 rounded-full bg-stone-500 text-stone-100 flex justify-center items-center  2xl:text-3xl group-hover:rotate-[220deg]  duration-500 font-normal"></i>
            </button>
          </div>
        </article>
      </section>
    </>
  );
};
export default About;
