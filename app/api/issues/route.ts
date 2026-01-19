import authOptions from "@/app/auth/authOptions";
import { createIssueSchema } from "@/app/validationSchemas";
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  //
  const session = await getServerSession(authOptions);

  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await req.json();

  const result = createIssueSchema.safeParse(body);

  if (!result.success)
    return NextResponse.json(result.error.issues, { status: 400 });

  const users = await prisma.user.findMany({
    where: { image: session.user?.image },
  });

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
      userId: users[0].id,
      userImage: users[0].image,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
