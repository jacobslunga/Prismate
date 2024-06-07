"use client";

import { FC, useState } from "react";

interface HomeInputProps {}

const HomeInput: FC<HomeInputProps> = ({}) => {
  const [idea, setIdea] = useState("");

  return (
    <div className="flex w-full mt-2 max-w-xl items-center space-x-2">
      <input
        type="text"
        className="bg-white/5 focus:border-white border transition-colors duration-200 flex-1 text-lg w-full p-5 outline-none rounded-md"
        placeholder="Describe your idea"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />
      <button
        type="submit"
        className="font-sup-semi text-lg p-5 rounded-md bg-white hover:opacity-80 transition-opacity duration-200 disabled:bg-white/5 border disabled:text-white/15 text-black cursor-pointer disabled:cursor-not-allowed"
        disabled={!idea}
      >
        Let{"'"}s go
      </button>
    </div>
  );
};

export default HomeInput;
