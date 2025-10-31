"use client"
import { SignInButton } from "@clerk/nextjs";
import React from "react";

const Signin = () => {
  return (
    <SignInButton mode="modal">
      <button className="bg-green-500 px-3 py-1.5 rounded-md text-white font-medium cursor-pointer hoverEffect hover:-translate-y-0.5">
        Login
      </button>
    </SignInButton>
  );
};

export default Signin;
