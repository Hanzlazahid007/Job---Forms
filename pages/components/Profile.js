import React from "react";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const HandleSubmit = (e) => {
    router.push("/Fourth");
    e.preventDefault();
  };
  return (
    <div className="flex justify-center mt-6 xl:mt-0 ">
      <form onSubmit={HandleSubmit}>
        <h1 className="text-2xl font-semibold">Recruiter Profile</h1>
        <p className="text-sm text-[#777777]">
          {" "}
          please provide required information to log in.
        </p>
        <div className="mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Full Name</span>

              <select
                name="product"
                required
                className="
            block
            xl:w-96
            w-[15.9rem] 
            xl:mb-0
            -mb-4
            mt-1
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="cake">Technology</option>
                <option value="cat"></option>
                <option value="meme"></option>
                <option value="zoom"></option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Mobile Number</span>
              <input
                type="text"
                required
                name="name"
                className="
            block
            xl:w-96
            mt-1
            xl:mb-0
            -mb-4
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">
                Alternative mobile number
              </span>
              <input
                type="text"
                name="name"
                required
                className="
            block
            xl:w-96
            mt-1
                xl:mb-0
            -mb-4
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Offical mail id</span>
              <input
                type="text"
                name="name"
                required
                className="
            block
            xl:w-96
            
            mt-1
                xl:mb-0
            -mb-4
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
        </div>

        {/* =================== */}
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Gender</span>

              <select
                name="product"
                required
                className="
            block
            xl:w-96
            w-[15.9rem]
            xl:mb-0
            -mb-4
            mt-1
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="cake">Technology</option>
                <option value="cat"></option>
                <option value="meme"></option>
                <option value="zoom"></option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">My role</span>
              <input
                type="text"
                name="name"
                required
                className="
            block
            xl:w-96
            mt-1
            xl:mb-0
            -mb-4
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Language</span>

              <select
                name="product"
                required
                className="
            block
            xl:w-96
            w-[15.9rem]
            mt-1
            xl:mb-0
            -mb-4
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="cake">English</option>
                <option value="cat"></option>
                <option value="meme"></option>
                <option value="zoom"></option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Age</span>
              <input
                type="text"
                name="name"
                required
                className="
            block
            xl:w-96
            mt-1
            xl:mb-0
            -mb-4
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Experience</span>
              <input
                type="text"
                name="name"
                required
                className="
            block
            xl:w-[51rem]
            mt-1xl:mb-0
            mb-6
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-32 m-auto xl:m-0 mt-1 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Profile;
