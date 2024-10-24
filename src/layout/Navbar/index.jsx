import { useState } from "react";
import logo from "../../assets/Navbar/logo.svg";
import { FaBars } from "react-icons/fa"; // Use Font Awesome for the bars icon
import { IoMdClose } from "react-icons/io"; // Use Font Awesome for the close icon
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative max-w-[1400px] mx-auto">
      <div className=" flex justify-between  items-center px-[20px] lg:px-[50px] h-[60px] absolute  w-full  z-[1000] py-[60px]">
       <Link to="/"> <img src={logo} alt="Logo" className="h-[30px]" /></Link>

        <div className="lg:hidden flex items-center">
          <FaBars
            className="text-white text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        <div className="hidden lg:flex justify-between items-center gap-8 w-full pl-16">
          <div className="font-ibmplex m-auto font-medium text-[16px] text-[#C4CBCB] flex items-center gap-6">
            <a href="/#product">Product </a>
            <a href="/#security">Security</a>
            <a href="/#faq">FAQ</a>
            <Link
              to="/affiliateprogram"
              className="flex items-center gap-2"
            >
              {/* <span className="w-[9px] h-[9px] block rounded-full bg-[#37BD70]"></span> */}
              Affiliate Partnership
            </Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-[120px] h-[44px] rounded-[8px] px-[32px] py-[10px] bg-[#D9E2DF] font-ibmplex font-medium text-[16px] text-[#031E0D]">
              Sign Up
            </button>
            <button className="w-[120px] h-[44px] rounded-[8px] px-[32px] py-[10px] bg-[#41D87B] font-ibmplex font-medium text-[16px] text-[#031E0D]">
              Sign In
            </button>
          </div>
        </div>

        {/* Sidebar for mobile */}
        <div
          className={`fixed top-0 left-0 h-full w-[70%] bg-black z-50 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto`}
          style={{ height: "100vh" }}
        >
          {/* Sidebar content */}
          <div className="flex justify-between items-center px-4 py-4">
            <img src={logo} alt="Logo" className="h-[30px]" />
            <IoMdClose
              className="text-white text-3xl cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <div className="font-ibmplex font-medium text-[16px] text-[#C4CBCB] flex flex-col items-start gap-6 px-4">
            <a href="">Product </a>
            <a href="">Security</a>
            <a href="#faq">FAQ</a>
            <a
              href="#live-position-history"
              className="flex items-center gap-2"
            >
              <span className="w-[9px] h-[9px] block rounded-full bg-[#37BD70]"></span>
              Live Position History
            </a>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="flex flex-col gap-4 mt-4 px-4">
            <button className="w-full h-[44px] rounded-[8px] bg-[#D9E2DF] font-ibmplex font-medium text-[16px] text-[#031E0D]">
              Sign Up
            </button>
            <button className="w-full h-[44px] rounded-[8px] bg-[#41D87B] font-ibmplex font-medium text-[16px] text-[#031E0D]">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
