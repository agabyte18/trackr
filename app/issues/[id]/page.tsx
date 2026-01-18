import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import delay from "delay";
import IssueDetails from "./IssueDetails";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";

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

      <div className="d-flex justify-content-end mt-3">
        <EditIssueButton issueId={issue.id} />
        <DeleteIssueButton issueId={issue.id} />
      </div>
    </div>
  );
}
