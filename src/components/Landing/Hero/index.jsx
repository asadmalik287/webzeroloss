import hero from "../../../assets/Hero/hero.png";
import avatar from "../../../assets/Hero/avatar.svg";
import underline from "../../../assets/Hero/underline.png";
import verified from "../../../assets/Hero/verified.svg";
import eye from "../../../assets/Hero/eye.svg";
import star from "../../../assets/Hero/star.svg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Graph from "./Graph";
import axios from "axios";
import Caution from "../../../assets/Trading/Caution.png";
const MARQUEE_DURATION = 700;

const Hero = () => {
  const [percent, setPercent] = useState(200);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const wrapper = useRef();
  const marqueeRef = useRef();

  const handleResize = () => {
    setPercent(
      (1 -
        (window.innerWidth * Math.tan((1.2 * Math.PI) / 180)) /
        wrapper.current?.getBoundingClientRect().height) *
      100
    );
  };

  useEffect(() => {
    if (wrapper.current) {
      handleResize();
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [wrapper.current]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://app.zeroloss.ai/total_pnl_by_symbol?days=7"
        );
        console.log("response.data", response.data);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0 && marqueeRef.current) {
      // GSAP animation targeting the entire container
      gsap.to(marqueeRef.current, {
        xPercent: -100,
        ease: "none",
        duration: MARQUEE_DURATION,
        repeat: -1,
      });
    }
  }, [data]);

  console.log("data", data);
  return (
    <div
      ref={wrapper}
      style={{
        clipPath: `polygon(0 0, 100% 0%, 100% ${percent}%, 0% 100%)`,
      }}
      className="flex flex-col justify-between relative"
    >
      <div id="home" className="relative w-full h-full">
        <img
          src={hero}
          alt=""
          width={1600}
          height={1373}
          className="w-full h-auto  max-h-[990px] xsm:min-h-[400px]"
        />
        <div className="absolute top-0 left-0 text-white flex w-full items-center justify-center flex-col pt-28 px-4 space-y-4">
          <h1 className="font-bold font-ibmplex text-[44px] text-[#D3DBDB] text-center sm:pt-16  md:text-[28px] sm:text-[24px] xsm:text-[19px] sm:leading-none xsm:leading-none leading-[55px] relative">
            Your account, your control. <br /> Connect with{" "}
            <span className="font-handlegothic font-medium">ZERO</span>
            <span className="text-[#51C62B] font-handlegothic font-medium">
              LOSS
              <img src={underline} alt="" className="absolute z-10 w-[43%] top-[60%] right-0" />
            </span>
            (bot) <br /> and start earning!
          </h1>

          <p className="font-normal text-[16px] sm:text-[14px] xsm:text-[14px] font-ibmplex text-[#C4CBCB] text-center">
            With ZeroLoss, you maintain complete control over your account.{" "}
            <br />
            Connect with our fully automated trading bot and start maximizing{" "}
            <br />
            your earnings effortlessly, 24/7, every day of the year.
          </p>
          <div className="relative sm:hidden xsm:hidden ">
            <Graph />

            <div className="text-[#D3DBDB] font-inter absolute left-0 top-6 pl-0">
              <div className="flex items-center gap-3 py-2">
                <img src={avatar} alt="" className="w-[60px] h-[57px]" />
                <div className="">
                  <h1 className="font-ibmplex font-medium text-[20px] text-[#D3DBDB]">
                    David Zaho{" "}
                  </h1>
                  <img src={verified} alt="" className="w-[80px] h-[26px]" />
                  <p className="font-ibmplex font-normal text-[15px] text-[#A2B1B1]">
                    dav*********mail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 py-2">
                <h1 className="font-inter font-semibold w-[134px] text-[16px] border-b-[2px] border-dashed border-white pb-1">
                  Margin Balance
                </h1>
                <img src={eye} alt="" />
              </div>
              <h1 className="font-inter font-bold text-[24px] ">
                883,905.8158{" "}
                <span className="font-semibold text-[12px]">USDT</span>
              </h1>
              <p className="font-semibold text-[11px] font-inter py-2">
                ≈ $883,905.8158
              </p>
              <div className="flex items-center gap-2">
                <p className=" text-[12px] font-medium">Today’s Realized PnL</p>
                <div className="w-[156px] h-[21px] rounded-[44px] bg-[#F1F8F9] px-[12px] py-[6px] font-bold text-[12px] flex items-center justify-center text-black">
                  +10,870.90 (+1.12%)
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <p className="font-medium text-[11px]">
                  Wallet Balance <b>(USDT)</b>
                </p>
                <h1 className="font-semibold text-[16px]">860,870.9081</h1>
                <p className="font-semibold text-[11px]">≈ $860,870.91</p>
                <span className=" absolute px-2 py-1 w-[378px] bottom-[23%] right-[-80%] flex items-center gap-2 rounded bg-[#FC0] text-[#C30]">
                  <img
                    src={Caution}
                    alt=""
                  />
                  <p className="text-sm font-medium font-ibmplex">Warning:<strong className="font-bold"> DO NOT ENABLE WITHDRAWAL OPTION.</strong></p>
                </span>
              </div>
              <div className="pt-4 space-y-2">
                <p className="font-medium text-[11px] border-b-2 border-dashed w-[131px] flex">
                  Unrealized PNL <b>(USDT)</b>
                </p>
                <h1 className="font-semibold text-[16px] text-[#2BB17F]">
                  +33,905.8158
                </h1>
                <h1 className="font-semibold text-[11px] text-[#2BB17F]">
                  ≈ $+33,905.82
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex absolute bottom-0 bg-white w overflow-hidden w-full bg-opacity-15 items-center sm:h-[50px] h-[66px] border-t border-b border-gray-500 backdrop-blur-[1px] rotate-[-1.2deg] origin-bottom-left">
        <div ref={marqueeRef} className="flex gap-6 pr-6 whitespace-nowrap">
          {Array(20)
            .fill([...data])
            .flat()
            .map((text, i) => (
              <div
                key={i}
                className="text-white flex items-center gap-2 shrink-0 sm:text-base text-xl will-change-transform"
                style={{ minWidth: "150px", padding: "0 12px" }} // Set a fixed minWidth and padding
              >
                {text.symbol}{" "}
                <span
                  className={`${text.total_pnl < 0
                    ? "text-red-500"
                    : "text-[#41D87B] animate-blink"
                    } font-medium`}
                >
                  {text?.total_pnl < 0
                    ? "- " + Number(text.total_pnl).toFixed(2)
                    : "+ " + Number(text.total_pnl).toFixed(2)}
                </span>{" "}
                <img src={star} alt="" />
              </div>
            ))}
        </div>
        {!data ? (
          <div className="cus_loader mx-auto"></div>
        ) : (
          <div className="w-full text-center">No data available</div>
        )}
      </div>
    </div>
  );
};

export default Hero;
