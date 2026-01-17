import Link from "next/link";
import { BsTrashFill } from "react-icons/bs";

interface Props {
  issueId?: number;
}

export default function EditIssueButton({ issueId }: Props) {
  //
  return (
    <>
      {/* Modal Trigger */}
      <button
        className="ms-3 btn btn-danger fs-3 shadow-tile"
        data-bs-toggle="modal"
        data-bs-target="#deleteIssueModal"
      >
        <BsTrashFill /> Delete
      </button>

      {/* Modal */}
      <div
        className="modal modal-lg fade"
        id="deleteIssueModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="fs-2 modal-body">Are you sure?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="fs-3 btn btn-secondary shadow-tile"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="fs-3 btn btn-danger shadow-tile"
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
