
const Card = ({cardData}) => {
  return (
    <div id="box-glass2" className="w-[95%] min-h-[130px] max-w-[410px]  py-2  rounded-xl border border-primary  flex justify-start items-start  lg:max-w-[30%]  lg:min-h-[140px] xl:max-w-[440px] shadow-lg shadow-gray duration-500  group 2xl:max-w-[520px] cursor-pointer ">
      <figure className=" group-hover:scale-105 w-[25%] min-h-[120px] flex justify-center items-center  duration-500">
        <img src={cardData?.icon} alt="icon" className="w-full" />
      </figure>
      <div className="w-[21px] absolute bottom-0 right-0 h-[21px] rounded-full bg-primary z-40 "></div>

      <article className="w-[75%] text-balance text-start pl-2  flex items-center min-h-[120px]">
        <p className="font-text  text-zinc-500 text-base font-medium  xl:text-base 2xl:text-lg  cursor-context-menu duration-500">
          {cardData?.content}
        </p>
      </article>
    </div>
  );
};

export default Card;
