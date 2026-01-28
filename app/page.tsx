import { prisma } from "@/prisma/client";
import IssueSummary from "./IssueSummary";

export default async function HomePage() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const wip = await prisma.issue.count({ where: { status: "IN_PROGRESS" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <div className="container mt-5">
      <IssueSummary open={open} closed={closed} wip={wip} />
    </div>
  );
}
