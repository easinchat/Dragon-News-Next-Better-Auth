"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPass, setIsShowPass] = useState(false);

  const handleLoginFunc = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
    // if (error) {
    //   alert("Please type valid email and password or Sign Up");
    // }
    // if (res) {
    //   alert("Sign In successfully");
    // }
  };

  return (
    <div className="container mx-auto  flex justify-center items-center">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <form onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="space-y-4">
            <h2 className=" font-bold text-3xl text-center p-4">Login</h2>
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register("email", { required: "Email field is required " })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <label className="label">Password</label>
            <input
              type={isShowPass ? "text" : "password"}
              className="input"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            <span onClick={() => setIsShowPass(!isShowPass)}>
              <FaEye></FaEye>
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn btn-neutral mt-4 w-full" type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link className="text-blue-500" href={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
