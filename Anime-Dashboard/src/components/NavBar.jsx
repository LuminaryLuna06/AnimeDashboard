import React from "react";

function NavBar() {
  return (
    <div className="navbar bg-[#23252b] text-neutral-content h-5 sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-neutral"
          >
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/anime">Anime</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl" href="/">🌸Anime Website</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-lg ">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/anime">Anime</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" href="/admin">
          Admin
        </a>
      </div>
    </div>
  );
}

export default NavBar;
