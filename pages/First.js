import React, { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import Login from "@/Components/Login";

const First = () => {
  const [flag, setFlag] = useState(false);
  const data = [
    {
      title: "welcome back",
      enter: "please enter your mobile number to log in",
      login: "Enter your mobile number",
    },
  ];

  return (
    <div>
      <Sidebar flag={flag} />
      <div>
        <div className="main absolute top-[23%] left-[40%]">
          <div>
            <Login setFlag={setFlag} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
