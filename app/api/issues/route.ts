import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createIssueSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
});

export async function POST(req: NextRequest) {
  //
  const body = await req.json();

  const result = createIssueSchema.safeParse(body);

  if (!result.success)
    return NextResponse.json(result.error.issues, { status: 400 });

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
