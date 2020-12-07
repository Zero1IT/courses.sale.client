import React from "react";
import FeaturedCard from "./FeaturedCard";

function FeaturedSection() {

  const test = [1, 2, 3, 4];

  return (
    <section className="container pt-5 bg-image-section bg-feature-section">
      <div className="row justify-content-center">
        {test.map(() => <FeaturedCard />)}
      </div>
      <div className="row">
        {test.map(() => <FeaturedCard />)}
      </div>
    </section>
  )
}

export default FeaturedSection;