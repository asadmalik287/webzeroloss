import React from "react";
import AlgoTrading from "../../../assets/AIML/AlgoTrading.png";
import SentimentAnalysis from "../../../assets/AIML/SentimentAnalysis.png";
import AnomalyDetection from "../../../assets/AIML/AnomalyDetection.png";
import PortfolioManagement from "../../../assets/AIML/PortfolioManagement.png";
import HFT from "../../../assets/AIML/HFT.png";
import AdaptiveLearning from "../../../assets/AIML/AdaptiveLearning.png";
import DataAnalysis from "../../../assets/AIML/DataAnalysis.png";
import PredictiveAnalytics from "../../../assets/AIML/PredictiveAnalytics.png";
import PatternRecognition from "../../../assets/AIML/PatternRecognition.png";
import AutomatedTrading from "../../../assets/AIML/AutomatedTrading.png";

// Reusable Card component
const Card = ({ title, image, description }) => (
  <div className="border border-[#163643] rounded-xl mb-5 p-6">
    <div className="flex gap-4 items-center pb-6">
      <img src={image} alt={title} />
      <h1 className="font-semibold text-xl">{title}</h1>
    </div>
    <p className="font-ibmplex font-medium text-[16px] text-[#BBB9C9]">
      {description}
    </p>
  </div>
);

const AIML = () => {
  const mlCards = [
    {
      title: "Algorithmic Trading",
      image: AlgoTrading,
      description:
        "ML algorithms can develop and refine trading strategies by learning from historical market data. For example, reinforcement learning models can continuously improve their trading strategies by learning from past trades.",
    },
    {
      title: "Sentiment Analysis",
      image: SentimentAnalysis,
      description:
        "ML models can analyze news articles, social media posts, and other textual data to gauge market sentiment, which can impact cryptocurrency prices.",
    },
    {
      title: "Anomaly Detection",
      image: AnomalyDetection,
      description:
        "ML can detect unusual market behavior or fraudulent activities, such as pump-and-dump schemes or market manipulation, by identifying deviations from normal trading patterns.",
    },
    {
      title: "Portfolio Management",
      image: PortfolioManagement,
      description:
        "ML can optimize portfolio management by learning the best allocation of assets to maximize returns or minimize risk based on historical performance and market conditions.",
    },
    {
      title: "High-Frequency Trading (HFT)",
      image: HFT,
      description:
        "ML algorithms can execute a high volume of trades in a very short period, capitalizing on small price movements that occur within milliseconds.",
    },
    {
      title: "Adaptive Learning",
      image: AdaptiveLearning,
      description:
        "ML models can adapt to changing market conditions by continuously learning from new data, allowing them to adjust strategies and predictions accordingly.",
    },
  ];

  const aiCards = [
    {
      title: "Data Analysis",
      image: DataAnalysis,
      description:
        "AI can process and analyze vast amounts of market data, such as price movements, trading volumes, and news sentiment, faster and more accurately than humans.",
    },
    {
      title: "Predictive Analytics",
      image: PredictiveAnalytics,
      description:
        "AI models can predict future price movements or market trends based on historical data and real-time inputs. These predictions help in making informed trading decisions.",
    },
    {
      title: "Pattern Recognition",
      image: PatternRecognition,
      description:
        "AI algorithms can identify complex patterns in data that might be missed by traditional analysis. This includes recognizing trends, correlations, and anomalies in the crypto market.",
    },
    {
      title: "Automated Trading",
      image: AutomatedTrading,
      description:
        "AI can automate trading strategies by executing buy and sell orders based on predefined criteria or real-time data analysis, improving efficiency and reducing emotional decision-making.",
    },
  ];

  return (
    <div className="mb-20">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-ibmplex font-semibold text-[40px] text-center pt-12 pb-4 text-black">
          <span className="font-handlegothic font-medium">ZERO</span>
          <span className="text-[#51C62B] font-handlegothic font-medium">
            LOSS
          </span>
          &nbsp;(AI & ML)
        </h1>
        <p className="font-normal text-[16px] font-ibmplex text-black text-center pb-12 ">
          AIML AI (Artificial Intelligence) and ML (Machine Learning) are
          technologies
          <br />
          that enhance trading strategies and decision-making processes. Here's
          a breakdown
          <br />
          of how they are applied:
        </p>
        <div className="flex-row lg:flex md:flex text-[#D3DBDB] gap-x-14 justify-around">
          <div className=" xsm:p-3 sm:p-3 p-8 bg-[#081516] border border-[#163643] rounded-3xl flex-column xsm:mx-auto sm:mx-auto xsm:w-11/12 sm:w-11/12 w-6/12">
            <p className="font-semibold text-[24px] font-ibmplex text-center pb-8">
              Machine Learning (ML)
            </p>
            {mlCards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                description={card.description}
              />
            ))}
          </div>
          <div className="flex-row xsm:mx-auto sm:mx-auto xsm:w-11/12 sm:w-11/12 w-6/12">
            <div className="xsm:p-3 sm:p-3 p-8 mb-10 bg-[#081516] border border-[#163643] rounded-3xl xsm:my-5 sm:my-5 flex-column h-fit">
              <p className="font-semibold text-[24px] font-ibmplex text-center pb-8">
                Artificial Intelligence (AI)
              </p>
              {aiCards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  image={card.image}
                  description={card.description}
                />
              ))}
            </div>
            <div
              className="rounded-[24px] p-8"
              style={{
                background:
                  "linear-gradient(99deg, #134E5E 0.75%, #3C6946 98.66%)",
              }}
            >
              <h1 className="font-semibold text-xl mb-6">
                Artificial Intelligence(AI) and Machine Learning(ML) can process
                large datasets, identify trends and patterns, execute trades
                more quickly, and continuously improve strategies based on new
                information.
              </h1>
              <h1 className="font-semibold text-xl">
                In summary, Artificial Intelligence(AI) and Machine Learning(ML)
                bring advanced analytical and automation capabilities to crypto
                trading, potentially leading to better trading outcomes and more
                efficient processes.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIML;
