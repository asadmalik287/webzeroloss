import React, { useEffect } from "react";
import Slider from "react-slick";
import logo_1 from "../../../assets/LogoSlider/logo-1.svg";
import logo_2 from "../../../assets/LogoSlider/logo-2.svg";
import logo_3 from "../../../assets/LogoSlider/logo-3.svg";
import logo_4 from "../../../assets/LogoSlider/logo-4.svg";
import logo_5 from "../../../assets/LogoSlider/logo-5.svg";
import logo_6 from "../../../assets/LogoSlider/logo-6.svg";
import logo_7 from "../../../assets/LogoSlider/logo-7.svg";
import gsap from "gsap";

const LogoSlider = ({ settings, logos }) => {
  return (
    <div className="">
      <Slider {...settings} className="flex items-center">
        {logos.map((logo, index) => (
          <div key={index} className="px-2">
            <img src={logo} alt={`Logo ${index + 1}`} className="mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Team = () => {
  const logos1 = [
    logo_1,
    logo_2,
    logo_3,
    logo_4,
    logo_5,
    logo_6,
    logo_7,
    logo_1,
    logo_2,
    logo_3,
    logo_4,
    logo_5,
    logo_6,
    logo_7,
    logo_1,
    logo_2,
    logo_3,
    logo_4,
    logo_5,
    logo_6,
    logo_7,
  ];
  const logos2 = [
    logo_4,
    logo_5,
    logo_6,
    logo_7,
    logo_1,
    logo_2,
    logo_3,
    logo_4,
    logo_5,
    logo_6,
    logo_7,
    logo_1,
    logo_2,
    logo_3,
    logo_4,
    logo_5,
    logo_6,
    logo_7,
    logo_1,
    logo_2,
    logo_3,
  ];
  const logos3 = [
    logo_7,
    logo_6,
    logo_5,
    logo_4,
    logo_3,
    logo_2,
    logo_1,
    logo_7,
    logo_6,
    logo_5,
    logo_4,
    logo_3,
    logo_2,
    logo_1,
    logo_7,
    logo_6,
    logo_5,
    logo_4,
    logo_3,
    logo_2,
    logo_1,
  ];

  // const settings1 = {
  //   dots: false,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 12,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 0,
  //   cssEase: "linear",
  //   pauseOnHover: false,
  //   arrows: false,
  //   responsive: [
  //     { breakpoint: 1024, settings: { slidesToShow: 7 } },
  //     { breakpoint: 600, settings: { slidesToShow: 5 } },
  //     { breakpoint: 480, settings: { slidesToShow: 4 } },
  //   ],
  // };

  // const settings2 = {
  //   ...settings1,
  //   speed: 1000,
  // };

  // const settings3 = {
  //   ...settings1,
  //   speed: 1000,
  // };

  useEffect(() => {
    const slides = document.querySelectorAll(".team-marquee-slide");

    gsap.to(slides, {
      xPercent: -100,
      ease: "none",
      duration: 3 * slides.length,
      repeat: Infinity,
    });
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-white to-[#c5dbd3]"
      style={{ boxShadow: "0px -100px 0px 0px white" }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-center text-[40px] text-[#032123] font-ibmplex font-semibold pt-12 xsm:text-[18px] max-w-[1400px]">
          Trusted by top-tier teams worldwide
        </h1>
        <div className="py-12 relative bg-white">
          <div className="absolute left-0 xl:h-[330px] xl:hidden w-[300px] h-[205px] xl:w-[900px] md:h-[170px] sm:h-[180px] xsm:h-[150px] xsm:w-[100px] bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 xl:h-[330px] xl:hidden w-[300px] h-[205px] xl:w-[900px] md:h-[170px] sm:h-[180px] xsm:h-[150px] xsm:w-[100px] bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

          <div className="w-full overflow-x-clip flex flex-col">
            {[logos1, logos2, logos3].map((logos, index) => (
              <div
                className="flex"
                key={index}
                style={{ translate: `${50 * -Math.pow(index, 1.4)}px 0px` }}
              >
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-shrink-0 team-marquee-slide"
                    >
                      {logos.map((logo, i) => (
                        <img src={logo} key={i} />
                      ))}
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* <LogoSlider settings={settings1} logos={logos1} />
          <LogoSlider settings={settings2} logos={logos2} />
          <LogoSlider settings={settings3} logos={logos3} /> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
