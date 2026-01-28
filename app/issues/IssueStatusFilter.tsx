"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Status } from "../generated/prisma/enums";

const statuses: { label: string; value: "" | Status }[] = [
  { label: "All", value: "" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
  { label: "In Progress", value: "IN_PROGRESS" },
];

export default function IssueStatusFilter() {
  //
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div>
      <select
        defaultValue={searchParams.get("status") || ""}
        onChange={(e) => {
          const params = new URLSearchParams();
          if (e.target.value) params.append("status", e.target.value);
          if (searchParams.get("orderBy"))
            params.append("orderBy", searchParams.get("orderBy")!);
          const query = params.size ? `?${params.toString()}` : "";
          router.push("/issues" + query);
        }}
        className="fs-3 shadow-tile form-select"
      >
        {statuses.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
