const PrimaryBtn = () => {
  return (
    <>
      <button id="box-glass2" className="relative border-[2px] bg-whiteCustom border-gray group cursor-pointer text-white overflow-hidden h-9 bg-g w-[200px] rounded-md bg- p-2 flex justify-center items-center font-extrabold">
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-secondary"></div>
        <p className="z-10 font- font-text2 text-base text-white">SERVICIO</p>
      </button>
    </>
  );
};
export default PrimaryBtn;
