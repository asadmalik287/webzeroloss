import React from "react";
import Header from "../layout/Navbar/index";
import Footer from "../layout/Footer/index";
import curve from "../assets/images/curve.png";
import pikaso_embed from "../assets/images/pikaso_embed.png";
import blondeposing from "../assets/images/blonde-posing-credit-card-shopping-bags.png";
import BlogCard from "../components/BlogCard";
import { useState } from "react";
import Slider from "react-slick";
import BlogComponent from "../components/BlogComponent";
import blogImage2 from "../assets/images/blog-2.png";
import blogImage3 from "../assets/images/blog-3.png";
import blogImage4 from "../assets/images/blog-4.png";
import chart from "../assets/images/chart.png";
import blogcard6 from "../assets/images/blogcard6.png";
import blogcard7 from "../assets/images/blogcard7.png";
import blogcard8 from "../assets/images/blogcard8.png";
import JoinProgram from "../components/Landing/JoinProgram";
import JoinPrgmImg1 from "../assets/JoinProgram/JoinPrgmImg1.png";
const Blog = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Popular Article", component: <BlogComponent /> },
    { id: "tab2", label: "Latest Article", component: <BlogComponent /> },
    { id: "tab3", label: "Market Analysis", component: <BlogComponent /> },
    { id: "tab4", label: "Product Updates", component: <BlogComponent /> },
    { id: "tab5", label: "Reviews", component: <BlogComponent /> },
  ];
  return (
    <>
      <section className="affiliateprogram">
        <Header />
        <div className="lg:pt-[176px] xsm:pt-[116px] pt-[20px]  max-w-[1376px] mx-auto paddingmax">
          <div className="flex w-[264px] lg:flex-row flex-col  mx-auto lg:w-auto flex-wrap lg:justify-between justify-center">
            <div>
              <h1 className="lg:text-[40px] text-[20.01px] IBMPlexSansSemiBold text-[#D3DBDB] lg:leading-[48px]">
                ZERO<span className="text-[#51C62B]">LOSS</span> Blog Center
              </h1>
              <img src={curve} className="xsm:w-[80px]" />
            </div>
            <div className="md-[mt-0] mt-[20px]">
              <form className="flex items-center max-w-lg mx-auto">
                <label htmlFor="voice-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="voice-search"
                    className="lg:w-[387px] h-[44px] bg-[#8FF1FF1A] text-[#6D9297] text-sm rounded-[10px] block w-full pe-10 p-2.5   dark:placeholder-[#6D9297]"
                    placeholder="Enter a keyword to search..."
                    required=""
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                  >
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:mt-[77px] mt-[20px] text-center mx-auto lg:max-w-[916px] max-w-[264px] relative">
          <img src={pikaso_embed} alt="..." className="rounded-t-[12px]" />
          <div className="absolute top-0 lg:left-[-102px] left-[-20px] blog-header-card w-full h-full flex items-center">
            <div className="blog-banner-card lg:rounded-[12px] rounded-[4px] lg:px-[32px] px-[12px] lg:py-[52px] py-[10px] lg:w-[580px] w-[190px]">
              <h1 className="lg:text-[32px] text-[10px] text-start IBMPlexSansSemiBold lg:leading-[42px] text-[#032123] IBMPlexSansBold">
                AI Revolutionizes Crypto Trading in 2024
              </h1>
              <p className="lg:text-[16px] text-[6px] IBMPlexSansRegular text-start lg:pt-[16px] pt-[6px] lg:leading-[24px] leading-[6px] text-[#032123]">
                In 2024, AI revolutionizes crypto trading by offering advanced
                analytics, predictive models, and automated strategies, enabling
                traders to make smarter, faster decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className=" items-center lg:py-[97px] xsm:py-[20px] sm:py-[20px] paddingmax bg-[#ECFBF2] ">
        <div className="mx-auto lg:max-w-[1376px]   pb-[16px]  border-b border-b-[#DCE0DD] flex justify-between">
          <div>
            <h2 className="text-[#032123] lg:text-[40px] text-[18px] leading-[48px] IBMPlexSansSemiBold">
              Latest Article
            </h2>
          </div>
          <div>
            <button className="bg-[#FBFFFD] lg:px-[16px] px-[14px] lg:py-[12px] py-[8px] lg:text-[16px] text-[14px] IBMPlexSansBold border text-[#032123] border-[#DCE0DD] ">
              See All
            </button>
          </div>
        </div>
        {/*  */}
        <section className="lg:pt-[88px] pt-[16px] overflow-hidden">
          <Slider {...settings}>
            <div className="">
              <BlogCard image={blogImage2} />
            </div>
            <div className="">
              <BlogCard image={chart} />
            </div>
            <div className="">
              <BlogCard image={blogImage2} />
            </div>
            <div className="">
              <BlogCard image={blogImage3} />
            </div>
            <div className="">
              <BlogCard image={blogImage4} />
            </div>
            <div className="">
              <BlogCard image={chart} />
            </div>
          </Slider>
        </section>
        {/*  */}
      </section>
      <section className="bg-[#040B0C] paddingmax  lg:pt-[187px] pt-[32px] lg:pb-[64px] pb-[32px]">
        <div className="flex justify-between  border border-[#FF0090] blogspurplegradient relative max-w-[1035.91px] lg:min-h-[330px] mx-auto  lg:px-[72px] lg:rounded-[24px] rounded-[6px] bg-[#131229]">
          <div className="lg:py-[55px] py-[12px] lg:px-[0px]  ps-[24px] lg:w-auto w-[180px]">
            <h2 className="text-[#D3DBDB] max-w-[360px] lg:text-[32px] text-[12px] lg:leading-[42px] IBMPlexSansSemiBold">
              Want to access our ZERO
              <span className="text-[#51C62B]">LOSS</span> ai bot?
            </h2>
            <p className="max-w-[360px] lg:text-[16px] text-[8px] IBMPlexSansRegular lg:pt-[8px] pt-[3px] lg:leading-[24px] leading-[12px] text-[#FCF4F4]">
              Unlock the power of ZEROLOSS AI—your ultimate solution for smart,
              risk-free auto trading.
            </p>
            <div className="flex lg:pt-[32px] pt-[12px] ">
              <button className="lg:px-[32px] text-[#031E0D] lg:text-[16px] text-[8px] px-[12px] py-[10px] bg-[#41D87B] rounded-[8px]">
                Register
              </button>
              <button className="lg:px-[32px] text-[#031E0D] lg:text-[16px] text-[8px] px-[12px] py-[10px] bg-[#D9E2DF] rounded-[8px] ml-[16px]">
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <img
              className="lg:mt-[-126px] lg:w-auto w-[118px] relative"
              src={blondeposing}
            />
          </div>
        </div>
      </section>
      {/*  */}
      <section className="pt-[100.09px] pb-[48px] paddingmax bg-[#ECFBF2]">
        <div className="max-w-[1376px] paddingmax m-auto">
          <div className="flex space-x-4 border-b whitespace-nowrap	 lg:overflow-auto overflow-scroll ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button text-[22px] text-[#032123] pe-[24px] pb-[6px]   ${
                  activeTab === tab.id
                    ? "active border-[#042224] border-b IBMPlexSansSemiBold"
                    : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content mt-4">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-item ${
                  activeTab === tab.id ? "active" : "hidden"
                }`}
              >
                {tab.component}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  */}

      {/*  */}
      <section className="bg-[#040B0C] pt-[187px] hidden  pb-[64px]">
        <div className="flex  justify-between rounded-[24px] blogspurplegradient2 border border-[#DAECE1] relative max-w-[1200px] min-h-[330px] mx-auto  px-[72px] bg-[#131229]">
          <div className="py-[55px] text-center max-w-[716px]">
            <h2 className="text-[#D3DBDB]  text-[24px] leading-[36px]">
              JOIN OUR AFFILIATE PROGRAM
            </h2>
            <h2 className="text-[#D3DBDB]  text-[32px] leading-[48px] IBMPlexSansSemiBold">
              <span className="text-[#41D77B]"> Earn up to 20%</span> in monthly
              recurring referral incentives based on the monthly profit of the
              customers you refer.
            </h2>
            <div>
              <button className="bg-[#41D87B] mt-[32px] leading-[24px] px-[32px] py-[10px] rounded-[6px]">
                Join the Affiliate Program
              </button>
            </div>
          </div>
          <div className="">
            <img className="lg:mt-[-20px] relative" src={blondeposing} />
          </div>
        </div>
      </section>

      {/*  */}

      {/*  */}
      <section className="  bg-[#ECFBF2]">
        <div className="py-[48px] max-w-[1376px] m-auto  m-auto pb-[48px] paddingmax">
          <div className="grid lg:pt-[64px] pt-[20px] grid-cols-1 lg:grid-cols-12 lg:gap-[15px]">
            <div className="col-span-4">
              <BlogCard image={blogcard6} />
            </div>
            <div className="col-span-4">
              <BlogCard image={blogcard7} />
            </div>
            <div className="col-span-4">
              <BlogCard image={blogcard8} />
            </div>
          </div>
          <div className="flex justify-end pt-[44px]">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-gray-600 hover:text-gray-800">
                &lt;
              </button>
              <button className="px-3 py-1 text-gray-600 hover:text-gray-800">
                1
              </button>
              <button className="px-3 py-1 text-[#282B2B] bg-[#FBFFFD]  border border-gray-400">
                2
              </button>
              <button className="px-3 py-1 text-gray-600 hover:text-gray-800">
                3
              </button>
              <span className="px-3 py-1 text-gray-600">...</span>
              <button className="px-3 py-1 text-gray-600 hover:text-gray-800">
                9
              </button>
              <button className="px-3 py-1 text-gray-600 hover:text-gray-800">
                10
              </button>
              <button className="px-3 py-1 text-white bg-gray-400 rounded-md hover:bg-gray-500">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
      <JoinProgram image={JoinPrgmImg1} />

      {/*  */}
      <Footer />
    </>
  );
};

export default Blog;
