import { prisma } from "@/prisma/client";
import Link from "next/link";

export default async function IssuesPage() {
  const issues = await prisma.issue.findMany();

  return (
    <div className="container mt-5">
      <div className="mb-5 d-flex align-items-center justify-content-between">
        <h1>Issues</h1>
        <Link href="/issues/new" className="btn btn-primary fs-3 shadow-pri">
          New Issue
        </Link>
      </div>

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
                    {issue.title}

                    <div className="d-block d-sm-none">{issue.status}</div>
                  </td>
                  <td className="d-none d-sm-table-cell">{issue.status}</td>
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
