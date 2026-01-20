import { prisma } from "@/prisma/client";
import Link from "next/link";
import Avatar from "../components/Avatar";
import IssueStatusBadge from "./IssueStatusBadge";
import IssuesToolbar from "./IssuesToolbar";
import delay from "delay";

export const dynamic = "force-dynamic";

export default async function IssuesPage() {
  const issues = await prisma.issue.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
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
