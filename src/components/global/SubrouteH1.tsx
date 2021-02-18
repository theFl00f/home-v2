import React from "react";
import { FC } from "react";

const SubrouteH1: FC = ({ children }) => {
  return (
    <div className="title">
      <h1>{children}</h1>
    </div>
  );
};

export default SubrouteH1;
