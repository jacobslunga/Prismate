"use client";

import { FC, useState, useRef } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Input } from "./ui/input";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="flex flex-row items-center justify-between px-2 rounded-full bg-white/5 shadow-md w-3/4 p-2 bottom-5 sticky">
      <Input
        placeholder="Describe your design..."
        className="outline-none border-none focus-visible:ring-0 bg-transparent text-white w-full h-auto flex-grow"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="rounded-full bg-white p-2 disabled:hover:opacity-100 hover:opacity-75 transition-opacity duration-200 disabled:bg-white/10 disabled:cursor-not-allowed"
        onClick={() => {
          console.log(query);
          setQuery("");
        }}
        disabled={!query}
      >
        <PaperPlaneIcon className="w-7 h-7 rotate-[-90deg] disabled:text-white/30 text-black" />
      </button>
    </div>
  );
};

export default SearchBar;
