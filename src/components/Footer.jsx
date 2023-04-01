import React from "react";
import footerImg from "../img/pennypot.png";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#000] p-5 sm:p-20">
      <div className="w-full sm:flex flex-col-2  md:justify-between gap-20 border-x-white border-b-[1.5px] pb-10 sm:pb-20">
        <div className=" mb-16 sm:mb-0">
          <img src={footerImg} alt="Pennypot_logo" />
          <div className=" text-sm text-left pl-3 mt-5 max-w-[250px] text-gray-300">
            <p>Join the revolution and see how easy Middle makes home loans.</p>
            {/* <p>Middle makes home loans.</p> */}
          </div>
        </div>
        <div className="flex justify-between lg:gap-40 sm:gap-10">
          <div className="text-white">
            <h2 className="font-semibold text-base text-white">Company</h2>
            <div className="mt-7 text-gray-200 text-left">
              <p className="py-2 sm:pt-0 pt-8 cursor-pointer hover:text-gray-400">Contact</p>
            </div>
          </div>
          <div className="px-2">
            <h2 className="font-semibold text-base text-left text-white">
              Who we help
            </h2>
            <div className="mt-7 text-gray-200 text-left">
              <p className="py-2 cursor-pointer hover:text-gray-400 ">Customers</p>
              <p className="py-2 cursor-pointer hover:text-gray-400 ">Brokers</p>
              <p className="py-2 cursor-pointer hover:text-gray-400 ">Lenders</p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-base text-white text-left">
              Follow Us On
            </h2>
            <div className="mt-7 text-gray-200 gap-1 sm:gap-4  items-start text-left flex py-2 sm:pt-0 pt-8 ">
              {/* <div className="rounded-full max-w-[30px] max-h-[30px] sm:my-2 items-center text-center border-white p-2 border-[1.4px] font-bold"> */}
              <div className="rounded-full  cursor-pointer hover:text-gray-400 hover:border-gray-400 items-center text-center border-white p-2 border-[1.4px] font-bold">
                <FaFacebookF />
              </div>
              <div className="rounded-full cursor-pointer hover:text-gray-400 hover:border-gray-400  border-white  p-2 border-[1.4px] font-bold">
                <FaTwitter />
              </div>{" "}
              <div className="rounded-full cursor-pointer hover:text-gray-400 hover:border-gray-400  border-white  p-2 border-[1.4px] font-bold">
                <FaYoutube />
              </div>{" "}
              <div className="rounded-full cursor-pointer hover:text-gray-400 hover:border-gray-400  border-white  p-2 border-[1.4px] font-bold">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:flex justify-between text-xs mt-10 text-gray-500">
        <p>
          &copy; 2023 PennyPot | ABN 99 649 575 315 | Australian Credit Licence
          536443
        </p>
        <div className="flex gap-2 mt-5 sm:mt-0 sm:gap-5 justify-center">
          <p className="cursor-pointer">Terms & Conditions</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Privacy Collection Notice</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
