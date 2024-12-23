
const Card = ({cardData}) => {
  return (
    <div id="box-glass2" className="w-[90%] h-[210px]  max-w-[400px]   pb-3 py-2 pl-3 pr-1 rounded-xl border border-primary  flex flex-col justify-between lg:pt-4 lg:pl-4 lg:pb-4 lg:h-[250px] lg:max-w-[370px] xl:max-w-[430px] xl:h-[270px] shadow-lg shadow-gray duration-500 group 2xl:max-w-[430px] 2xl:h-[250px] cursor-pointer">
      <figure className="w-24 lg:w-28 group-hover:scale-105  duration-500">
        <img src={cardData?.icon} alt="icon" />
      </figure>
      <article className="text-balance    ">
        <div className="w-[35%] h-[2px] bg-zinc-700 z-40 "></div>
        <p className="font-text mt-3 text-zinc-500 text-sm font-medium xl:mt-5 xl:text-base  2xl:text-xl  cursor-context-menu duration-500">
          {cardData?.content}
        </p>
      </article>
    </div>
  );
};

export default Card;
