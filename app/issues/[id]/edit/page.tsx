import { prisma } from "@/prisma/client";
import EditIssueForm from "./EditIssueForm";
import { notFound } from "next/navigation";

export default async function EditIssuePage(context: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await context.params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) notFound();

  return <EditIssueForm issue={issue} />;
}

export async function generateMetadata(context: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await context.params;
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  return {
    title: `Trackr - Edit ${issue?.title}`,
    description: `Trackr - Edit ${issue?.title}`,
  };
}
