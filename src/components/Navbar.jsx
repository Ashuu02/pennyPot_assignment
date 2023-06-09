import React from "react";
import { useState } from "react";
import NavLogo from "../img/insights-removebg.svg";
// import NavLogo from "../img/insights.png";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" text-gray-200 bg-[#262626] ">
      <div className="flex justify-between items-center max-w-[97%] px-2 2xl:px-16">
        {/* <Link href="/"> */}
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
          }}
          className=" md:ml-10"
        >
          <img
            src={NavLogo}
            alt="/"
            // width="200"
            // height="200"
            className="cursor-pointer w-[150px] h-[100px] md:w-[200px] md:h-[150px] text-white"
          />
        </a>
        {/* </Link> */}

        <div>
          <ul className="flex text-10px md:text-[18px] font-semibold md:mr-20">
            <li className="ml-5 sm:ml-10 hover:border-b">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="ml-5 sm:ml-10 hover:border-b ">
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                Tags
              </a>
            </li>
            {/* <li className="ml-10 hover:bg-[#262626] bg-gray-300 p-1 rounded-xl text-[#262626] hover:text-white hover:border-white border-y-2 "> */}
            <li className=" ml-5 sm:ml-10 bg-gray-300 hover:bg-gray-400 p-1 rounded-full px-3 text-[#262626]">
            <Link to={"/write"}>Write</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          {/* <div
            // style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="cursor-pointer text-white md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div> */}
        </div>
      </div>

      {/* Mobile view */}
      {/* <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        ></div>
      </div> */}
    </div>
  );
};

export default Navbar;
