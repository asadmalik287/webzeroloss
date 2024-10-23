import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
const JoinProgram = ({ image }) => {
  return (
    <>
      <div className="bg-[#040B0C] xsm:pt-5 xsm:pb-6 sm:pt-5 sm:pb-6 pt-32 pb-16 px-5 md:px-20 lg:px-36">
        <div
          className="md:px-10 lg:px-10 xsm:py-4 sm:py-4 py-4 md:py-7 lg:py-7 border border-[#DAECE1] rounded-3xl flex relative xsm:rounded-md sm:rounded-md xsm:flex-col-reverse sm:flex-col-reverse xsm:items-center sm:items-center"
          style={{
            background:
              "linear-gradient(0deg, rgba(65, 216, 123, 0.06) 0%, rgba(4, 11, 12, 0.3) 52.49%)",
          }}
        >
          <div className="text-center w-[69%]">
            <p className="text-[#ECFBF2] font-semibold xsm:text-[8px] sm:text-base xsm:my-2.5 sm:my-2.5 md:text-xl lg:text-[24px] font-ibmplex">
              JOIN OUR AFFILIATE PROGRAM
            </p>
            <h1 className="font-ibmplex font-semibold xsm:text-xs sm:text-xs  md:text-3xl lg:text-[40px] text-white leading-5 md:leading-9 lg:leading-[52px]">
              <span className="font-bold text-[#41D77B]">
                Earn up to 20% &nbsp;
              </span>
              in monthly recurring
              <br className="xsm:hidden sm:hidden" /> referral incentives based
              on the monthly profit of the customers you refer.
            </h1>
           <Link to="/affiliateprogram">
           <button className="xsm:py-1 xsm:px-2 sm:py-1 sm:px-2 md:py-2.5 md:px-2 lg:py-2.5 lg:px-2 xsm:mt-1.5 sm:mt-1.5 mt-8  mt-8 mx-auto xsm:rounded rounded-[8px] bg-[#41D87B] font-medium font-ibmplex xsm:text-[10px] sm:text-[10px] text-[16px] text-[#031E0D] flex items-center justify-center xsm:gap-6 sm:gap-6">
              Join the Affiliate Program{" "}
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="xsm:text-[12px] sm:text-[12px] "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 7l-10 10" />
                <path d="M8 7l9 0l0 9" />
              </svg>
            </button>
            </Link>
          </div>
          <div className="absolute xsm:relative sm:relative xsm:right-1 sm:right-1 right-3 bottom-0">
            <img
              src={image}
              alt="Join Program 1"
              className="w-[107px] h-[120px] sm:w-[190px] md:w-[240px] lg:w-[280px] xl:w-[336px] sm:h-[220px] md:h-[280px] lg:h-[324px] xl:h-[380px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinProgram;
