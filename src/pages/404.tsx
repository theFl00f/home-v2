import React, { FC } from "react";
import Layout from "../components/global/Layout";

const NotFoundPage: FC = () => (
  <Layout title="404: Not found">
    <div className="title">
      <h1>404: Not Found</h1>
    </div>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
