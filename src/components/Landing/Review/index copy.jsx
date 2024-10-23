import axios from "axios";
import ReviewSlider from "../Slider/index";
import logo from "../../..//assets/Navbar/logo.svg";
import trades from "../../../assets/Review/trades.svg";
import volume from "../../../assets/Review/volume.svg";
import profit from "../../../assets/Review/profit.svg";
import avg from "../../../assets/Review/avg.svg";
import board from "../../../assets/Review/board.svg";
import bag from "../../../assets/Review/bag.svg";
import live from "../../../assets/Review/live.svg";
import Masonry from "react-masonry-css";
import BarGraph from "../Graph/BarGraph";
import slide_1 from "../../../assets/Slider/slide-1.svg";
import slide_2 from "../../../assets/Slider/slide-2.svg";
import slide_3 from "../../../assets/Slider/slide-3.svg";
import slide_4 from "../../../assets/Slider/slide-4.svg";
import full_rate from "../../../assets/Slider/full-rate.svg";
import rating from "../../../assets/Slider/rating.svg";
import { useEffect, useState } from "react";
import XYAxisBarChart from "../../../assets/XYAxisChart";

const reviews = [
  {
    image: slide_2,
    rating: rating,
    reviewer: "Sachin Bakshi",
    reviewText: "Reviewed Star Tour",
    comment:
      "“Our experience with star tours was great. Specially as we had our parents along with us. We never had to worry about Food, Traffic or Accommodation. Aarish and...”",
  },
  {
    image: slide_1,
    rating: full_rate,
    reviewer: "The wargamer from Philippines",
    reviewText: "Reviewed EzMP3",
    comment: "“It's free with no ads like damn 20 out of 10”",
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
    image: slide_1,
    rating: full_rate,
    reviewer: "The wargamer from Philippines",
    reviewText: "Reviewed EzMP3",
    comment: "“It's free with no ads like damn 20 out of 10”",
  },
  {
    image: slide_1,
    rating: full_rate,
    reviewer: "The wargamer from Philippines",
    reviewText: "Reviewed EzMP3",
    comment: "“It's free with no ads like damn 20 out of 10”",
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
    image: slide_1,
    rating: full_rate,
    reviewer: "The wargamer from Philippines",
    reviewText: "Reviewed EzMP3",
    comment: "“It's free with no ads like damn 20 out of 10”",
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
    image: slide_1,
    rating: full_rate,
    reviewer: "The wargamer from Philippines",
    reviewText: "Reviewed EzMP3",
    comment: "“It's free with no ads like damn 20 out of 10”",
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
    image: slide_1,
    rating: full_rate,
    reviewer: "The wargamer from Philippines",
    reviewText: "Reviewed EzMP3",
    comment: "“It's free with no ads like damn 20 out of 10”",
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
    image: slide_3,
    rating: full_rate,
    reviewer: "Sachin Bakshi",
    reviewText: "Reviewed Star Tour",
    comment:
      "“Our experience with star tours was great. Specially as we had our parents along with us. We never had to worry about Food, Traffic or Accommodation. Aarish and...”",
  },
  {
    image: slide_1,
    rating: full_rate,
    reviewer: "The wargamer from Philippines",
    reviewText: "Reviewed EzMP3",
    comment: "“It's free with no ads like damn 20 out of 10”",
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
    image: slide_1,
    rating: full_rate,
    reviewer: "The wargamer from Philippines",
    reviewText: "Reviewed EzMP3",
    comment: "“It's free with no ads like damn 20 out of 10”",
  },
];

