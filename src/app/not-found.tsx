import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center bg-bg justify-center space-y-3 w-screen h-screen">
      <h1 className="text-9xl font-sup-bold text-center text-white">404</h1>
      <h1 className="text-4xl font-sup-bold text-center text-white">
        Looks like you{"'"}re lost. This page doesn{"'"}t exist.{" "}
      </h1>

      <Link href="/" className="bg-main text-black rounded p-2 font-sup-semi">
        Let{"'"}s go back home
      </Link>
    </div>
  );
}
