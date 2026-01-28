import Navbar from "@/app/components/Navbar";
import LatestIssues from "./LatestIssues";

export default function HomePage() {
  return (
    <div className="container mt-5">
      <LatestIssues />
    </div>
  );
}
