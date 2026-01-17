"use client";

import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FcGoogle } from "react-icons/fc";

export default function Navbar() {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  const currentPath = usePathname();

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            {/* Brand */}
            <span className="fs-1 d-flex align-items-center">
              Tr
              <AiFillBug size={34} />
              ckr
            </span>
          </a>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={classNames({
                  "nav-link px-3 fs-4": true,
                  "link-secondary": currentPath != link.href,
                })}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="col-md-3 text-end">
          <button type="button" className="btn me-2 shadow-tile">
            <span className="fs-3 text-primary">
              <span className="d-flex align-items-center">
                <FcGoogle />
                <span className="ms-2">Login</span>
              </span>
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}
