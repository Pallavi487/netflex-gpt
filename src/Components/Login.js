import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="h-screen relative">
      <Header />
      <div>
        <img
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp"
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign IN" : "Sign UP"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Email-address"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email-address"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign IN" : "Sign UP"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign UP Now"
            : "Already registerd? Sign IN Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
