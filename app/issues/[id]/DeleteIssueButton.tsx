"use client";

import Spinner from "@/app/components/Spinner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsTrashFill } from "react-icons/bs";

interface Props {
  issueId: number;
}

export default function DeleteIssueButton({ issueId }: Props) {
  //
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Modal Trigger */}
      <button
        className="ms-3 btn btn-danger fs-3 shadow-tile"
        data-bs-toggle="modal"
        data-bs-target="#deleteIssueModal"
        disabled={deleting}
      >
        {!deleting && (
          <>
            <BsTrashFill /> Delete
          </>
        )}

        {deleting && (
          <span className="d-flex align-items-center">
            Delete <Spinner />
          </span>
        )}
      </button>

      {/* Delete Confirmation Modal */}
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
                onClick={async () => {
                  try {
                    setDeleting(true);
                    await axios.delete(`/api/issues/${issueId}`);
                    router.push("/issues");
                    router.refresh();
                  } catch (error) {
                    setDeleting(false);
                  }
                }}
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
