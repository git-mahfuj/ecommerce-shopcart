"use client"
import React from "react";
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Signin from "./Signin";

export default function HeaderAuth() {
  return (
    <ClerkLoaded>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Signin />
      </SignedOut>
    </ClerkLoaded>
  );
}
