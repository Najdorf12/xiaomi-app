
const SecondaryBtn = ({ bg }) => {
  return (
    <div className={`secondary-btn text-zinc-200 ${bg}`}>
      <span className="text">hover me</span>
      <span className="arrow"></span>
    </div>
  );
};

export default SecondaryBtn;
