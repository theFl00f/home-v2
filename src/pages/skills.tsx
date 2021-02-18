// If you don't want to use TypeScript you can delete this file!
import React, { FC } from "react";
import Layout from "../components/global/Layout";
import SubrouteH1 from "../components/global/SubrouteH1";
import SkillItem from "../components/skills/SkillItem";
import { skills } from "../components/skills/skills";

import "./skills.modules.scss"

const Skills: FC = () => (
  <Layout className="skills" title="Celeste Ellerby - Skills">
    <SubrouteH1>Skills</SubrouteH1>
    <ul>
      {skills.map((skillProps, index) => (
        <li key={index}>
          <SkillItem {...skillProps} />
        </li>
      ))}
    </ul>
  </Layout>
);

export default Skills;
