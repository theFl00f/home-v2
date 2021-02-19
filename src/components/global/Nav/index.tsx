import React, { FC, useState } from "react";
import "./nav.modules.scss";
import NavLink from "./NavLink";
import { navLinks } from "./nav-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav: FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const navClass = isExpanded ? "open" : "";

  return (
    <header>
      <nav className={navClass}>
        <button
          aria-expanded={isExpanded}
          aria-controls="menu"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="sr-only">Menu</span>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul id="menu">
          {navLinks.map(({ to, icon, label }, index) => (
            <NavLink icon={icon} to={to} label={label} key={index} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
