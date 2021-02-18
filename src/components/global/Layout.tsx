/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

import "../../styles/setup.scss";
import "./layout.scss";
import SEO from "./SEO";

interface Props {
  className?: string;
  title: string;
}

const Layout: FC<Props> = ({ children, title, className = "" }) => {
  return (
    <div className={`background ${className}`}>
      <div className="wrapper">
        <Nav />
        <SEO title={title} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