const Review = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [last7DaysPositions, setLast7DaysPositions] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // GET request
        const response = await axios.get("https://app.zeroloss.ai/landing_page_stats");

        // Get today's date and filter positions for the last 7 days
        const today = new Date();
        const filteredPositions = response.data.total_positions_history.filter((position) => {
          const positionDate = new Date(position.entry_datetime);
          const differenceInDays = Math.floor((today - positionDate) / (1000 * 3600 * 24));
          return differenceInDays <= 7;
        });
        console.log("filteredPositions", filteredPositions.length);

        setLast7DaysPositions(filteredPositions);
        setData(response.data)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Initial call
    fetchData();

    // Set interval to repeat fetch every 5 minutes
    const interval = setInterval(fetchData, 300000); // 300000ms = 5 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only on mount

  // Formatting functions
  const formatDateEntryTime = (entry_datetime) => {
    const dateObject = new Date(entry_datetime);
    const formattedEntryDate = dateObject.toLocaleDateString("en-GB");
    const formattedEntryTime = dateObject.toLocaleTimeString();
    return { formattedEntryDate, formattedEntryTime };
  };

  const formatDateExitTime = (exit_datetime) => {
    const dateObject = new Date(exit_datetime);
    const formattedExitDate = dateObject.toLocaleDateString("en-GB");
    const formattedExitTime = dateObject.toLocaleTimeString();
    return { formattedExitDate, formattedExitTime };
  };


  return (
    <div className="">
      <div className="  max-w-[1400px] mx-auto">
        <h1 className="font-ibmplex font-semibold text-[40px] text-center py-12 text-black">
          Recent reviews
        </h1>

        <Masonry
          breakpointCols={{ default: 4, 1200: 3, 800: 2, 550: 1 }}
          className="my-masonry-grid flex -ml-6 w-auto px-4"
          columnClassName="my-masonry-grid_column pl-6 sm:pl-4 bg-clip-padding mb-36"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[8px] border-[1px] border-[#DCE0DD] bg-[#FBFFFD] p-[20px] mb-6 sm:mb-4"
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
        </Masonry>

        {/* <div className="space-y-4 pb-20">
          <ReviewSlider />
          <ReviewSlider />
          <ReviewSlider />
          <ReviewSlider />
        </div> */}
      </div>

      <div id="live-position-history" className="bg-[#083A3C] py-4">
        <div className="w-full h-[90px] max-w-[1400px] mx-auto flex-row pl-4 xsm:pl-6 md:z-[-1000] lg:z-[-1000]">
          <h1 className="font-ibmplex font-semibold text-5xl text-white">
            <span className="font-handlegothic font-medium">ZERO</span>
            <span className="text-[#51C62B] font-handlegothic font-medium">LOSS</span>
          </h1>
          <h5 className="text-2xl text-[#D3DBDB]">Key Performance Indicators</h5>
        </div>
      </div>
      <div className="bg-[#032123] mb-6">
        <div className="max-w-[1400px] mx-auto relative">
          <div className="flex items-center max-w-[1300px]  sm:flex-col-reverse xsm:flex-col-reverse xsm:py-11 sm:py-11 md:py-20  sm:bg-black xsm:bg-black xsm:px-4 sm:px-4  ">
            <div className="bg-[#032123] w-full  py-[16px] xsm:pl-0 sm:pl-0 md:pl-4 lg:pl-4 ">
              <div className="w-7/12 max-h-[500px] space-y-10 sm:w-full xsm:w-full">
                {loading ? (
                  <div className="w-full lg:h-[600px] md:h-max-content sm:h-max-content xsm:h-max-content flex justify-center items-center">
                    {/* You can use a custom loader component or any spinner here */}
                    <div className="cus_loader"></div>{" "}
                    {/* Replace with your actual loader */}
                  </div>
                ) : last7DaysPositions.length > 0 ? (
                  last7DaysPositions.map((d, i) => {
                    const { formattedEntryDate, formattedEntryTime } =
                      formatDateEntryTime(d.entry_datetime);
                    const { formattedExitDate, formattedExitTime } =
                      formatDateExitTime(d.exit_datetime);

                    return (
                      <div
                        key={i}
                        className="pr-4 border-b  border-[#323937] pb-5"
                      >
                        <div className="flex items-start xsm:items-start  md:items-start sm:items-start md:flex-col gap-10 sm:flex-col xsm:flex-col w-full sm:px-4 xsm:px-4">
                          <div className="flex items-start md:gap-[70px] sm:gap-[90px] xsm:gap-[70px] flex-col md:flex-row xsm:flex-row xsm:items-center md:items-center sm:flex-row sm:items-center ">
                            <h1 className="font-ibmplex font-medium md:pt-2 sm:pt-2 text-[16px] md:w-[100px]  sm:w-[100px] text-[#ABF8DE]">
                              {d.coin}
                            </h1>
                            <div className="md:flex md:items-center md:gap-4 sm:flex sm:items-center sm:gap-4 xsm:flex xsm:items-center xsm:gap-4">
                              <p className="font-medium font-ibmplex text-[#909393] text-[12px]">
                                Closing PNL
                              </p>
                              <h1
                                className={`font-bold xsm:text-[12px] flex justify-center items-center text-center w-[124px] mt-2 rounded-[18px] px-[16px] py-[6px] sm:text-[12px] md:text-[12px] lg:text-[14px] text-black font-ibmplex ${d.pnl < 0 ? "bg-[#FF6425]" : "bg-[#41D67A] "
                                  }`}
                              >
                                <span
                                  className={`${d.pnl < 0 ? "" : "animate-blink"
                                    }`}
                                >
                                  {d.pnl < 0 ? "- " + d.pnl : "+ " + d.pnl}
                                </span>
                              </h1>
                            </div>
                          </div>
                          <div className="table-gap">
                            <div className="flex items-center w-[133%] justify-between ">
                              <div>
                                <p className="font-medium font-ibmplex text-[#909393] text-[12px]">
                                  Entry price
                                </p>
                                <h1 className="font-medium xsm:text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px]  font-ibmplex text-[#C4CBCB]">
                                  {d.entry_price} USDT
                                </h1>
                              </div>
                              <div className="lg:ml-1 md:pl-4 sm:pl-7">
                                <p className="font-medium font-ibmplex text-[#909393] text-[12px]">
                                  Avg, Close price
                                </p>
                                <h1 className="font-medium xsm:text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px]  font-ibmplex text-[#C4CBCB]">
                                  {d.exit_price} USDT
                                </h1>
                              </div>
                              {/* <div>
                              <p className="font-medium font-ibmplex text-[#C4CBCB] text-[12px]">
                                Max Open Internet
                              </p>
                              <h1 className="font-medium xsm:text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px]  font-ibmplex text-[#C4CBCB]">
                                {d.qty}
                              </h1>
                            </div> */}

                              <div className="relative -left-8">
                                <p className="font-medium font-ibmplex text-[#909393] text-[12px]">
                                  Closed Vol.
                                </p>
                                <h1 className="font-medium xsm:text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px]  font-ibmplex text-[#C4CBCB]">
                                  {new Intl.NumberFormat().format(d.qty)}
                                </h1>
                              </div>
                            </div>
                            <div className="flex items-center md:gap-12 sm:gap-16  xsm:w-full gap-[20px] content-gap xsm:gap-[30px] xl:gap-[44px] pt-4">
                              <div className="">
                                <p className="font-medium text-[12px] font-ibmplex text-[#909393]">
                                  Opened
                                </p>
                                <h1 className="text-[#C4CBCB] font-medium xsm:flex-col xsm:leading-none flex gap-2 xsm:text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] font-ibmplex">
                                  <span>{formattedEntryDate}</span>
                                  <span>{formattedEntryTime}</span>
                                </h1>
                              </div>
                              <div className="lg:ml-4">
                                <p className="font-medium text-[12px] font-ibmplex text-[#909393]">
                                  Closed
                                </p>
                                <h1 className="text-[#C4CBCB] font-medium flex gap-2 xsm:text-[12px] xsm:flex-col xsm:leading-none sm:text-[12px] md:text-[12px] lg:text-[14px] font-ibmplex">
                                  <span>{formattedExitDate}</span>
                                  <span>{formattedExitTime}</span>
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="w-full lg:h-[600px] md:h-max-content sm:h-max-content xsm:h-max-content flex justify-center items-center">
                    {/* <h1 className="text-xl">No data available</h1> */}
                    <XYAxisBarChart/>
                  </div>
                )}
              </div>
            </div>
            <div className="w-[536px] sm:w-full xsm:w-full sm:mb-8 sm:mt-8 xsm:mt-8 xsm:mb-8 bg-[#CFE2DA] rounded-[12px]  md:absolute lg:absolute right-4 top-[-30%] sm:z-0 xsm:z-0 z-[1000]  ">
              <div className="w-full h-[112px] bg-[#032123] rounded-[12px] rounded-bl-none rounded-br-none flex items-center justify-center">
                <img src={logo} alt="" />
              </div>
              <div className="py-12">
                <div className="flex items-center gap-6 xsm:gap-2 xsm:flex-col px-[32px] xsm:px-[16px] ">
                  <div className="w-full h-full rounded-[24px] px-[20px] py-[24px] bg-[#083A3C]">
                    <div className="flex items-center justify-between py-8">
                      <img src={profit} alt="" />
                      {/* <div className="w-[75px] h-[32px] rounded-[18px] bg-[#41D77B] flex items-center justify-center">
                        +2.08%
                      </div> */}
                      <p className="font-medium text-[14px] xsm:text-[14px] text-[#DDD9ED] font-ibmplex ">
                        Total Generated Profit
                      </p>
                    </div>
                    {loading ? (
                      <div className="cus_loader my-2"></div>
                    ) : data?.todays_pnl ? (
                      <h1
                        className={`${data?.todays_pnl < 0
                          ? "bg-red-[#FF6425]"
                          : "bg-[#41D77B]"
                          } font-bold text-[24px] sm:text-[20px] xsm:text-[16px] text-black w-[176px] h-[42px] rounded-[18px] flex items-center justify-center mt-2 font-ibmplex`}
                      >
                        {data?.todays_pnl < 0
                          ? "- " + data?.todays_pnl
                          : "+ " + data?.todays_pnl}
                      </h1>
                    ) : (
                      <h1 className="py-1.5 px-3 mx-auto rounded-[18px] bg-[#41D87B] text-[#031E0D] flex items-center justify-center font-bold text-2xl text-center">+1,325,236.25</h1>
                    )}
                  </div>
                  <div className="w-full h-full rounded-[24px] px-[24px] py-[32px] bg-[#ECFBF2]">
                    <div className="flex items-center gap-3 py-8">
                      <img src={volume} alt="" />
                      {/* <div className="w-[75px] h-[32px] rounded-[18px] bg-[#41D77B] flex items-center justify-center">
                        +2.08%
                      </div> */}
                      <p className="font-medium text-[14px] xsm:text-[14px] text-[#032123] font-ibmplex ">
                        Trading Volume
                      </p>
                    </div>
                    {loading ? (
                      <div className="cus_loader my-2"></div>
                    ) : data?.total_trading_volume ? (
                      <h1 className="font-bold text-[24px] sm:text-[20px] xsm:text-[16px] text-[#032123] font-ibmplex">
                        {new Intl.NumberFormat().format(
                          data.total_trading_volume
                        )}
                      </h1>
                    ) : (
                      <h1 className="text-black font-bold text-2xl text-center">11,256,252.36</h1>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-6 xsm:gap-2 pt-6 xsm:flex-col px-[32px] xsm:px-[16px] ">
                  <div className="w-full h-full rounded-[24px] px-[24px] py-[32px] bg-[#ECFBF2]">
                    <div className="flex items-center gap-3 py-8">
                      <img src={trades} alt="" />
                      {/* <div className="w-[75px] h-[32px] rounded-[18px] bg-[#41D77B] flex items-center justify-center">
                        +2.08%
                      </div> */}
                      <p className="font-medium text-[14px] text-center xsm:text-[14px] text-[#032123] font-ibmplex">
                        No. of Trades
                      </p>
                    </div>
                    {loading ? (
                      <div className="cus_loader my-2"></div>
                    ) : data?.total_trades > 0 ? (
                      <h1 className="font-bold text-[24px] text-center xsm:text-[16px] text-[#032123] font-ibmplex">
                        {data?.total_trades}
                      </h1>
                    ) : (
                      <h1 className="text-black font-bold text-2xl text-center">21,182</h1>
                    )}
                  </div>
                  <div className="w-full h-full rounded-[24px] px-[24px] py-[32px] bg-[#ECFBF2]">
                    <div className="flex items-center gap-3 py-8">
                      <img src={avg} alt="" />
                      {/* <div className="w-[75px] h-[32px] rounded-[18px] bg-[#41D77B] flex items-center justify-center">
                        +2.08%
                      </div> */}
                      <p className="font-medium text-center text-[14px] xsm:text-[14px] text-[#032123] font-ibmplex">
                        Avg. Trades profit{" "}
                      </p>
                    </div>

                    {loading ? (
                      <div className="cus_loader my-2"></div>
                    ) : data?.average_trade_profit ? (
                      <h1
                        className={`font-bold text-[24px] xsm:text-[18px] text-[#032123] font-ibmplex
                      ${data?.average_trade_profit < 0
                            ? "text-red-500"
                            : "text-[#41D67A]"
                          }
                      `}
                      >
                        {data?.average_trade_profit < 0
                          ? "- " + data?.average_trade_profit
                          : "+ " + data?.average_trade_profit}

                        <span className="text-[#032123] ml-1">USDT</span>
                      </h1>
                    ) : (
                      <h1 className="text-black font-bold text-2xl text-center">115.02 USDT</h1>
                    )}
                  </div>
                </div>
                {/* <div className="bg-[#032123] rounded-[16px] px-4 mx-4">
                  <div className="flex items-center justify-between mt-12">
                    <h1 className="font-semibold font-ibmplex text-[24px] text-[#032123]">
                      7 Days PNL
                    </h1>
                    <div className="flex items-center gap-4">
                    <img src={board} alt="" className="cursor-pointer" />
                    <img src={bag} alt="" className="cursor-pointer" />
                  </div>
                  </div>
                  {loading ? (
                    <div className="w-full flex justify-center my-2">
                      <div className="cus_loader my-2"></div>
                    </div>
                  ) : data ? (
                    <BarGraph chartData={data.total_pnl_by_dates} />
                  ) : null}
                  <div className="flex items-center justify-center py-4">
                    <button className="w-[137px] h-[44px] rounded-[8px] bg-[#41D87B] font-medium font-ibmplex text-[16px] text-[#031E0D] flex items-center justify-center">
                      Take Look
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
