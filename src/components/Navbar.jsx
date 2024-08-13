import React from "react";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="flex justify-between p-5 items-center ">
      <div>
        <Link to="/">
          <h1 className="font-semibold w-4/5 text-3xl text-gray-700">
            <span className="text-indigo-700">Stem</span>Tec
          </h1>
        </Link>
      </div>

      <div>
        <div className="menu-icon hidden ml-auto" onClick={handleShowNavbar}>
          <FaBars className="h-6 w-6" />
        </div>
        <nav className="">
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul className="flex list-none	justify-between	space-x-10 text-white md:text-gray-900">
              <li>
                <Link
                  to="/"
                  className="hover:underline decoration-sky-800 underline-offset-4"
                  onClick={handleShowNavbar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="hover:underline decoration-sky-800 underline-offset-4"
                  onClick={handleShowNavbar}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/Products"
                  className="hover:underline decoration-sky-800 underline-offset-4"
                  onClick={handleShowNavbar}
                >
                  Products
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/Courses"
                  className="hover:underline decoration-sky-800 underline-offset-4"
                  onClick={handleShowNavbar}
                >
                  Courses
                </Link>
              </li> */}
              <li>
                <Link
                  to="/Contact"
                  className="hover:underline decoration-sky-800 underline-offset-4"
                  onClick={handleShowNavbar}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
