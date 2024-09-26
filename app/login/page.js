import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const page = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className="bg-[url('https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/revslider/grocery/banner3_img-min-1.jpg')] bg-no-repeat bg-center bg-cover h-screen">
      <div className="max-w-7xl mx-auto pt-48">
        <form className="bg-white h-fit w-3/5 mx-auto rounded-lg grid grid-cols-2   px-10 py-14">
          <div className="border-r">
            <div>
              <label htmlFor="Email">Email</label>
              <br />
              <input
                className="h-10 w-80 rounded-full bg-gray-100 pl-5 py-6 my-2 "
                placeholder="Enter Your Email"
                type="email"
                name="email"
                id="email  "
              />
            </div>
            <div>
              <label htmlFor="Password">Password</label>
              <br />
              <input
                className="h-10 w-80 rounded-full bg-gray-100 pl-5 py-6 my-2"
                placeholder="Enter Your Password"
                type="password"
                name="password"
                id="password  "
              />
            </div>
            <div className="my-2">
              <input
                className="bg-gray-100 border-none mr-2"
                type="checkbox"
                name="check"
                id="email  "
              />
              <label htmlFor="Remember Me">Remember Me</label>
            </div>

            <input
              className="h-10 px-10 bg-primary hover:bg-primaryLiten text-white rounded-full"
              type="submit"
              value="Login now"
            />
          </div>
          <div className="flex justify-center items-center">
            <div>
              <div>
                <p className="text-center text-sm font-serif">
                  Or <br /> Login with
                </p>
              </div>
              <div className="">
                <button className="h-12 w-64 my-5 text-sm font-semibold bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 flex justify-center items-center gap-2">
                  <FcGoogle />
                  continue With Goggle
                </button>
                <button className="h-12 w-64 my-5 text-sm font-semibold bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 flex justify-center items-center gap-2">
                  <FaFacebookF />
                  continue With Facebook
                </button>
              </div>
              <div>
                <p className="text-sm text-center">
                  Not have any account?{" "}
                  <Link className="text-primary" href={"/signUp"}>
                    SignUp
                  </Link>{" "}
                  here
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
