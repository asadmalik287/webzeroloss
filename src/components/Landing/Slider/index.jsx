import React from "react";
import Slider from "react-slick";
import slide_1 from "../../../assets/Slider/slide-1.svg";
import slide_2 from "../../../assets/Slider/slide-2.svg";
import slide_3 from "../../../assets/Slider/slide-3.svg";
import slide_4 from "../../../assets/Slider/slide-4.svg";
import full_rate from "../../../assets/Slider/full-rate.svg";
import rating from "../../../assets/Slider/rating.svg";

const reviews = [
  {
    image: slide_1,
    rating: full_rate,
    reviewer: "The wargamer from Philippines",
    reviewText: "Reviewed EzMP3",
    comment: "“It's free with no ads like damn 20 out of 10”",
  },
  {
    image: slide_2,
    rating: rating,
    reviewer: "Sachin Bakshi",
    reviewText: "Reviewed Star Tour",
    comment:
      "“Our experience with star tours was great. Specially as we had our parents along with us. We never had to worry about Food, Traffic or Accommodation. Aarish and...”",
  },
  {
    image: slide_3,
    rating: full_rate,
    reviewer: "Sachin Bakshi",
    reviewText: "Reviewed Star Tour",
    comment:
      "“Our experience with star tours was great. Specially as we had our parents along with us. We never had to worry about Food, Traffic or Accommodation. Aarish and...”",
  },
  {
    image: slide_4,
    rating: rating,
    reviewer: "The wargamer from Philippines",
    reviewText: "Reviewed EzMP3",
    comment: "“It's free with no ads like damn 20 out of 10”",
  },
];

const ReviewSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col max-w-[350px] h-full rounded-[8px] border-[1px] border-[#DCE0DD] bg-[#FBFFFD] p-[20px] mx-[10px] my-[10px]"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={review.image} alt={`Slide ${index + 1}`} />
              <img src={review.rating} alt="Rating" />
            </div>
            <h1 className="font-bold text-[12px] text-black font-ibmplex mb-2">
              {review.reviewer}{" "}
              <span className="text-[#6A6A67]">{review.reviewText}</span>
            </h1>
            <p className="font-normal text-[14px] text-[#282B2B]">
              {review.comment}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
