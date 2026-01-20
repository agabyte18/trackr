import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export default async function IssueDetailsPage(context: {
  params: Promise<{ id: string }>;
}) {
  const session = await getServerSession(authOptions);

  const { id } = await context.params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) notFound();

  const user = await prisma.user.findUnique({ where: { id: issue.userId! } });

  return (
    <div className="container mt-5">
      <IssueDetails user={user!} issue={issue} />

      {session && (
        <div className="d-flex justify-content-end mt-3">
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </div>
      )}
    </div>
  );
}
