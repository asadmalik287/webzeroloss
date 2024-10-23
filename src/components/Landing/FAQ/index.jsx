import card from "../../../assets/FAQ/card.svg";
import platform from "../../../assets/FAQ/platform.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import left from "../../../assets/FAQ/left.svg";
import right from "../../../assets/FAQ/right.svg";
import security from "../../../assets/FAQ/security.svg";
import support from "../../../assets/FAQ/support.svg";
import privacy from "../../../assets/FAQ/privacy.svg";

const FAQ = () => {
  return (
    <div id="security" className="px-4 bg-[#ecfbf2] pb-20  ">
      <div className="flex flex-col items-center  justify-center py-12">
        <h1 className="font-semibold font-ibmplex text-[40px] text-[#032123] sm:text-[30px] text-center  xsm:text-[22px]">
          Discover the{" "}
          <span className="font-handlegothic font-normal">ZERO</span>
          <span className="font-handlegothic font-normal text-[#64B337]">
            LOSS
          </span>{" "}
          Trading Bot
        </h1>
        <p className="font-normal text-[16px] font-ibmplex text-[#282B2B] text-center w-[678px] sm:w-full xsm:w-full">
          Trade smarter with the industry’s top cryptocurrency bot. Automate
          your strategies, maximize profits, and navigate the market with
          confidence using cutting-edge technology. making it easier than ever
          to capitalize on market opportunities.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <div className="absolute w-2.5 h-2.5 bg-black transform rotate-45 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] sm:hidden xsm:hidden" />
        <div className="flex sm:flex-col sm:gap-4 xsm:flex-col">
          <div className="relative sm:border-none xsm:border-none border-r-[1.5px] border-b-[1.5px] border-black lg:pr-8 md:pr-8 pb-8">
            <img src={card} alt="" className="" />
            <div className="absolute xsm:top-4 sm:top-4 xsm:left-8 sm:left-8 top-12 left-16 flex flex-col items-start justify-center">
              <img className="xsm:w-[58px] sm:[58px]" src={platform} alt="" />
              <h1 className="font-semibold xsm:text-lg sm:text-lg text-[24px] font-ibmplex text-[#032123] pb-2">
                AI &amp; ML-Powered Crypto Trading
              </h1>
              <p className="font-ibmplex xsm:text-sm sm:text-sm font-normal text-[16px] text-[#282B2B]">
                <span className="font-handlegothic font-normal">ZERO</span>
                <span className="font-handlegothic font-normal text-[#64B337]">
                  LOSS
                </span>{" "}
                collaborates closely with exchanges and <br />
                regulators.
              </p>
            </div>
          </div>
          <div className="relative sm:border-none xsm:border-none border-b-[1.5px] border-black pb-8 lg:pl-8 md:pl-8">
            <img src={card} alt="" className="" />
            <div className="absolute xsm:top-1 sm:top-1 xsm:left-6 sm:left-6 top-8 left-16 flex flex-col items-start justify-center ">
              <img className="xsm:w-[58px] sm:[58px]" src={security} alt="" />
              <h1 className="font-semibold xsm:text-base sm:text-base text-[24px] font-ibmplex text-[#032123] pt-0 pb-2">
                Round-the-Clock Trading 24/7/365
              </h1>
              <p className="font-ibmplex font-normal xsm:text-xs sm:text-xs text-[14px] text-[#282B2B]">
                Fueled by Artificial Intelligence and enhanced with Machine
                Learning, our crypto
                <br /> trading bot is smart, reliable, and fullyautomated. It
                uses advanced algorithms to continuously monitor market trends
                and execute trades only when a minimum
                <br /> profit level is achievable.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 sm:flex-col sm:gap-4 xsm:flex-col">
          <div className="relative sm:border-none xsm:border-none border-r-[1.5px] border-black md:pr-8 lg:pr-8 pt-8">
            <img src={card} alt="" className="" />
            <div className="absolute xsm:top-7 sm:top-7 xsm:left-4 sm:left-4 top-16 left-16 flex flex-col items-start justify-center">
              <img className="xsm:w-[58px] sm:[58px]" src={privacy} alt="" />
              <h1 className="font-semibold xsm:text-base sm:text-base text-[24px] font-ibmplex text-[#032123] xsm:pb-0 sm:pb-0 pb-2">
                Safe &amp; Secure Funds
              </h1>
              <p className="font-ibmplex font-normal xsm:text-xs sm:text-xs text-[14px] text-[#282B2B]">
                Our cutting-edge network security systems ensure your funds are
                protected, with
                <br /> encryption for API keys, passwords, and other sensitive
                information.
                <br /> Moreover, we do not have withdrawal access to your
                account, guaranteeing you
                <br /> full control and peace of mind.
              </p>
            </div>
          </div>
          <div className="relative pt-8">
            <img src={card} alt="" className="" />
            <div className="absolute xsm:left-5 sm:left-5 top-16 left-16 flex flex-col items-start justify-center">
              <img className="xsm:w-[58px] sm:[58px]" src={support} alt="" />
              <h1 className="font-semibold xsm:text-lg sm:text-lg text-[24px] font-ibmplex text-[#032123] pb-2">
                24/7 Support
              </h1>
              <p className="font-ibmplex font-normal xsm:text-sm sm:text-sm text-[16px] text-[#282B2B]">
                Our support team is available 24/7 to assist you.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src={left}
        alt=""
        className="absolute w-[247px] h-[400px] mt-72 ml-28 xsm:hidden"
      />
      <img
        src={right}
        alt=""
        className="absolute w-[347px] h-[400px] mt-96 mr-20 right-0 xsm:hidden"
      />
      <div
        className="flex items-center justify-center flex-col pt-12 pb-24"
        id="faq"
      >
        <h1 className="font-semibold text-[35px] sm:text-[28px] xsm:text-[22px] font-ibmplex text-[#032123] py-12">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="px-32 xsm:px-4 sm:px-4  xsm:gap-0 sm:gap-0 gap-8 sm:w-full xsm:w-full">
          <div className="xsm:w-full sm:w-full flex flex-col mx-auto w-6/12">
            <Accordion
              className="font_ibmlex"
              defaultExpanded
              sx={{ backgroundColor: "#ecfbf2", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  className="font_ibmlex"
                  sx={{ fontWeight: "600", fontSize: "20px", color: "#032123" }}
                >
                  What is Binance API ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="font_ibmlex">
                <Typography className="font_ibmlex">
                  The Binance API (Application Programming Interface) is a set
                  of protocols and tools provided by Binance, one of the world's
                  largest cryptocurrency exchanges, that allows developers to
                  interact programmatically with Binance’s trading platform.{" "}
                  <br />
                  <b>Security:</b> The API uses API keys for authentication,
                  ensuring secure interactions with the platform. Developers can
                  set permissions for API keys, such as trading and data access,
                  but typically restrict withdrawal permissions to enhance
                  security.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="font_ibmlex"
              sx={{ backgroundColor: "#ecfbf2", boxShadow: "none" }}
            >
              <AccordionSummary
                className="font_ibmlex"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  className="font_ibmlex"
                  sx={{ fontWeight: "600", fontSize: "20px", color: "#032123" }}
                >
                  How long does it take to set up a trading bot?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="font_ibmlex">
                  Is it safe to trade with your crypto bot? Yes, safety and
                  security are our top priorities. The{" "}
                  <span className="font-handlegothic font-normal">ZERO</span>
                  <span className="font-handlegothic font-normal text-[#64B337]">
                    LOSS
                  </span>{" "}
                  trading bot does not store your funds. It only accesses your
                  exchange account via API keys to execute trades, ensuring that
                  you retain full control of your funds. <br /> <b>Note:</b> The
                  withdrawal function is strictly disabled.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="font_ibmlex"
              sx={{ backgroundColor: "#ecfbf2", boxShadow: "none" }}
            >
              <AccordionSummary
                className="font_ibmlex"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  className="font_ibmlex"
                  sx={{ fontWeight: "600", fontSize: "20px", color: "#032123" }}
                >
                  What crypto pairs are available for bot trading?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="font_ibmlex">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid modi libero autem eveniet distinctio numquam vitae
                  iure sunt iste omnis rerum deleniti molestias sit facilis
                  doloribus aperiam odit exercitationem nobis alias, totam,
                  culpa eius quod. Magni fugiat sint unde quisquam fuga dolores
                  repudiandae asperiores cum, rerum sed minus incidunt corporis
                  eaque at neque dignissimos? Quo harum
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="font_ibmlex"
              sx={{ backgroundColor: "#ecfbf2", boxShadow: "none" }}
            >
              <AccordionSummary
                className="font_ibmlex"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  className="font_ibmlex"
                  sx={{ fontWeight: "600", fontSize: "20px", color: "#032123" }}
                >
                  Is it safe to trade with your crypto bot?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="font_ibmlex">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, dolorum laboriosam corrupti voluptate commodi
                  fugiat tenetur porro aliquam consequatur voluptas adipisci,
                  blanditiis molestiae rem iusto repellat quaerat. Quasi,
                  molestias sunt.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="xsm:w-full sm:w-full flex flex-col mx-auto w-6/12">
            <Accordion
              className="font_ibmlex"
              sx={{ backgroundColor: "#ecfbf2", boxShadow: "none" }}
            >
              <AccordionSummary
                className="font_ibmlex"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  className="font_ibmlex"
                  sx={{ fontWeight: "600", fontSize: "20px", color: "#032123" }}
                >
                  What types of trades does the{" "}
                  <span className="font-handlegothic font-normal">ZERO</span>
                  <span className="font-handlegothic font-normal text-[#64B337]">
                    LOSS
                  </span>{" "}
                  bot handle?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="font_ibmlex">
                  Spot and Futures Trades: The{" "}
                  <span className="font-handlegothic font-normal">ZERO</span>
                  <span className="font-handlegothic font-normal text-[#64B337]">
                    LOSS
                  </span>{" "}
                  bot can manage both spot and futures market trades.
                  <br /> <b>Long & Short Trades:</b> Benefit from both bullish
                  and bearish markets with bots designed for long and short
                  trading strategies.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#ecfbf2", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="font_ibmlex"
              >
                <Typography
                  className="font_ibmlex"
                  sx={{ fontWeight: "600", fontSize: "20px", color: "#032123" }}
                >
                  Long & Short Trades:
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="font_ibmlex">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Necessitatibus consequatur nam blanditiis mollitia, facilis
                  ipsum voluptatum animi eos, perspiciatis quasi expedita
                  quibusdam placeat provident aut.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#ecfbf2", boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="font_ibmlex"
              >
                <Typography
                  className="font_ibmlex"
                  sx={{ fontWeight: "600", fontSize: "20px", color: "#032123" }}
                >
                  What is the cost to set up{" "}
                  <span className="font-handlegothic font-normal">ZERO</span>
                  <span className="font-handlegothic font-normal text-[#64B337]">
                    LOSS
                  </span>{" "}
                  ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="font_ibmlex">
                  There is no setup cost. We do not charge any fees upfront.
                  Instead, we operate on a profit-sharing model based on daily
                  or weekly gains.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#ecfbf2", boxShadow: "none" }}>
              <AccordionSummary
                className="font_ibmlex"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography
                  className="font_ibmlex"
                  sx={{ fontWeight: "600", fontSize: "20px", color: "#032123" }}
                >
                  What minimum profit can we expect monthly from the{" "}
                  <span className="font-handlegothic font-normal">ZERO</span>
                  <span className="font-handlegothic font-normal text-[#64B337]">
                    LOSS
                  </span>{" "}
                  bot?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="font_ibmlex">
                  We guarantee a minimum profit of 1% per month, with an average
                  annual return of at least 12%.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="hidden xsm:block">
        <div className=" items-center justify-center flex">
          <div>
            <label
              htmlFor="email"
              className="font-medium text-[16px] font-ibmplex text-[#C4CBCB]"
            >
              Input your email and get updates
            </label>
            <input
              type="email"
              id="email"
              className="w-[300px] xsm:w-full h-[44px] - bg-white mt-2 text-[#858585] rounded-[12px] flex items-center justify-center pl-4"
              placeholder="Your e-mail address"
            />
          </div>
          <button className="w-[106px] mt-8  mr-4 h-[44px] rounded-[12px] bg-[#41D77B] flex items-center justify-center font-medium font-ibmplex text-[16px] text-[#031E0D]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
