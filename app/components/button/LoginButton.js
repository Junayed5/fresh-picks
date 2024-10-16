"use client";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
const { auth } = require("@/firebase/firebase.config");
const { default: toast } = require("react-hot-toast");

const goggleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, goggleProvider)
    .then((result) => {
      if (result?.user) {
        toast.success("Login Successful :)");
      }
    })
    .catch((error) => toast.error(error?.message));
};
const signInWithFacebook = () => {
  signInWithPopup(auth, fbProvider)
    .then((result) => {
      if (result?.user) {
        toast.success("Login Successful :)");
      }
    })
    .catch((error) => toast.error(error?.message));
};

export const LoginGoggleButton = ({ text, icon }) => {
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

export const LoginFacebookButton = ({ text, icon }) => {
  return (
    <button
      onClick={signInWithFacebook}
      className="h-12 w-64 my-5 text-sm font-semibold bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 flex justify-center items-center gap-2"
    >
      {icon}
      {text}
    </button>
  );
};
