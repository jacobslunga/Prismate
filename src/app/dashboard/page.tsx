import { db } from "@/db";
import { authOptions } from "@/lib/util/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FC } from "react";

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

  console.log(user);

  return (
    <div className="flex flex-row items-center justify-center w-screen min-h-screen"></div>
  );
};

export default Dashboard;
