import React, { FC } from "react";
import AboutH2 from "../components/about/AboutH2";
import Introduction from "../components/about/Introduction";
import TechGoals from "../components/about/TechGoals";
import TechStack from "../components/about/TechStack";
import Layout from "../components/global/Layout";

const About: FC = () => {
  const title = "About me";
  return (
    <Layout className="about" title={`Celeste Ellerby - ${title}`}>
      <div className="title">
        <h1>{title}</h1>
        <Introduction />
        <AboutH2 title={["Things I", "Like"]} />
        <TechGoals />
        <AboutH2 title={["Current", "Tech Stack"]} />
        <TechStack />
        <AboutH2 title={["People", "Say..."]} />
      </div>
    </Layout>
  );
};

export default About;
