"use client";

import { useAppContext } from "@/lib/AppContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    axios
      .post("/api/user", data)
      .then((res) => {
        window.localStorage.setItem("userId", res.data.id);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);

        if (err.response.data.error) setError(err.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  };

  return (
    <div className="w-full h-full flex items-center justify-center py-36">
      <div className="bg-white px-16 py-14 rounded-md shadow-2xl">
        <h1 className="text-[#00044A] text-3xl font-bold mb-5 text-center">
          Sign Up
        </h1>
        <p className="text-[#6D6E9E] text-center mb-10">
          Create your account to get full access
        </p>
        {error && (
          <p className="my-5 text-red-500 text-lg font-semibold">{error}</p>
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group flex flex-col gap-3">
            <label htmlFor="name" className="text-lg">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-[500px] px-8 py-3 outline-none border border-[#6D6E9E]"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group flex flex-col gap-3 mt-5">
            <label htmlFor="email" className="text-lg">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-[500px] px-8 py-3 outline-none border border-[#6D6E9E]"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group flex flex-col gap-3 mt-5">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-[500px] px-8 py-3 outline-none border border-[#6D6E9E]"
              placeholder="Password"
            />
          </div>
          <div className="form-group flex flex-col gap-3 mt-5">
            <label htmlFor="passwordConfirmation" className="text-lg">
              Confirm Password
            </label>
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              className="w-[500px] px-8 py-3 outline-none border border-[#6D6E9E]"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mt-10 flex items-center justify-between">
            <p className="text-[#6D6E9E]">
              Already have an account?{" "}
              <a href="/login" className="text-[#020DFF] font-semibold">
                Log In
              </a>{" "}
              here
            </p>
            <button className="px-10 py-4 text-center rounded-lg bg-[#020DFF] text-white font-bold button2 shadow-lg hover:scale-105 hover:shadow-xl">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
