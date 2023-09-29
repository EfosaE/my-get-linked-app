import React from "react";
import Hero from "../components/Hero/Hero";
import Introduction from "../components/Introduction/Introduction";
import RulesSection from "../components/Rules/RulesSection";
import Criteria from "../components/JudgingCriteria/Criteria";
import Faq from "../components/Faq/Faq";
import TimeLine from "../components/TimeLine/TimeLine";
import Reward from "../components/Rewards/Reward";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import Footer from "../components/Footer/Footer";
import Partners from "../components/Partners/Partners";

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
