"use client";

import Avatar from "@/app/components/Avatar";
import { Issue, User } from "@/app/generated/prisma/client";
import IssueStatusBadge from "../IssueStatusBadge";

interface Props {
  issue: Issue;
  user: User;
}

export default function IssueDetails({ issue, user }: Props) {
  //

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ height: "140px" }}
          >
            <h1 className="fs-1">{issue.title}</h1>

            <div
              className="d-flex flex-column justify-content-between"
              style={{ height: "100%" }}
            >
              <IssueStatusBadge status={issue.status} />

              <span className="fs-2">
                {issue.createdAt.toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center">
            <Avatar size="52px" src={user.image!} />

            <span className="ms-3 fs-4">{user.email}</span>
          </div>
        </div>

        <div className="col-md-6 fs-2">
          <div className="fs-2 lh-2 p-3 shadow-border">
            <div dangerouslySetInnerHTML={{ __html: issue.description }} />
          </div>
        </div>
      </div>
    </>
  );
}
