
const Card = ({cardData}) => {
  return (
    <div id="box-glass2" className="w-[90%] h-[210px]  max-w-[400px]  bg-gradient-to-br from-gray via- to- pb-3 py-2 pl-3 pr-1 rounded-xl border border-stone-300 flex flex-col justify-between lg:pt-4 lg:pl-4 lg:pb-4 lg:h-[250px] lg:max-w-[390px] xl:h-[250px] shadow-lg shadow-gray  hover:border-whiteCustom duration-500 group 2xl:max-w-[430px] 2xl:h-[260px]">
      <figure className="w-24 lg:w-28 group-hover:scale-105  duration-500">
        <img src={cardData?.icon} alt="icon" />
      </figure>
      <article className="text-balance    ">
        <div className="w-[35%] h-[2px] bg-primary z-40 "></div>
        <p className="font-text mt-3 text-stone-600 text-sm font-medium xl:text-base 2xl:text-xl">
          {cardData?.content}
        </p>
      </article>
    </div>
  );
};

export default Card;
