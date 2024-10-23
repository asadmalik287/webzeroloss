import Navbar from "../layout/Navbar/index";
import Hero from "../components/Landing/Hero";
import Trading from "../components/Landing/Trade";
import Review from "../components/Landing/Review";
import FAQ from "../components/Landing/FAQ";
import Footer from "../layout/Footer";
import LogoSlider from "../components/Landing/Teams/index";
import Team from "../components/Landing/Teams/team";
import AIML from "../components/Landing/AIML";
import JoinProgram from "../components/Landing/JoinProgram";
import JoinPrgmImg1 from '../assets/JoinProgram/JoinPrgmImg1.png'
import JoinPrgmImg2 from '../assets/JoinProgram/JoinPrgmImg2.png'
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Team />
      <Trading />
      <AIML />
      <JoinProgram image={JoinPrgmImg1}/>
      <Review />
      <FAQ />
      <JoinProgram image={JoinPrgmImg2}/>
      <Footer />
    </div>
  );
};

export default Home;
