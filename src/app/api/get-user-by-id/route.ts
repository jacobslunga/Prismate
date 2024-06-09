import { NextApiRequest } from "next";
import { db } from "@/db";
import { notFound } from "next/navigation";

export async function GET(req: NextApiRequest) {
  const { id } = req.query;

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

  return Response.json(user);
}
