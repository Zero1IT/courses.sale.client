import GreetingSection from "./GreetingSection";
import React from "react";
import StatisticsSection from "./StatisticsSection";
import JoinUsSection from "./JoinUsSection";
import AboutUsSection from "./AboutUsSection";
import ProcessSection from "./ProcessSection";
import FeaturedSection from "./FeaturedSection";

function HomePage() {
  return (
    <>
      <GreetingSection />
      <AboutUsSection />
      <ProcessSection />
      <FeaturedSection />
      <StatisticsSection />
      <JoinUsSection />
    </>
  )
}

export default HomePage;