import logo from "../../assets/Navbar/logo.svg";
import facebook from "../../assets/Footer/facebook.svg";
import instagram from "../../assets/Footer/instagram.svg";
import linkdin from "../../assets/Footer/linkdin.svg";
import x from "../../assets/Footer/x.svg";
import youtube from "../../assets/Footer/youtube.svg";
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isBlogPage = location.pathname === '/affiliateprogram';
  return (
    <div className={`bg-[#040B0C] ${isBlogPage ? 'pt-[48px]' : ''}`}>
    <div className='lg:max-w-[934.17px]  xsm:max-w-[284.67px] bg-[#ECFBF2] rounded-[8px] mx-auto paddingmax py-[20px] px-[32px]'>
          <div className='grid  gap-[16px] items-center lg:grid-cols-2'>
            <div>
              <h3 className='text-[#032123] IBMPlexSansSemiBold lg:text-start text-center text-[20px] leading-[30px]'>Subscribe to our Bot!</h3>
              <p className='max-w-[338px] lg:text-start text-center text-[#282B2B] pt-[12px] leading-[24px]'>
                Like and subscribe get latest news about Our <span className='text-[#51C62B]'>ZEROLOSS</span> AI bot
              </p>
            </div>
            <div className='max-w-[394px]'>
              <div className='flex lg:flex-nowrap flex-wrap	 gap-[12px]'>
                <input className='border-[1px] placeholder-[#032123] rounded-[8px] py-[8px]  px-[12px] border-[#B5C9BD]  w-full lg:w-[276px] h-[44px]' placeholder='Your e-mail address' />
                <button className='bg-[#41D87B] leading-[24px] lg-w-[106px] w-full h-[44px] rounded-[6px]'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      <div className=" max-w-[1400px] mx-auto w-full px-4 py-12">
        <div className="flex items-start md:px-32 justify-between sm:w-full sm:flex-col sm:items-start sm:gap-12  xsm:w-full xsm:flex-col xsm:items-center xsm:gap-12">
          <div>
            <a href="#home">
              <img src={logo} alt="" />
            </a>
            <p className="font-ibmplex font-medium text-[16px] py-8 text-[#BBB9C9]">
              With ZeroLoss(Bot), you maintain complete control
              <br /> over your account. Connect with our fully automated
              <br /> trading bot and start maximizing your earnings
              <br /> effortlessly, 24/7, every day of the year.
            </p>
            <div className="flex flex-col xsm:items-center xsm:justify-center xsm:w-full">
              <div className="flex items-center gap-6 py-4">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkdin} alt="" />
                <img src={x} alt="" />
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
          <div className="flex xsm:flex-col xsm:w-full md:flex-row md:w-auto gap-[50px]">
            <div className="font-normal text-[20px] text-[#C4CBCB] font-ibmplex flex flex-col gap-2">
              <h4 className="text-xl text-[#C4CBCB] font-semibold">About US</h4>
              <a href="#">Team</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="">Blog</a>
            </div>
            <div className="font-normal text-[20px] text-[#C4CBCB] font-ibmplex flex flex-col gap-2">
              <h4 className="text-xl text-[#C4CBCB] font-semibold">
                {" "}
                <a href="#product">Product Explanation</a>
              </h4>
              <a href="#">Features</a>
              <a href="#live-position-history">Live Position History</a>
              <a href="#">Solutions</a>
              <a href="">Integration</a>
              <a href="">Pricing</a>
            </div>
            <div className="font-normal text-[20px] text-[#C4CBCB] font-ibmplex flex flex-col gap-2">
              <h4 className="text-xl text-[#C4CBCB] font-semibold">Support</h4>
              <a href="#">Help Center</a>
              <a href="#security">security</a>
              <a href="#faq">FAQ</a>
              <a href="">Contact US</a>
            </div>
          </div>
        </div>
        <hr className="w-10/12 mt-5 mx-auto border-[#202626]" />
        <div className="flex items-center md:px-32 justify-between sm:w-full xsm:flex-col sm:flex-col sm:items-start sm:gap-0  xsm:w-full xsm:flex-col xsm:items-center xsm:gap-0">
          <p className="font-ibmplex md:w-auto xsm:w-full  font-normal text-sm py-8 text-white">
            Copyright © 2023 - 2024
            <strong className="font-bold"> Zeroloss.ai</strong> . All rights
            reserved.
          </p>
          <ul className="list-disc xsm:text-xs sm:text-xs xsm:gap-1.5 sm:gap-1.5 flex gap-4 xsm:py-5 sm:py-5">
            <li className="ml-4">Terms of use</li>
            <li className="ml-4">Privacy policy</li>
            <li className="ml-4">Cookies policy</li>
            <li className="ml-4">Disclaimer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
