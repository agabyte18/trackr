import { prisma } from "@/prisma/client";
import Link from "next/link";
import Avatar from "../components/Avatar";
import IssueStatusBadge from "./IssueStatusBadge";
import IssuesToolbar from "./IssuesToolbar";
import { Status } from "../generated/prisma/enums";
import { Issue } from "../generated/prisma/client";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trackr - View issues",
  description: "Trackr - View issues",
};

const columns: { label: string; value: keyof Issue; classname?: string }[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", classname: "d-none d-sm-table-cell" },
  { label: "Created", value: "createdAt", classname: "d-none d-sm-table-cell" },
];

export default async function IssuesPage(context: {
  searchParams: Promise<{ status: Status; orderBy: keyof Issue }>;
}) {
  //
  const { status, orderBy } = await context.searchParams;

  const validStatuses = Object.values(Status);

  const validStatus = validStatuses.includes(status) ? status : undefined;

  const sortBy = columns.map((col) => col.value).includes(orderBy)
    ? { [orderBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: { status: validStatus },
    orderBy: sortBy,
  });

  return (
    <div className="container mt-5">
      <IssuesToolbar />

      <div className="row">
        <div className="fs-3 col-md-9">
          <table className="table">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col.label} className={col.classname} scope="col">
                    <Link
                      className="text-secondary"
                      href={{
                        query: { status: validStatus, orderBy: col.value },
                      }}
                    >
                      {col.value == orderBy ? `${col.label}👈` : col.label}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id}>
                  <td>
                    <Link
                      href={`/issues/${issue.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="d-flex mb-2 align-items-center">
                        <Avatar src={issue.userImage!} />

                        <span className="ms-3">{issue.title}</span>
                      </div>
                    </Link>

                    <div className="d-block d-sm-none">
                      <div className="d-flex justify-content-end">
                        <IssueStatusBadge status={issue.status} />
                      </div>
                    </div>
                  </td>

                  <td className="d-none d-sm-table-cell">
                    <IssueStatusBadge status={issue.status} />
                  </td>

                  <td className="d-none d-sm-table-cell">
                    {issue.createdAt.toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
