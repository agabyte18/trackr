import Link from "next/link";
import Skeleton from "../components/Skeleton";
import IssuesToolbar from "./IssuesToolbar";

export default function LoadIssuesPage() {
  const issues = [1, 2, 3, 4, 5];

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
                <tr key={issue}>
                  <td>
                    <Skeleton />
                  </td>

                  <td className="d-none d-sm-table-cell">
                    <Skeleton />
                  </td>

                  <td className="d-none d-sm-table-cell">
                    <Skeleton />
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
