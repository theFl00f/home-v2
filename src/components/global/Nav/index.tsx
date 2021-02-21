import React, { FC, useEffect, useRef, useState } from "react";
import "./nav.modules.scss";
import NavLink from "./NavLink";
import { navLinks } from "./nav-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav: FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const navClass = isExpanded ? "open" : "";

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  // close on click out of nav
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      setIsExpanded(false);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, setIsExpanded]);

  //close on esc keypress
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Escape" || event.key === "Esc") {
      return setIsExpanded(false);
    }
    return;
  };

  return (
    <header>
      <nav ref={ref} className={navClass}>
        <button
          aria-expanded={isExpanded}
          aria-controls="menu"
          onClick={toggleExpanded}
          onKeyDown={handleKeyDown}
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
