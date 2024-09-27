"use client";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { handleSubmit, register } = useForm();
  const loginSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(loginSubmit)} action="">
      <div className="border-r">
        <div>
          <label htmlFor="Email">Email</label>
          <br />
          <input
            {...register("email", { required: true })}
            className="h-10 w-80 rounded-full bg-gray-100 pl-5 py-6 my-2 "
            placeholder="Enter Your Email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <br />
          <input
            {...register("password", { required: true })}
            className="h-10 w-80 rounded-full bg-gray-100 pl-5 py-6 my-2"
            placeholder="Enter Your Password"
            type="password"
          />
        </div>
        <div className="my-2">
          <input
            {...register("checked", { required: true })}
            className="bg-gray-100 border-none mr-2"
            type="checkbox"
          />
          <label htmlFor="Remember Me">Remember Me</label>
        </div>

        <input
          className="h-10 px-10 bg-primary hover:bg-primaryLiten text-white rounded-full"
          type="submit"
          value="Login now"
        />
      </div>
    </form>
  );
};

export default LoginForm;
