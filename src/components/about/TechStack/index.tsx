import React, { FC } from "react";
import { techStack } from "./techStack";
import TechStackItem from "./TechStackItem";
import "./tech-stack.modules.scss";

const TechStack: FC = () => {
  return (
    <ul className="techstack">
      {techStack.map((itemProps, index) => (
        <TechStackItem {...itemProps} key={index} />
      ))}
    </ul>
  );
};

export default TechStack;
