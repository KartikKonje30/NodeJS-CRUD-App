import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">CRUD APP</a>
        </div>
        <div className="navbar-center justify-center">
          <label className="input">
            <svg
              className="h-[2vw] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow w-[40vw]" placeholder="Search" />
          </label>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Button</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
