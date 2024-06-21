"use client";

import { IconArrowWaveRightUp, IconSignature } from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  Component1Icon,
  Component2Icon,
  LetterCaseCapitalizeIcon,
  Pencil2Icon,
  RulerSquareIcon,
} from "@radix-ui/react-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DesignSystemNameSheet } from "./DesignSystemNameSheet";

function Color({
  trigger,
  color,
}: {
  trigger: React.ReactNode;
  color: string;
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip defaultOpen={false}>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent className="p-2">
          <p className="font-semibold">{color}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function ChangeName() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip defaultOpen={false}>
        <TooltipTrigger asChild>
          <DesignSystemNameSheet />
        </TooltipTrigger>
        <TooltipContent className="p-2">
          <p className="font-semibold">Change name</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const ColorSection = ({ colors }: { colors: string[] }) => {
  return (
    <div className="flex flex-row items-center justify-center flex-grow">
      {colors.map((color, i) => {
        return (
          <Color
            key={i}
            trigger={
              <div
                key={i}
                className="w-14 h-14 rounded-full -m-1 dark:border-white/10 border border-transparent"
                style={{ backgroundColor: color }}
              ></div>
            }
            color={color}
          />
        );
      })}
    </div>
  );
};

const colors = ["#E7F0DC", "#597445", "#658147", "#729762"];

const TypographySection = () => {
  return (
    <div className="flex flex-row items-center justify-center flex-grow">
      <div className="flex flex-col items-start justify-start">
        <p className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          Heading1
        </p>
        <p
          className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300"
          style={{ fontSize: "24px" }}
        >
          Heading2
        </p>
        <p>
          <span className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            20px
          </span>
        </p>
      </div>
    </div>
  );
};

export function DesignSystemGrid() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center">
      <div className="w-full flex flex-row items-center max-w-6xl mx-auto mb-5 mt-10 space-x-5">
        <h1 className="font-bold tracking-tight text-black dark:text-white text-4xl">
          Design System 1
        </h1>
        <ChangeName />
      </div>
      <BentoGrid className="max-w-6xl mx-auto mt-5">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={
              i === 3 || i === 6
                ? "md:col-span-2 cursor-pointer"
                : "cursor-pointer"
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Brand Colors",
    description:
      "Your brand's colors are the foundation of your design system.",
    header: <ColorSection colors={colors} />,
    icon: <Component1Icon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Typography",
    description: "The typography you choose can make or break your design.",
    header: <TypographySection />,
    icon: <LetterCaseCapitalizeIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Logo",
    description: "Your logo is the face of your brand.",
    header: (
      <img
        className="object-cover max-h-40"
        src="https://files.oaiusercontent.com/file-zQaAHnYZZsIR40BRG6pIchOl?se=2024-06-21T10%3A14%3A50Z&sp=r&sv=2023-11-03&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dd45f55b1-2258-4140-8e87-3d66f8e3b0b5.webp&sig=1t65khOTU6nPPTzpQANF7ZzqzcQ0NXnTMKJJx5tJsbA%3D"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Layouts",
    description:
      "The layout of your design can have a huge impact on the user experience.",
    header: <Skeleton />,
    icon: <RulerSquareIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Icons",
    description: "Icons are a great way to communicate with your users.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
