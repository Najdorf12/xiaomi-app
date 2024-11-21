import bgHome from "/bg/bg10.jpg";
import GradientBtn from "../Buttons/GradientBtn";
import Logo from "../Logo";
import { useState } from "react";

const Home = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <nav
        id="box-glass2"
        className="relative w-full border-b border-gray py-2 rounded-b-3xl flex justify-between items-center z-50  px-3 xl:px-12 2xl:px-20"
      >
        <figure className="z-50 w-9">
          <Logo />
        </figure>
        <ul className="flex justify-center font-medium items-center gap-6 font-title text-stone-500 text-sm xl:text-base xl:gap-9 2xl:text-xl ">
          <li className="border-l-[1px] border-stone-500 py-[1px] pl-2 xl:pl-3 ">
            Servicio
          </li>
          <li className="border-l-[1px] border-stone-500 py-[1px] pl-2 xl:pl-3">
            Contacto
          </li>
        </ul>
      </nav>

      <figure className="w-full h-full absolute inset-0 ">
        <img
          src={bgHome}
          alt="bgHome"
          className="w-full h-full object-cover object-[-1290px_0px] md:object-center z-20"
        />
      </figure>
      <article
        id={windowWidth < 1000 ? "box-glass2" : "box-glass2"}
        className="relative border-y border-gray mx-2 mt-14 text-start z-50 rounded-xl flex flex-col justify-start items-start  pt-2 pb-4 pl-3 text-balance lg:text-start lg:ml-[6%] lg:justify-start lg:items-start lg:w-[550px]  lg:pl-6 xl:w-[700px] xl:pt-4 xl:pb-6 2xl:w-[790px]"
      >
        <h3 className="z-50 text-stone-500 font-title font-semibold text-xl leading-[3rem]  xl:text-4xl xl:leading-[5rem]">
          SERVICIO TECNICO
          <br />
          <span className="text-[4.7rem] font-medium text-white xl:text-[8.5rem] 2xl:text-[8.5rem]">
            XIAOMI
          </span>
        </h3>
        <p className="z-50 font-title mt-2 font-medium text-base text-stone-400 lg:text-lg xl:mt-1 xl:text-xl  2xl:text-2xl  ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius placeat
          sapiente fuga eaque reprehenderit officia.
        </p>
        <div className="w-full font-text2 text-sm flex justify-start items-start mt-5 gap-3  lg:gap-12 lg:mt-4 xl:mt-6 2xl:mt-8">
          <button
            id="box-glass2"
            className="group bg-gradient-to-l from-secondary via-gray to-transparent text-stone-200 group border-[2px] rounded-3xl font-semibold  border-stone-500 pl-4 pr-1 py-[1px]  flex justify-between items-center min-w-[170px] md:text-base xl:py-[2px]  lg:border-stone-400  lg:w-[195px]  duration-500"
          >
            SERVICIO
            <i class="bx bx-arrow-back rotate-[145deg] text-2xl h-7 w-7 md:h-8 md:w-8 rounded-full bg-stone-500 text-stone-100 flex justify-center items-center  2xl:text-3xl group-hover:rotate-[220deg]  duration-500 font-normal"></i>
          </button>
          <button
            id="box-glass2"
            className="group  text-stone-400 group border-[2px] rounded-3xl font-semibold  border-stone-500 pl-4 pr-1 py-[1px]  flex justify-between items-center min-w-[170px] md:text-base xl:py-[2px]  lg:border-stone-400 lg:text-stone-200  lg:w-[195px]  duration-500"
          >
            CONTACTO
            <i class="bx bx-arrow-back rotate-[145deg] text-2xl h-7 w-7 md:h-8 md:w-8 rounded-full bg-stone-500 text-stone-100 flex justify-center items-center  2xl:text-3xl group-hover:rotate-[220deg]  duration-500 font-normal"></i>
          </button>
        </div>
      </article>
    </section>
  );
};
export default Home;
