import Profother from "@/components/Profother";
import Profbar6 from "@/components/Profbar6";

const First = () => {
  return (
    <div>
      <Profbar6 />
      <div>
        <div className="main xl:absolute xl:top-[20%] xl:left-[32%]">
          <div>
            <Profother />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
