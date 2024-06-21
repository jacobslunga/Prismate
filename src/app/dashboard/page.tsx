import SearchBar from "@/components/SearchBar";
import { db } from "@/db";
import { authOptions } from "@/lib/util/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FC } from "react";

import { Button } from "@/components/ui/button";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = async ({}) => {
  const session = (await getServerSession(authOptions)) as any;

  if (!session) {
    redirect("/");
  }

  const user = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      name: true,
      email: true,
      id: true,
      image: true,
      designs: {
        select: {
          id: true,
          name: true,
          components: true,
        },
      },
    },
  });

  if (!user) {
    redirect("/");
  }

  console.log(user);

  return (
    <div className="flex flex-row items-center bg-zinc-900 justify-center w-screen lg:w-[75%] absolute right-0 min-h-screen">
      <SearchBar />
    </div>
  );
};

export default Dashboard;
