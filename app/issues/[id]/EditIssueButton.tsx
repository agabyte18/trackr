import Link from "next/link";
import { MdEditNote } from "react-icons/md";

interface Props {
  issueId: number;
}

export default function EditIssueButton({ issueId }: Props) {
  //
  return (
    <Link
      href={`/issues/${issueId}/edit`}
      className="btn btn-primary fs-3 shadow-tile"
    >
      <MdEditNote /> Edit issue
    </Link>
  );
}
