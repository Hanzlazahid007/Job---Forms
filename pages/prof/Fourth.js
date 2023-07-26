import Profdetails from "@/Components/Profdetail";
import Profbar4 from "@/Components/Profbar4";

const First = () => {
  return (
    <div>
      <Profbar4 />
      <div>
        <div className="main absolute top-[20%] left-[32%]">
          <div>
            <Profdetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
