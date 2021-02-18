import React, { FC } from "react";
import "./footer.modules.scss";

const Footer: FC = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()}, Celeste Ellerby</p>
    </footer>
  );
};

export default Footer;
