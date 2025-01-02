import bgHomeMobile from "/st11.jpg";
import bgHomeDesktop from "/st8.png";
import GradientBtn from "../Buttons/GradientBtn";
import Logo from "../Logo";
import { useState } from "react";

const Home = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  return (
    <section className="relative w-full h-[90vh] lg:h-screen overflow-hidden flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-20">
      <nav
        id="box-glass2"
        className="relative w-full border-b border-gray py-2 rounded-b-3xl flex justify-between items-center z-50  px-3 lg:absolute lg:top-0 xl:px-12 2xl:px-20 "
      >
        <figure className="z-50 w-9">
          <Logo />
        </figure>
        <ul className="flex justify-center font-medium items-center gap-6 font-title text-zinc-500 text-sm xl:text-base xl:gap-12 2xl:gap-16 2xl:text-xl ">
          <a href="#service_section">
            <li className="border-l-[1px] border-zinc-300 py-[1px] pl-2 xl:pl-3 cursor-pointer hover:scale-105 hover:text-primary duration-500">
              Servicio
            </li>
          </a>
          <a href="#contact_section">
            <li className="border-l-[1px] border-zinc-300 py-[1px] pl-2 xl:pl-3 cursor-pointer hover:scale-105 text-primary duration-500 hover:text-zinc-200">
              Contacto
            </li>
          </a>
        </ul>
      </nav>
      <div className="lg:w-[40%] lg:self-start lg:mt-24 xl:pl-2">
        <article className="relative mx-2 mt-6 text-start z-50 rounded-xl flex flex-col justify-start items-start  pt-2 pb-4 pl-3 text-balance  lg:text-start lg:justify-start lg:items-start  lg:mt-0 lg:pl-6 xl:pt-4 xl:pb-6 lg:w-[500px]">
          <h3 className="z-50 text-primary font-title font-semibold text-2xl leading-[3.3rem] lg:text-3xl lg:leading-[3.7rem]  xl:text-4xl xl:leading-[5rem] 2xl:text-5xl">
            SERVICIO TECNICO
            <br />
            <span className="text-[5.2rem] font-medium text-zinc-700 lg:text-[6.8rem] xl:text-[8.5rem] 2xl:text-[10.2rem]">
              XIAOMI
            </span>
          </h3>
          <p className="z-50 font-title text-balance font-medium text-lg leading-5 text-zinc-500  lg:w-[550px]  lg:text-lg xl:w-[700px] xl:mt-1 2xl:text-2xl  ">
            Podemos asegurarte que tenemos la solución justa para cualquier
            problemática referente a su equipo. Nos especializamos en
            Smartphones Xiaomi. Nuestro local se encuentra en el barrio de
            Caballito, Ciudad Autónoma de Buenos Aires. Hacemos envíos y
            reparación es de celulares a todo el país.
          </p>
          <div className="w-full font-text2 text-sm flex justify-start items-start mt-8 gap-3  lg:gap-12 lg:mt-4 xl:mt-6 2xl:mt-8">
            <a href="#service_section">
              <button
                id="box-glass2"
                className="group  text-zinc-700 group border-[2px] rounded-3xl font-semibold  border-primary pl-4 pr-1 py-[1px]  flex justify-between items-center min-w-[170px] md:text-base xl:py-[2px]    lg:w-[195px] shadow-lg shadow-zinc-500 duration-500 2xl:text-xl 2xl:w-[220px]"
              >
                SERVICIO
                <i class="bx bx-arrow-back rotate-[145deg] text-2xl h-7 w-7 md:h-8 md:w-8 rounded-full bg-primary text-zinc-100 flex justify-center items-center  2xl:text-3xl group-hover:rotate-[220deg]  duration-500 font-normal"></i>
              </button>
            </a>
            <a href="#contact_section">
              <button
                id="box-glass2"
                className="group  text-zinc-600 group border-[2px] rounded-3xl font-semibold border-zinc-600  pl-4 pr-1 py-[1px]  flex justify-between items-center min-w-[170px] md:text-base xl:py-[2px]   lg:w-[195px] shadow-lg shadow-zinc-500  duration-500 2xl:text-xl 2xl:w-[220px]"
              >
                CONTACTO
                <i class="bx bx-arrow-back rotate-[145deg] text-2xl h-7 w-7 md:h-8 md:w-8 rounded-full  bg-primary text-white flex justify-center items-center  2xl:text-3xl group-hover:rotate-[220deg]  duration-500 font-normal"></i>
              </button>
            </a>
          </div>
        </article>
      </div>
      <figure className="flex justify-center items-center w-full h-[400px] md:h-auto mt-4 lg:mt-0 lg:w-[48%] lg:pr-[2%] 2xl:w-[46%]">
        <img
          src={bgHomeMobile}
          alt="Fondo móvil"
          className="w-full h-full object-cover object-center grayscale-[.]  z-20 lg:rounded-lg  shadow-zinc-500"
        />
      </figure>
    </section>
  );
};
export default Home;
