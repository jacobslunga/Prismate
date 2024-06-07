"use client";

import Link from "next/link";
import { FC } from "react";
import { PlusIcon } from "@radix-ui/react-icons";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  return (
    <div className="left-0 w-[20%] fixed h-screen flex flex-col items-center bg-bg border-r border-white/5 justify-center">
      <div className="absolute top-0 h-[10%] w-full flex flex-row items-center px-5 justify-between">
        <Link href="/dashboard">
          <h1 className="select-none font-sup-med text-main tracking-tight text-xl">
            Prismate
          </h1>
        </Link>
        <button
          className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
          title="Create a new project"
        >
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
