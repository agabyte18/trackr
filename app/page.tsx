import { prisma } from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trackr - Plan and build products",
  description:
    "Trackr is a purpose-built tool for planning and building products",
};

export default async function HomePage() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const wip = await prisma.issue.count({ where: { status: "IN_PROGRESS" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <IssueSummary open={open} closed={closed} wip={wip} />
        </div>
        <div className="col-md-6">
          <LatestIssues />
        </div>
      </div>
    </div>
  );
}
