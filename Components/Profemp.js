import React from "react";
import { useRouter } from "next/router";

const Profemp = () => {
  const router = useRouter();
  const HandleSubmit = (e) => {
    router.push("/prof/Fourth");
    e.preventDefault();
  };
  return (
    <div className="flex justify-center xl:mt-0  mt-6">
      <form onSubmit={HandleSubmit}>
        <h1 className="text-2xl font-semibold">Employment</h1>
        <p className="text-sm text-[#777777]">
          {" "}
          please provide required Education to Continue.
        </p>
        <div className="xl:mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10 mt-4 xl:mt-0">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Organization Name</span>

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
              <span className="text-sm text-[#777777]">Designation</span>
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
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Current Company</span>
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
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Working Form</span>
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

        {/* =================== */}
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Current Salry</span>
              <input
                required
                name="photo"
                id="inputFile"
                type="text"
                className="
            block
            xl:w-96
            mt-1
            -mb-4
             xl:mb-0
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
          <div className="xl:ml-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Notice Period</span>

              <input
                required
                name="photo"
                id="inputFile"
                type="text"
                className="
            block
            xl:w-96
            mt-1
             -mb-4
             xl:mb-0

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
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Current Salry</span>
              <input
                required
                name="photo"
                id="inputFile"
                type="text"
                className="
            block
            xl:w-[50.5rem]
            mt-1
             -mb-4
             xl:mb-0
             
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
        {/* =========================== */}

        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Describe Profile</span>
              <textarea
                type="date"
                name="name"
                required
                className="
            block
            xl:w-[50.5rem]
            mt-1
            w-[16.4rem]
                
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

export default Profemp;
