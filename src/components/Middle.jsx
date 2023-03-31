import React from "react";
import blog2 from "../img/blog2.png";

const Middle = () => {
  return (
    <div className=" bg-[#f5f5f5] relative">
      <div className="  flex items-center justify-center relative px-4 sm:px-10 w-full mt-10 ">
        <div className=" p-[20px] sm:p-[40px] sm:pt-[100px] pt-[70px] bg-white mb-[170px] shadow-xl w-[100%] sm:w-[80%] mt-[-110px] shadow-[#26262688]">
          <p className="underline underline-offset-8 text-gray-500 text-sm ">
            Latest insights
          </p>

          <div className="w-full text-center m-auto items-center p-3 ">
            <div className=" mt-10 md:px-[200px] text-left">
              <h2 className="font-bold  text-gray-700 text-[25px] sm:text-[35px] ">
                Life Insurance: Securing Your Future
              </h2>
              <p className=" text-xs mt-3 text-gray-400 ">
                investing | 5 minute read
              </p>
              <p className="sm:text-[21px] text-[15px] font-semibold text-[#555555] mt-5  ">
                Death is an inevitability, and while it’s a difficult topic to
                discuss, planning for the future is essential. Life insurance is
                an investment in the future, which can provide financial
                security for your loved ones in the event of your untimely
                demise.
              </p>
              <button className=" rounded-full bg-[#464646] text-[#fbfbfb] px-8 py-2 md:mt-[60px] mt-7 text-base font-bold">
                Read Now
              </button>
            </div>

            <div className=" mt-[160px] md:px-[200px] text-left">
              <h2 className="font-bold  text-gray-700 text-[25px] sm:text-[35px] ">
                Mastering Your Finances: Expert Tips and Strategies to Achieve
                Your Financial Goals
              </h2>
              <p className=" text-xs mt-3 text-gray-400 ">
                Investing | 5 minute read
              </p>
              <img
                src={blog2}
                alt="pennypot_image"
                className="my-2 rounded-md"
              />
              <p className="sm:text-[21px] text-[15px] font-semibold text-[#555555] mt-5  ">
                Managing personal finances can be a daunting task, but with the
                right knowledge and strategies, anyone can create a roadmap to
                financial success. Whether you’re a seasoned investor or just
                starting to take control of your finances, this blog has
                something for everyone.
              </p>
              <button className=" rounded-full bg-[#464646] text-[#fbfbfb] px-8 py-2 md:mt-[60px] mt-7 text-base font-bold">
                Read Now
              </button>
            </div>

            <div className=" mt-[160px] md:px-[200px] text-left">
              <h2 className="font-bold  text-gray-700 text-[25px] sm:text-[35px] ">
                Maximizing Your Savings with Post Office Monthly Income Scheme
              </h2>
              <p className=" text-xs mt-3 text-gray-400 ">
                investing | 5 minute read
              </p>
              <p className="sm:text-[21px] text-[15px] font-semibold text-[#555555] mt-5  ">
                If you’re looking for a safe and reliable investment option to
                generate a steady stream of monthly income, the Post Office
                Monthly Income Scheme (POMIS) is worth considering. Backed by
                the Government of India, this scheme offers attractive interest
                rates and guaranteed returns, making it a popular choice among
                conservative investors.
              </p>
              <button className=" rounded-full bg-[#464646] text-[#fbfbfb] px-8 py-2 md:mt-[60px] mt-7 text-base font-bold">
                Read Now
              </button>
            </div>

            <div className=" mt-[160px] ">
              <button className=" rounded-full bg-[#464646] text-[#fbfbfb] px-8 py-2 md:mt-[60px] mt-7 text-base font-bold">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
