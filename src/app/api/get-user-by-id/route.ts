import { NextApiRequest } from "next";
import { db } from "@/db";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/util/authOptions";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const { id } = req.query;
  console.log("id", id);

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const user = await db.user.findUnique({
    where: {
      id: id as string,
    },
  });

  if (!user) {
    return notFound();
  }

  return NextResponse.json(user, { status: 200 });
}
