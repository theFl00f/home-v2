import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "../global/Image";

import "./introduction.modules.scss";

const Introduction: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className="introduction">
      <article>
        <div className="img-container">
          <Image data={data} />
        </div>
        <p>Hey, friends!</p>
      </article>
      <article>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dolores ipsum voluptatem a eligendi officia beatae incidunt quia hic
          inventore rem fugiat molestias aliquid debitis, obcaecati quisquam
          laborum libero quae quasi harum ea suscipit temporibus? Tempora ullam
          sit perferendis porro!
        </p>
        <section className="intro-contact">
          <p>Want to get in touch?</p>
          {/* SocialMediaLinks */}
        </section>
      </article>
    </section>
  );
};

export default Introduction;
