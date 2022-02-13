import React from "react";

const AgeInput = () => {
  return (
    <>
      <div className="relative w-full max-w-xl top-28">
        <form className="px-8 pt-6 pb-8 mb-4 rounded shadow-xl bg-stone-100">
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              for="username"
            >
              UserName
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              for="password"
            >
              Age (Years)
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              placeholder="age"
            />
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Add User
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AgeInput;
