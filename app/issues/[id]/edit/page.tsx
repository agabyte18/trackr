import { prisma } from "@/prisma/client";
import IssueForm from "../../IssueForm";
import { notFound } from "next/navigation";

export default async function EditIssuePage(context: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await context.params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
}
