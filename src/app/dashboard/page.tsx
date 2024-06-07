import { authOptions } from "@/lib/util/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FC } from "react";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = async ({}) => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (!session) {
    redirect("/");
  }

  return <div>page</div>;
};

export default Dashboard;
