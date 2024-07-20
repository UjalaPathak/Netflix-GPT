import React, { useState, useRef } from "react";
import Header from "./Header";
import ValidationCheck from "../utils/Validate";

export const Login = () => {
  //const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSignIn, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleButtonClick = () => {
    const message = ValidationCheck(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };
  const handleClick = () => {
    setSignInForm(!isSignIn);
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black/70 w-3/12 mx-auto my-40 right-0 left-0  "
      >
        <h5 className="font-bold  text-white text-3XL w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h5>
        {!isSignIn && (
          <input
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            type="text"
            placeholder="Enter Your Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Email or phone number"
        />
        {
          <input
            ref={password}
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            type="password"
            placeholder="Password"
          />
        }
        <p className="text-red-500 font-bold p-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 text-white w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className=" text-white cursor-pointer" onClick={handleClick}>
          {isSignIn
            ? "New to Netflix ?Sign up now"
            : "Alredy registered?Sign In Now."}
        </p>
      </form>
    </div>
  );
};
