import React from "react";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction/";
import RulesSection from "../components/Rules/";
import Criteria from "../components/JudgingCriteria/";
import Faq from "../components/Faq";
import TimeLine from "../components/TimeLine";
import Reward from "../components/Rewards";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Footer from "../components/Footer";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <RulesSection />
      <Criteria />
      <Faq />
      <TimeLine />
      <Reward />
      <Partners />
      <PrivacyPolicy />
      <Footer />
    </>
  );
};

export default Home;
