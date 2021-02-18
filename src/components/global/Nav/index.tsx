import React, { FC, useState } from "react";
import "./nav.modules.scss";
import NavLink from "./NavLink";
import { navLinks } from "./nav-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navClass = isOpen ? "open" : "";

  return (
    <header>
      <nav className={navClass}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul>
          {navLinks.map(({ to, icon, label }, index) => (
            <NavLink icon={icon} to={to} label={label} key={index} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
