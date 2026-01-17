import Link from "next/link";

export default function IssuesToolbar() {
  return (
    <div className="mb-5 d-flex align-items-center justify-content-between">
      <h1>Issues</h1>
      <Link href="/issues/new" className="btn btn-primary fs-3 shadow-pri">
        New Issue
      </Link>
    </div>
  );
}
