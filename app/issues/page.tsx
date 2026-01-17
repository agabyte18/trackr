import { prisma } from "@/prisma/client";
import Link from "next/link";
import IssueStatusBadge from "./IssueStatusBadge";
import delay from "delay";
import IssuesToolbar from "./IssuesToolbar";

export default async function IssuesPage() {
  const issues = await prisma.issue.findMany();
  await delay(3000);

  return (
    <div className="container mt-5">
      <IssuesToolbar />

      <div className="row">
        <div className="fs-3 col-md-9">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Issue</th>

                {/* Hide this column on xs, show from sm and up */}

                <th scope="col" className="d-none d-sm-table-cell">
                  Status
                </th>

                <th scope="col" className="d-none d-sm-table-cell">
                  Created
                </th>
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
                      {issue.title}
                    </Link>

                    <div className="d-block d-sm-none">
                      <IssueStatusBadge status={issue.status} />
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
