import React, { FC } from "react";

import "./about-h2.modules.scss";

interface Props {
  title: [string, string];
}

const AboutH2: FC<Props> = ({ title }) => {
  const [word1, word2] = title;
  return (
    <h2>
      {word1 + " "}
      <span>{word2}</span>
    </h2>
  );
};

export default AboutH2;
