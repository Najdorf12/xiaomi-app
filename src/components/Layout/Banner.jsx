import bgBanner from "/bg/bg5.webp";

const Banner = () => {
  return (
    <section className="relative w-full min-h-[400px] py-1 lg:h-screen pt-[2%]">
      <figure className="w-full h-full absolute inset-0 ">
        <img
          src={bgBanner}
          alt="bgHome"
          className="w-full h-full object-cover object-center"
        />
      </figure>
      <article className="relative z-50 w-full flex justify-center items-center ">
        <h6 className="text-gray text-center text-balance text-lg -mt-6  px-2 font-normal font-title max-w-[600px] md:mt-0 lg:mt-4 lg:text-4xl lg:max-w-[900px] 2xl:max-w-[1200px] 2xl:text-5xl">
          Tu Xiaomi merece estar en las mejores manos.{" "}
          <span className="text-primary pr-1">
            Estamos aquí para asegurarnos de que vuelva a funcionar
          </span>
          sin problemas.
        </h6>
      </article>
    </section>
  );
};

export default Banner;
