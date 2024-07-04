import React, { useState } from "react";
import Header from "./Header";

export const Login = () => {
  const [signup, setSignUP] = useState("Sign In");
  const handleClick = () => {
    setSignUP("Sign Up");
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/1371971c-a973-4148-8bf9-0659c44ba60c/BH-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_8196782b-b54b-4793-91c7-5d7d87c859bf_small.jpg"
          alt=" "
        />
      </div>
      <form className="absolute p-12 bg-black/70 w-3/12 mx-auto my-40 right-0 left-0  ">
        <h5 className="font-bold  text-white text-3XL w-full">{signup}</h5>
        {signup !== "Sign In" && (
          <input
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            type="text"
            placeholder="Enter Your Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 bg-red-600 text-white w-full rounded-lg">
          {signup}
        </button>
        <p className="text-gray-400 cursor-pointer" onClick={handleClick}>
          New to Netflix ?<span className="text-white">Sign up now.</span>
        </p>
      </form>
    </div>
  );
};
