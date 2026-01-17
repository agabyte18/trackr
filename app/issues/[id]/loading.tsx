import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueStatusBadge from "../IssueStatusBadge";
import delay from "delay";
import Skeleton from "@/app/components/Skeleton";

export default async function LoadIssueDetailsPage() {
  //
  return (
    <div className="container mt-5">
      <div className="fs-1 spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
