import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import delay from "delay";
import IssueDetails from "./IssueDetails";
import EditIssue from "./EditIssue";

export default async function IssueDetailsPage(context: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await context.params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  await delay(3000);

  if (!issue) notFound();

  return (
    <div className="container mt-5">
      <IssueDetails issue={issue} />

      <EditIssue issueId={issue.id} />
    </div>
  );
}
