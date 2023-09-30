import React, { Suspense, useEffect, useRef, useState } from "react";
import Hero from "../components/Hero/Hero";
import Introduction from "../components/Introduction/Introduction";
import RulesSection from "../components/Rules/RulesSection";
import Criteria from "../components/JudgingCriteria/Criteria";
import Faq from "../components/Faq/Faq";
import TimeLine from "../components/TimeLine/TimeLine";
import Footer from "../components/Footer/Footer";
import { Audio } from "react-loader-spinner";

const LazyReward = React.lazy(() => import("../components/Rewards/Reward"));
const LazyPartners = React.lazy(() =>
  import("../components/Partners/Partners")
);
const LazyPrivacy = React.lazy(() =>
  import("../components/PrivacyPolicy/PrivacyPolicy")
);

// Function to create a lazy component with intersection observer
const LazyWithIntersectionObserver = ({ children, fallback }) => {

  const [inView, setInView] = useState(false)
  const componentRef = useRef();
  console.log(componentRef);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setInView(true)
        }
      },
    );

    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={componentRef}>{inView &&children}</div>;
};

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <RulesSection />
      <Criteria />
      <Faq />
      <TimeLine />
      <Suspense fallback={<Audio />}>
        <LazyWithIntersectionObserver>
          <LazyReward />
        </LazyWithIntersectionObserver>
      </Suspense>
      <Suspense fallback={<Audio />}>
        <LazyWithIntersectionObserver>
          <LazyPartners />
        </LazyWithIntersectionObserver>
      </Suspense>
      <Suspense fallback={<Audio />}>
        <LazyWithIntersectionObserver>
          <LazyPrivacy />
        </LazyWithIntersectionObserver>
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
