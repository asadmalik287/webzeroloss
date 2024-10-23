import trade_mobile from "../../../assets/Trading/trade-mobile.svg";
import binance from "../../../assets/Trading/binance.svg";
import plugins from "../../../assets/Trading/plugins.svg";
import connect from "../../../assets/Trading/connect.svg";
import share from "../../../assets/Trading/share.svg";
import NoTrade from "../../../assets/Trading/NoTrade.png";
import Caution from "../../../assets/Trading/Caution.png";
const Trading = () => {
  return (
    <div
      id="product"
      style={{ boxShadow: "#020202 0px -100px 0px 0px" }}
      className="bg-gradient-to-r from-[#001F1F] to-[#000000]  "
    >
      <div className=" max-w-[1400px] mx-auto w-full h-full px-4 space-y-6 py-[40px] ">
        <h1 className="font-ibmplex font-semibold text-[40px] xsm:text-[25px] sm:text-[30px] text-center text-white">
          Trade with the top cryptocurrency <br />
          <span className="font-normal font-handlegothic">ZERO</span>
          <span className="font-normal font-handlegothic text-[#64B337]">
            LOSS
          </span>
          (bot) in the industry
        </h1>

        <div className="flex justify-between items-center gap-6 sm:flex-col-reverse xsm:flex-col-reverse sm:gap-10">
          <div className="w-[545px] sm:w-full xsm:w-full pt-16">
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src={binance}
                  alt=""
                  className="xsm:w-[46px] xsm:h-[46px]"
                />
                <h1 className="font-semibold text-[24px] font-ibmplex md:text-[22px] sm:text-[20px] xsm:text-[18px]">
                  Your Binance Account. Your Control
                </h1>
              </div>
              <p className="font-ibmplex font-medium text-[16px] md:text-[14px] sm:text-[14px] xsm:text-[14px] text-[#BBB9C9] border-l-2 border-gray-700 pl-3 ml-20">
                Your Binance account remains entirely under your control, with
                withdrawals accessible only by you. We do not have access to
                withdrawals; our access is limited to future trading using the{" "}
                <span className="font-handlegothic font-normal">ZERO</span>
                <span className="font-handlegothic font-normal text-[#64B337]">
                  LOSS
                </span>{" "}
                bot.
              </p>
              <span className="px-2 py-1 ml-20 mt-5 flex items-center gap-2 rounded bg-[#FC0] w-fit text-[#C30]">
                <img
                  src={Caution}
                  alt=""
                />
                <p className="text-sm font-medium font-ibmplex">Warning:<strong className="font-bold"> DO NOT ENABLE WITHDRAWAL OPTION.</strong></p>
              </span>
            </div>
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src={NoTrade}
                  alt=""
                  className="xsm:w-[46px] xsm:h-[46px]"
                />
                <h1 className="font-semibold text-[24px] font-ibmplex md:text-[22px] sm:text-[20px] xsm:text-[18px]">
                  No Trading Experience Needed
                </h1>
              </div>
              <p className="font-ibmplex font-medium text-[16px] text-[#BBB9C9] sm:text-[14px] xsm:text-[14px] border-l-2 border-gray-700 pl-3 ml-20 md:text-[14px]">
                You don’t need any trading experience or knowledge. There are no
                settings to configure on your end. Simply enable Futures Trading
                on your Binance account and provide us with your Private Key and
                Secret Key.
              </p>
            </div>
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src={connect}
                  alt=""
                  className="xsm:w-[46px] xsm:h-[46px]"
                />
                <h1 className="font-semibold text-[24px] font-ibmplex md:text-[22px] sm:text-[20px] xsm:text-[18px]">
                  Connecting{" "}
                  <span className="font-normal font-handlegothic">ZERO</span>
                  <span className="font-normal font-handlegothic text-[#64B337]">
                    LOSS
                  </span>
                  (Bot)
                </h1>
              </div>
              <p className="font-ibmplex font-medium text-[16px] text-[#BBB9C9] sm:text-[14px] xsm:text-[14px] border-l-2 border-gray-700 pl-3 ml-20 md:text-[14px]">
                We will connect the{" "}
                <span className="font-handlegothic font-normal">ZERO</span>
                <span className="font-handlegothic font-normal text-[#64B337]">
                  LOSS
                </span>{" "}
                bot to your Binance account via API keys and start Futures
                Trading within 24 hours. You can access your account anytime,
                from anywhere, to check trading records, profits, and wallet
                balances.
              </p>
            </div>
            <div>
              <div className="flex gap-4 items-center">
                <img src={share} alt="" className="xsm:w-[46px] xsm:h-[46px]" />
                <h1 className="font-semibold text-[24px] font-ibmplex md:text-[22px] sm:text-[20px] xsm:text-[18px]">
                  Profit Sharing{" "}
                </h1>
              </div>
              <p className="font-ibmplex font-medium text-[16px] text-[#BBB9C9] sm:text-[14px] xsm:text-[14px] border-l-2 border-gray-700 pl-3 ml-20 md:text-[14px]">
                Daily profits will be shared, and you will need to transfer our
                share of the profit to our wallet each day.
              </p>
            </div>
            <button className="py-2.5 px-8 mt-8 mx-auto rounded-[8px] bg-[#41D87B] font-medium font-ibmplex text-[16px] text-[#031E0D] flex items-center justify-center">
             Sign Up now
            </button>
          </div>
          <img
            src={trade_mobile}
            alt=""
            className="w-[660px] h-[750px] md:w-[570px] md:h-[590px] sm:w-full sm:h-full xsm:w-full xsm:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Trading;
