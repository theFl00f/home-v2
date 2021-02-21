import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface Props {
  icon: IconDefinition;
  label: string;
}

const TechStackItem: FC<Props> = ({ icon, label }) => {
  return (
    <li>
      <div className="circle">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p>{label}</p>
    </li>
  );
};

export default TechStackItem;
