import React, { FC } from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./tech-goals.modules.scss";

const TechGoals: FC = () => {
  return (
    <div className="tech-goals">
      <Carousel
        autoPlay
        emulateTouch
        showStatus={false}
        showArrows
        infiniteLoop
      >
        <p>Making impossible design requests come true with the magic of CSS</p>
        <p>Learning by DO-ing</p>
        <p>Combining my love of art and code</p>
        <p>Using Javascript to bring websites to life &#x1F9DF;</p>
        <p>Getting catharsis from successfully debugging logic</p>
        <p>
          Giving and receiving code review, so I can steal <em>all</em> the
          secrets!
        </p>
      </Carousel>
    </div>
  );
};

export default TechGoals;
