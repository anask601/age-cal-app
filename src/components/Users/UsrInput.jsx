import React, { useState } from "react";

const UsrInput = () => {
  const [userNameChangeValue, setUserNameChangeValue] = useState("");
  const [ageChangeValue, setAgeChangeValue] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      userNameChangeValue.trim().length === 0 ||
      ageChangeValue.trim().length === 0 ||
      +ageChangeValue < 0
    ) {
      return;
    }
    console.log(ageChangeValue, userNameChangeValue);
    setUserNameChangeValue("");
    setAgeChangeValue("");
    console.log(ageChangeValue, userNameChangeValue);
  };

  const userNameChangeHandler = (event) => {
    setUserNameChangeValue(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeChangeValue(event.target.value);
  };
  return (
    <>
      <div className="absolute w-full max-w-xl top-20">
        <form
          onSubmit={addUserHandler}
          className="px-8 pt-6 pb-8 mb-4 rounded shadow-xl bg-stone-100"
        >
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              UserName
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={userNameChangeValue}
              onChange={userNameChangeHandler}
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="age"
            >
              Age (Years)
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              placeholder="age"
              value={ageChangeValue}
              onChange={ageChangeHandler}
            />
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
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

export default UsrInput;
