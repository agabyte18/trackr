import { updateIssueSchema } from "@/app/validationSchemas";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const body = await req.json();
  const result = updateIssueSchema.safeParse(body);

  if (!result.success)
    return NextResponse.json(result.error.issues, { status: 400 });

  const { id } = await context.params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) return NextResponse.json("invalid issue", { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      status: body.status,
      description: body.description,
    },
  });

  return NextResponse.json(updatedIssue);
}
