"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
const { auth } = require("@/firebase/firebase.config");
const { default: toast } = require("react-hot-toast");

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      if (result?.user) {
        toast.success("Login Successful :)");
      }
    })
    .catch((error) => toast.error(error?.message));
};

const LoginButton = ({ text, icon }) => {
  return (
    <button
      onClick={signInWithGoogle}
      className="h-12 w-64 my-5 text-sm font-semibold bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 flex justify-center items-center gap-2"
    >
      {icon}
      {text}
    </button>
  );
};

export default LoginButton;
