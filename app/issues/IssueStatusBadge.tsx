import { Status } from "../generated/prisma/client";

interface Props {
  status: Status;
}

export default function IssueStatusBadge({ status }: Props) {
  //

  const statusMap: Record<
    Status,
    { label: string; skin: "success" | "warning" | "danger" }
  > = {
    OPEN: { label: "Open", skin: "danger" },

    IN_PROGRESS: { label: "WIP", skin: "warning" },

    CLOSED: { label: "Closed", skin: "success" },
  };

  return (
    <span className={`fs-4 badge text-bg-${statusMap[status].skin}`}>
      {statusMap[status].label}
    </span>
  );
}
