"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DashboardIcon } from "@radix-ui/react-icons";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleGoogle = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="sticky top-0 w-screen z-50 h-16 flex flex-row bg-bg items-center justify-between px-10">
      <Link href="/">
        <h1 className="select-none font-sup-med text-main tracking-tight text-xl">
          Prismate
        </h1>
      </Link>

      <div className="flex flex-row items-center justify-center space-x-2">
        <Button variant="link" onClick={handleGoogle}>
          Login
        </Button>
        <Button variant="default" onClick={handleGoogle}>
          {loading ? (
            <DashboardIcon
              className="w-5 h-5 animate-spin"
              style={{ color: "black" }}
            />
          ) : (
            "Start Now"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Header;
