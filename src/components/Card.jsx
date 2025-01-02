
const Card = ({cardData}) => {
  return (
    <div id="box-glass2" className="w-[95%]  max-w-[400px]  py-3  rounded-xl border border-primary  flex justify-center items-start lg:py-4 lg:max-w-[30%] lg:pl-2 lg:min-h-[120px] xl:max-w-[440px] shadow-lg shadow-gray duration-500  group 2xl:max-w-[500px] cursor-pointer ">
      <figure className=" group-hover:scale-105 flex justify-center items-center w-[50%] duration-500">
        <img src={cardData?.icon} alt="icon" className="w-16 xl:w-20 2xl:w-24" />
      </figure>
      <div className="w-[21px] absolute bottom-0 right-0 h-[21px] rounded-full bg-primary z-40 "></div>

      <article className="text-balance pl-2  lg:pl-5">
        <p className="font-text mt-3 text-zinc-500 text-sm font-medium xl:mt-5 xl:text-base  cursor-context-menu duration-500">
          {cardData?.content}
        </p>
      </article>
    </div>
  );
};

export default Card;
