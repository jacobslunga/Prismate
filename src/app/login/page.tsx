"use client";

import { FC } from "react";
import { signIn } from "next-auth/react";

interface LoginProps {}

const GoogleButton: FC = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign in with Google
    </button>
  );
};

const Login: FC<LoginProps> = ({}) => {
  return (
    <div className="flex min-h-screen overflow-x-hidden flex-col items-center justify-evenly w-full h-screen">
      <GoogleButton />
    </div>
  );
};

export default Login;
