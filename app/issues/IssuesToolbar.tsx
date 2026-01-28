import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";

export default function IssuesToolbar() {
  return (
    <div className="mb-5 d-flex align-items-center justify-content-between">
      <IssueStatusFilter />

      <Link href="/issues/new" className="btn btn-primary fs-3 shadow-tile">
        New Issue
      </Link>
    </div>
  );
}
