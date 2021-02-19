import React, { FC } from "react";
import AboutH2 from "../components/about/AboutH2";
import Introduction from "../components/about/Introduction";
import Layout from "../components/global/Layout";

const About: FC = () => {
  const title = "About me";
  return (
    <Layout className="about" title={`Celeste Ellerby - ${title}`}>
      <div className="title">
        <h1>{title}</h1>
        <Introduction />
        <AboutH2 title={["Current", "Tech Stack"]} />
        <AboutH2 title={["Fun", "Facts"]} />
        <AboutH2 title={["People", "Say..."]} />
      </div>
    </Layout>
  );
};

export default About;
