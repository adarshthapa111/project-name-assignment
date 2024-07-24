import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <h1 className="font-bold text-semibold text-center text-3xl p-6">
        Task Managment Website
      </h1>
      <div className="my-4">
        <nav className="w-fit mx-auto rounded-full shadow-md border border-gray-200">
          <ul className="flex justify-center p-4 px-8 space-x-8 bg-gray-50 rounded-full">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "text-red-500 font-semibold" : ""
              }
            >
              Home
            </Link>
            <Link
              to="/AddTask"
              className={
                location.pathname === "/AddTask" ? "text-red-500  font-semibold" : ""
              }
            >
              Add Task
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
