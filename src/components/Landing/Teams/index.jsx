import React from "react";
import Slider from "react-slick";
import logo_1 from "../../../assets/LogoSlider/logo-1.svg";
import logo_2 from "../../../assets/LogoSlider/logo-2.svg";
import logo_3 from "../../../assets/LogoSlider/logo-3.svg";
import logo_4 from "../../../assets/LogoSlider/logo-4.svg";
import logo_5 from "../../../assets/LogoSlider/logo-5.svg";
import logo_6 from "../../../assets/LogoSlider/logo-6.svg";
import logo_7 from "../../../assets/LogoSlider/logo-7.svg";

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 12,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const logos = [
    logo_1,
    logo_2,
    logo_3,
    logo_4,
    logo_5,
    logo_6,
    logo_7,
    logo_2,
    logo_5,
    logo_1,
    logo_6,
    logo_4,
    logo_7,
    logo_1,
    logo_2,
  ];

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

export default LogoSlider;
