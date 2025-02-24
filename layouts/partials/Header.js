"use client";

import Logo from "@components/Logo";
import menu from "@config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import config from "../../config/config.json";

const Header = () => {
  const pathname = usePathname();
  const { main } = menu;
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <header className="header">
      <nav className="navbar container">
        <div className="order-0">
          <Logo src={logo} />
        </div>
        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center fixed top-4 right-4 z-50"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>
        <div
          id="nav-menu"
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            navOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-40`}
        >
          <ul className="navbar-nav mt-16 space-y-4">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li
                    className="nav-item nav-dropdown group relative"
                    onMouseEnter={() => toggleDropdown(i)}
                    onMouseLeave={() => toggleDropdown(null)}
                  >
                    <Link
                      href={menu.url}
                      className="nav-link inline-flex items-center px-4 py-2"
                      onClick={() => setNavOpen(false)}
                    >
                      {menu.name}
                      <svg
                        className="h-4 w-4 fill-current ml-1"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </Link>
                    <ul
                      className={`nav-dropdown-list relative left-4 top-0 mt-0 w-76 bg-white rounded-md shadow-lg z-20 ${
                        dropdownOpen === i ? "block" : "hidden"
                      }`}
                    >
                      {menu.children.map((child, j) => (
                        <li className="nav-dropdown-item" key={`child-${j}`}>
                          <Link
                            href={child.url}
                            className="nav-dropdown-link block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            onClick={() => {
                              setNavOpen(false);
                              setDropdownOpen(null);
                            }}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`nav-link block px-4 py-2 ${
                        pathname === menu.url ? "nav-link-active" : ""
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
            {enable && (
              <li>
                <Link
                  className="btn btn-primary z-0 py-[14px] mx-4"
                  href={link}
                  rel=""
                >
                  {label}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
