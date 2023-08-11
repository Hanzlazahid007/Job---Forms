import React from "react";
import { useRouter } from "next/router";

const CompanyProfile = () => {
  const router = useRouter();

  const HandleSubmit = (e) => {
    router.push("/Third");
    e.preventDefault();
  };
  return (
    <div className="flex justify-center mt-6 xl:mt-0 ">
      <form onSubmit={HandleSubmit}>
        <h1 className="text-2xl font-semibold">Company Profile</h1>
        <p className="text-sm text-[#777777]">
          {" "}
          please provide required information to log in.
        </p>
        <div className="mt-4  xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Company Name</span>
              <input
                type="text"
                name="name"
                required
                className="
            block
            xl:w-96
            mt-1
            -mb-4
            xl:mb-0
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Enter Name"
              />
            </label>
          </div>
          <div className="">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Company Name</span>

              <select
                name="product"
                required
                className="
            block
            xl:w-96
            w-[17.7rem]
            -mb-4
            xl:mb-0
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
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">
                Official Contact number
              </span>
              <input
                type="text"
                required
                name="name"
                className="
            block
            xl:w-96
            mt-1
            -mb-4
            xl:mb-0
             
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
            -mb-4
            xl:mb-0
             
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
              <span className="text-sm text-[#777777]">Since</span>
              <input
                type="text"
                name="name"
                required
                className="
            block
            xl:w-96
            mt-1
            -mb-4
            xl:mb-0
             
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
          <div className="xl:ml-12">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Company Team size</span>

              <select
                name="product"
                required
                className="
            block
            xl:w-96
            w-[17.7rem]
            -mb-4
            xl:mb-0
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
        </div>

        {/* =================== */}
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Company Web Link</span>
              <input
                type="text"
                required
                name="name"
                className="
            block
            xl:w-96
            mt-1
            -mb-4
            xl:mb-0
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
          <div>
            <label htmlFor="inputFile" class="block mb-6">
              <span className="text-sm text-[#777777]">Company Logo</span>
              <input
                required
                name="photo"
                id="inputFile"
                type="file"
                className="
            block
            xl:w-96
            -mb-4
            xl:mb-0
            mt-1
            rounded-md
            file:bg-blue-600
            file:rounded-lg
            file:border-blue-600
            file:text-white
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
              />
            </label>
          </div>
        </div>

        {/* =============================== */}
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          {" "}
          <div>
            <label htmlFor="inputFile" class="block mb-6">
              <span className="text-sm text-[#777777]">
                Company Bank Cover Image
              </span>
              <input
                required
                name="photo"
                id="inputFile"
                type="file"
                className="
            block
            -mb-4
            xl:mb-0
            xl:w-96
            mt-1
            rounded-md
            file:bg-blue-600
            file:rounded-lg
            file:border-blue-600
            file:text-white
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
              />
            </label>
          </div>
          <div>
            <label htmlFor="inputFile" class="block mb-6">
              <span className="text-sm text-[#777777]">Office photo</span>
              <input
                required
                name="photo"
                id="inputFile"
                type="file"
                className="
            block
            xl:w-96
            -mb-4
            xl:mb-0
            mt-1
            rounded-md
            file:bg-blue-600
            file:rounded-lg
            file:border-blue-600
            file:text-white
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Company About</span>
              <input
                type="text"
                name="name"
                className="
            block
            xl:w-96
            mt-1
            mb-6
            xl:mb-0
            
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
          className="w-32 m-auto xl:m-0 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default CompanyProfile;
