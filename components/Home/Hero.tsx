"use client";

import React from "react";
import { Icons } from "../Icons";
import Link from "next/link";
import Creator from "./Creator";
import { useSession } from "@clerk/nextjs";

const Hero = () => {
  const { session } = useSession();
  return (
    <div className="h-screen overflow-hidden bg-gray-900">
      <nav className="container flex h-20 items-center justify-between">
        <Icons.logo className="size-12 text-white/70" />
        {!session ? (
          <Link
            href="/sign-up"
            className="rounded-lg bg-gradient-to-r from-indigo-400 to-blue-500 px-6 py-3 text-base font-medium text-white"
          >
            <span className="flex items-center">
              Get started
              <Icons.arrow_right className="ml-3 size-6 text-white" />
            </span>
          </Link>
        ) : (
          <Link
            href="/dashboard"
            className="rounded-lg bg-gradient-to-r from-indigo-400 to-blue-500 px-6 py-3 text-base font-medium text-white"
          >
            <span className="flex items-center">
              Dashboard
              <Icons.arrow_right className="ml-3 size-6 text-white" />
            </span>
          </Link>
        )}
      </nav>
      <header className="container flex h-full flex-col items-center justify-center space-y-6 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold text-white md:text-5xl">
          Elevate Your Experience with Our AI Companion
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Experience seamless integration of AI technology into your daily
          routine with our companion web app and maximize efficiency, stay
          organized with proactive assistance from our AI companion.
        </p>
        {!session ? (
          <Link
            href="/sign-up"
            className="z-50 rounded-lg bg-gradient-to-r from-indigo-400 to-blue-500 px-6 py-3 text-base font-medium text-white"
          >
            <span className="flex items-center">
              Get started
              <Icons.arrow_right className="ml-3 size-6 text-white" />
            </span>
          </Link>
        ) : (
          <Link
            href="/dashboard"
            className="z-50 rounded-lg bg-gradient-to-r from-indigo-400 to-blue-500 px-6 py-3 text-base font-medium text-white"
          >
            <span className="flex items-center">
              Dashboard
              <Icons.arrow_right className="ml-3 size-6 text-white" />
            </span>
          </Link>
        )}
        <div className="flex flex-col items-center pt-12">
          <p className="text-sm font-medium text-white">Crafted by ❤️</p>
          <Creator />
        </div>
      </header>
      <div
        className="absolute inset-0 z-0 m-auto h-[357px] max-w-xs blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </div>
  );
};

export default Hero;
