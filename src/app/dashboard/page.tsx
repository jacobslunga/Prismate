import SearchBar from "@/components/SearchBar";
import { db } from "@/db";
import { authOptions } from "@/lib/util/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FC } from "react";

import { Button } from "@/components/ui/button";
import DesignSystem from "@/components/DesignSystem";

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
    <div className="flex flex-col items-center bg-zinc-50 dark:bg-zinc-900 justify-start py-5 w-screen lg:w-[75%] absolute right-0 min-h-screen">
      <SearchBar />
      <DesignSystem />
    </div>
  );
};

export default Dashboard;
