import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface Props {
  icon: IconDefinition;
  label: string;
}

const SkillItem: FC<Props> = ({ icon, label }) => {
  return (
    <article className="skill-list-item">
      <div className="container">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p>{label}</p>
    </article>
  );
};

export default SkillItem;
