import React, { FC, useState } from "react";
import EmailForm from "../components/contact/EmailForm";
import Layout from "../components/global/Layout";
import "./contact.modules.scss";

const Contact: FC = () => {
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const title = "Contact";
  return (
    <Layout className="contact" title={`Celeste Ellerby - ${title}`}>
      <div className={title}>
        <h1>{title}</h1>
        <section className={isConfirmed ? "confirmed" : ""}>
          <article>
            <h2>I&apos;d love to hear from you!</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ex
              incidunt praesentium libero magni sunt.
            </p>
          </article>
          <EmailForm setIsConfirmed={setIsConfirmed} />
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
