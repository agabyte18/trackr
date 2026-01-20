import authOptions from "@/app/auth/authOptions";
import { updateIssueSchema } from "@/app/validationSchemas";
import { prisma } from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const session = await getServerSession(authOptions);

  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await req.json();
  const result = updateIssueSchema.safeParse(body);

  if (!result.success)
    return NextResponse.json(result.error.issues, { status: 400 });

  const { id } = await context.params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) return NextResponse.json("invalid issue", { status: 404 });

  const { title, status, description, userId } = body;

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: { title, status, description, userId },
  });

  return NextResponse.json(updatedIssue);
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  //
  const session = await getServerSession(authOptions);

  if (!session) return NextResponse.json({}, { status: 401 });

  const { id } = await context.params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) return NextResponse.json("Invalid Issue", { status: 404 });

  await prisma.issue.delete({ where: { id: issue.id } });

  return NextResponse.json({});
}
