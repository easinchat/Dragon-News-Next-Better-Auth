"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { email, photo, name, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Sign up successfully");
    }
  };

  return (
    <div className="container mx-auto  flex justify-center items-center">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <form onSubmit={handleSubmit(handleRegisterFunc)}>
          {/* email */}
          <fieldset className="space-y-4">
            <h2 className=" font-bold text-3xl text-center p-4">Register</h2>

            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            {/* Photo Url */}

            <label className="label">Photo</label>
            <input
              type="text"
              className="input"
              placeholder="Photo Url"
              {...register("photo", { required: "Photo Url is required" })}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}

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
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn btn-neutral mt-4 w-full" type="submit">
            Register
          </button>
        </form>

        <p>
          Sign in your account?{" "}
          <Link className="text-blue-500" href={"/login"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
