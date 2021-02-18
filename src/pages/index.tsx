import { faCaretRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from "gatsby";
import React, { FC } from "react";
import Button from "../components/global/Button";
import Image from "../components/global/Image";
import Layout from "../components/global/Layout";
import "./home.modules.scss";

const IndexPage: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-pic.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout title="Celeste Ellerby - Home" className="homepage">
      <section className="">
        <div className="container">
          <Image data={data} />
        </div>
        <article>
          <h1>
            <span>Hi, I&apos;m </span>Celeste Ellerby
          </h1>
          <h2>
            <div>A developer </div>
            <div>with a background </div>
            <div>in animation.</div>
          </h2>
          <section className="button-section">
            <Button>
              Download resume <FontAwesomeIcon icon={faDownload} />
            </Button>
            <Button buttonType="secondary">
              Contact me <FontAwesomeIcon icon={faCaretRight} />
            </Button>
          </section>
        </article>
      </section>
    </Layout>
  );
};

export default IndexPage;
