"use client";

import Link from "next/link";
import { FC } from "react";
import { PlusIcon } from "@radix-ui/react-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Add() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip defaultOpen={false}>
        <TooltipTrigger asChild>
          <button
            className="p-2 rounded-xl dark:bg-white/10 dark:text-white dark:hover:bg-white/20 text-black bg-black/5 hover:bg-black/10 transition-colors duration-200"
            title="Create a new project"
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="p-2">
          <p className="font-semibold">New design</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  const dummyData = [
    {
      id: 1,
      name: "Design 1",
      components: 12,
    },
    {
      id: 2,
      name: "Design 2",
      components: 5,
    },
    {
      id: 3,
      name: "Design 3",
      components: 8,
    },
    {
      id: 4,
      name: "Design 4",
      components: 15,
    },
    {
      id: 5,
      name: "Design 5",
      components: 2,
    },
    {
      id: 6,
      name: "Design 6",
      components: 7,
    },
    {
      id: 7,
      name: "Design 7",
      components: 3,
    },
    {
      id: 8,
      name: "Design 8",
      components: 9,
    },
    {
      id: 9,
      name: "Design 9",
      components: 11,
    },
    {
      id: 10,
      name: "Design 10",
      components: 6,
    },
  ];

  return (
    <div
      style={{
        scrollbarWidth: "none",
      }}
      className="left-0 w-[25%] fixed h-screen flex flex-col items-center bg-white dark:bg-bg justify-center overflow-auto"
    >
      <div className="sticky bg-gradient-to-b dark:from-bg dark:via-[rgba(15,15,15,0.7)] from-white via-[rgba(255,255,255,0.7)] to-transparent top-0 p-5 w-full flex flex-row items-center px-5 justify-between">
        <Link href="/dashboard">
          <h1 className="select-none font-sup-med text-black dark:text-main tracking-tight text-xl">
            Prismate
          </h1>
        </Link>
        <Add />
      </div>

      <div className="w-full h-[90%] space-y-52 flex flex-col items-center justify-center">
        {dummyData.map((data) => (
          <Link key={data.id} href={`/design/${data.id}`}>
            <div className="w-full flex flex-row items-center justify-between px-5 py-2 hover:bg-white/10 transition-colors duration-200">
              <p className="dark:text-white/70 text-black">{data.name}</p>
              <p className="dark:text-white/50 text-black">
                {data.components} components
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
