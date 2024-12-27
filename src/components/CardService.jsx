const CardService = ({ serviceData }) => {
  return (
    <li
      id=""
      className="w-[100%] border-b-[2px] pb-3 px-6 border-orange-400  flex flex-col max-w-[500px] xl:pb-4 xl:max-w-[550px]"
    >
      <figure className="w-20 self-end">
        <img
          src={serviceData?.icon}
          alt="icon"
          className="object-cover object-center w-full h-full"
        />
      </figure>
      <p className="text-stone-200 text-balance  font-medium text-sm font-text2 mt-2   lg:text-lg  lg:-mt-7 xl:pr-6 ">
      {serviceData?.content}
      </p>
    </li>
  );
};

export default CardService;
