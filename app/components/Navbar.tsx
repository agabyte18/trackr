"use client";

import { GiGoat } from "react-icons/gi";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FcGoogle } from "react-icons/fc";
import { FaBugs } from "react-icons/fa6";
import Link from "next/link";
import { TfiDashboard } from "react-icons/tfi";
import { useSession } from "next-auth/react";
import Avatar from "./Avatar";
import Skeleton from "./Skeleton";

export default function Navbar() {
  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/", icon: <TfiDashboard /> },
    { label: "Issues", href: "/issues", icon: <FaBugs color="inherit" /> },
  ];

  const currentPath = usePathname();

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="fs-2 gochi d-inline-flex link-body-emphasis text-decoration-none"
          >
            {/* Brand */}
            Opsgoat
          </a>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {links.map((link) => (
            <li
              className="mx-2 shadow-tile"
              style={{ border: "1px solid grey", borderRadius: "100%" }}
              key={link.label}
            >
              <Link
                href={link.href}
                className={classNames({
                  "nav-link fs-4": true,
                  "link-secondary": currentPath != link.href,
                })}
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
        <div className="col-md-3 text-end">
          {status == "unauthenticated" && (
            <Link href="/api/auth/signin" className="btn me-2 shadow-tile">
              <span className="d-flex align-items-center fs-3 text-primary">
                <FcGoogle />
                <span className="ms-2 me-4">Login</span>
              </span>
            </Link>
          )}

          {status == "authenticated" && (
            <a
              href="/api/auth/signout"
              className="fs-3 text-danger btn me-2 shadow-tile"
            >
              <Avatar src={session.user!.image!} />
              <span className="mx-3">Sign out</span>
            </a>
          )}

          {status == "loading" && <Skeleton />}
        </div>
      </header>
    </div>
  );
}
