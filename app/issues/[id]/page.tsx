import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueStatusBadge from "../IssueStatusBadge";
import delay from "delay";

export default async function IssueDetails(context: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await context.params;

  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });
  await delay(3000);

  if (!issue) notFound();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ height: "140px" }}
          >
            <h1>{issue.title}</h1>

            <div
              className="d-flex flex-column justify-content-between"
              style={{ height: "100%" }}
            >
              <IssueStatusBadge status={issue.status} />

              <span className="fs-2">
                {issue.createdAt.toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 fs-2">
          <div className="fs-2 lh-2 p-3 mt-5 shadow-border">
            <div dangerouslySetInnerHTML={{ __html: issue.description }} />
          </div>
        </div>
      </div>
    </div>
  );
}
