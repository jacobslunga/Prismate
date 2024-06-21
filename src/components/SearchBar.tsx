"use client";

import { FC, useState, useRef } from "react";
import { ArrowRightIcon, ShadowInnerIcon } from "@radix-ui/react-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Properties() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip defaultOpen={false}>
        <TooltipTrigger asChild>
          <button className="rounded-full border-none bg-main p-2 hover:opacity-75 transition-opacity duration-200">
            <ShadowInnerIcon className="w-7 h-7 text-black" />
          </button>
        </TooltipTrigger>
        <TooltipContent className="p-2">
          <p className="font-semibold">Edit properties</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="flex flex-row items-center justify-between px-2 rounded-full bg-white border dark:bg-white/5 shadow-md w-full max-w-6xl p-2 sticky">
      <Properties />
      <input
        placeholder="Describe your design..."
        className="outline-none px-5 border-none focus-visible:ring-0 shadow-none bg-transparent font-lg text-black dark:text-white w-full h-auto flex-grow"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="rounded-full bg-black dark:bg-white p-2 disabled:hover:opacity-100 hover:opacity-75 transition-opacity duration-200 disabled:bg-black/5 dark:disabled:bg-white/10 disabled:cursor-not-allowed"
        onClick={() => {
          console.log(query);
          setQuery("");
        }}
        disabled={!query}
      >
        <ArrowRightIcon className="w-7 h-7 disabled:text-black/50 dark:disabled:text-white/30 text-white dark:text-black" />
      </button>
    </div>
  );
};

export default SearchBar;
