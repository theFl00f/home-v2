import { GatsbyLinkProps, Link } from "gatsby";
import React, { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconDefinition;
  label: string;
}

const NavLink: FC<Props & GatsbyLinkProps<unknown>> = ({ to, icon, label }) => {
  return (
    <li>
      <Link aria-label={label} title={label} to={to} activeClassName="active">
        <FontAwesomeIcon icon={icon} aria-hidden="true" />
      </Link>
    </li>
  );
};
export default NavLink;
