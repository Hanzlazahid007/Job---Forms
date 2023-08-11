import Profdetails from "@/components/Profdetail";
import Profbar4 from "@/components/Profbar4";

const First = () => {
  return (
    <div>
      <Profbar4 />
      <div>
        <div className="main xl:absolute xl:top-[20%] xl:left-[32%]">
          <div>
            <Profdetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
