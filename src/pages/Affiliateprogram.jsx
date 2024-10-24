// import React from "react";
import Header from "../layout/Navbar/index";
import Footer from "../layout/Footer/index";
import heroimage from "../assets/images/heroimage.png";
import systemstatistics from "../assets/images/systemstatistics.png";
import BenefitsOfZeroLoss from "../components/BenefitsOfZeroLoss";
import JoinTheZeroLoss from "../components/JoinTheZeroLoss";

const Affiliateprogram = () => {
  const data = [
    {
      title: "Affiliates",
      subtitle: "Elevated, Partnerships",
      value: "25,000",
    },
    {
      title: "Earnings",
      subtitle: "Maximize Your Earnings",
      value: "$1,500,000",
    },
    {
      title: "Value",
      subtitle: "Average order value",
      value: "$73.09",
    },
    {
      title: "Accounts",
      subtitle: "Total created accounts",
      value: "850,000+",
    },
    {
      title: "Trades",
      subtitle: "Master Your Trades",
      value: "70,000,000+",
    },
    {
      title: "Users",
      subtitle: "Monthly active users",
      value: "50,000+",
    },
  ];
  return (
    <>
      <section className="affiliateprogram">
        <Header />
        <div className="affiliateprogram-hero paddingmax max-w-[1376px] xsm:pt-[140px] lg:pt-[127px] mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 text-white lg:text-start text-center lg:col-span-5">
              <span className="topbtn text-[#BAC9C5] lg:text-start lg:mt-[0px] mt-[8px] text-center text-sm/[14px] w-[145px] h-[20px]">
                Boost Your Earnings
              </span>
              <h1 className="lg:text-[48px] lg:text-start text-center text-[18px] lg:leading-[56px] leading-[28px] IBMPlexSansSemiBold font-bold pt-[16px] text-[#D3DBDB]">
                Join the Leading Affiliate Network –{" "}
                <span className="text-[#41D87B]">Earn up to 20%</span>
              </h1>
              <p className="lg:text-[16px] lg:text-start text-center  lg:mt-[0px] mt-[12px] text-[14px]  text-[#C4CBCB] max-w-[588px] pt-[24px]">
                Partner with us and unlock the potential for substantial passive
                income. Our affiliate program offers competitive commissions,
                real-time tracking, and exclusive promotional tools to help you
                succeed. Join today and start turning your traffic into revenue!
              </p>
              <button className="bg-[#41D87B] w-[267px] h-[48px] text-[#031E0D] rounded-[12px] lg:mt-[32px] mt-[24px]">
                Join the Affiliate Program
              </button>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:mt-[0px] mt-[24px]">
              <img src={heroimage} className="w-full" alt="..." />
            </div>
          </div>
        </div>
      </section>
      {/* 2nd  */}
      <section className="bg-[#ECFBF2] py-[100px]">
        <div className="max-w-[1376px] mx-auto paddingmax">
          <div className="grid grid-cols-12  lg:gap-[40px] items-start">
            <div className="col-span-12 text-white lg:col-span-5">
              <h2 className="text-[#032123] IBMPlexSansSemiBold text-[40px]">
                System Statistics
              </h2>
              <p className="text-[#282B2B] IBMPlexSansRegular pt-[16px]">
                We’re proud of what we’ve accomplished alongside our partners
                over the years. Their invaluable support has been instrumental
                in our growth, enabling us to become the world’s leading
                automated trading platform today.
              </p>
              <div>
                <img
                  src={systemstatistics}
                  className="w-full mt-[24px]"
                  alt="..."
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:mt-[0px] mt-[25px]">
              <div className="grid grid-cols-2 gap-[16px] lg:grid-cols-3">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#fff] lg:px-[28px] px-[12px] lg:py-[20px] py-[12px] rounded-[12px]"
                  >
                    <div className="flex items-center">
                      <span className="w-[6px] h-[6px] rounded-[100px] bg-[#032123]"></span>
                      <h3 className="text-[#032123] lg:text-[24px] text-[18px] IBMPlexSansSemiBold leading-[36px] pl-[6px]">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-center pt-[4px]">
                      <span className="w-[6px] h-[6px] rounded-[100px] bg-[#032123] opacity-0"></span>
                      <h3 className="text-[#032123] lg:text-[14px] text-[12px]  text-[#282B2B] pl-[6px]">
                        {item.subtitle}
                      </h3>
                    </div>
                    <div className="flex items-center pt-[12px]">
                      <span className="w-[6px] h-[6px] rounded-[100px] bg-[#032123] opacity-0"></span>
                      <h3 className="text-[#032123] lg:text-[24px] text-[18px]  leading-[36px] IBMPlexSansSemiBold pl-[6px]">
                        {item.value}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[#fff] lg:px-[28px] px-[12px] lg:py-[20px] py-[12px] rounded-[12px] mt-[16px]">
                <div className="flex items-center">
                  <span className="w-[6px] h-[6px] rounded-[100px] bg-[#032123]"></span>
                  <h3 className="text-[#032123] lg:text-[16px] text-[14px] IBMPlexSansSemiBold leading-[36px] pl-[6px]">
                    Earn up to 15% per sale, with tiered commissions of 10%,
                    12.5%, and 15%.
                  </h3>
                </div>
                <div className="flex items-center pt-[14px]">
                  <span className="w-[6px] h-[6px] rounded-[100px] bg-[#032123] opacity-0"></span>
                  <h3 className="text-[#032123] text-[14px]  text-[#282B2B] pl-[6px]">
                    Terms and conditions are applied for affiliates{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2nd  */}
      <BenefitsOfZeroLoss />
      <JoinTheZeroLoss />
      <Footer />
    </>
  );
};

export default Affiliateprogram;
