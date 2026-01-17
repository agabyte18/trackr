import Link from "next/link";
import { MdEditNote } from "react-icons/md";

interface Props {
  issueId: number;
}

export default function EditIssue({ issueId }: Props) {
  //
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex justify-content-end mt-5">
          <Link
            href={`/issue/edit/${issueId}`}
            className="btn btn-primary fs-3 shadow-tile"
          >
            <MdEditNote /> Edit issue
          </Link>
        </div>
      </div>
    </div>
  );
}
