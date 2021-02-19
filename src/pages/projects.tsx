import React, { FC } from "react";
import Layout from "../components/global/Layout";

const Projects: FC = () => {
  const title = "Projects";
  return (
    <Layout title={`Celeste Ellerby - ${title}`}>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </Layout>
  );
};

export default Projects;
