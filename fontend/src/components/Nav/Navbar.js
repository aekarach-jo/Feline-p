import React, { useState } from "react";
import { logo, close, menu } from "../../assets";
import { navLinks } from "../../config";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center navbar gap-2 bg-[#2FAEB6] h-[50px] sm:h-[150px] lg:px-[42px] ">
      <div className="flex flex-col  gap-10">
        <img
          src={logo}
          alt="logo"
          width={200}
          className="pt-10 lg:pt-0 pl-5 lg:pl-0"
        />
        <div></div>
      </div>
      <div className=" flex flex-col justify-end items-end gap-3">
        <div className=" flex flex-row justify-end items-center gap-10">
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-prompt cursor-pointer text-[16px] ${
                  active === nav.title ? "text-primary " : "text-white"
                } ${
                  index === navLinks.length - 1
                    ? "mr-0"
                    : "sm:mr-5 md:mr-5 lg:mr-14"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a
                  className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] "
                  href={`#${nav.id}`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className={`w-[20px] h-[20px] mr-4 object-contain `}
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`
          ${!toggle ? "hidden" : "flex"} 
          p-6 bg-blue-gradient absolute top-11 right-0 my-2 min-w-[190px] sidebar rounded-b-3xl flex-col gap-3 z-10`}
            >
              <div className="">
                <button
                  type="button"
                  className="rounded-s-full bg-white px-3 py-2 text-sm font-prompt text-primaryBlue shadow-sm hover:bg-teal-100"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="rounded-e-full bg-white px-3 py-2 text-sm font-prompt text-primaryBlue shadow-sm hover:bg-teal-100"
                >
                  Sign in
                </button>
              </div>
              <ul className="list-none flex justify-end items-center flex-1 flex-col ">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-prompt cursor-pointer text-[16px] ${
                      active === nav.title ? "text-primary " : "text-white"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a
                      className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                      href={`#${nav.id}`}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sm:flex hidden justify-end items-center">
            <button
              type="button"
              className="rounded-s-full bg-white px-3 py-2 text-sm font-prompt text-primaryBlue shadow-sm hover:bg-teal-100"
            >
              Login
            </button>
            <button
              type="button"
              className="rounded-e-full bg-white px-3 py-2 text-sm font-prompt text-primaryBlue shadow-sm hover:bg-teal-100 "
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="w-1/3 sm:flex hidden items-center relative">
          <input
            type="text"
            required
            className="text-start block w-full rounded-3xl border-none py-1.5 ring-0 text-teal-700 shadow-sm pl-10"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-teal-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.415 1.415l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
