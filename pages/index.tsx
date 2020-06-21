import React from "react";
import { Helmet } from "react-helmet";

import { Container } from "../components/common";

import META from "../configs/meta";

const Home: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>
          {META.title} - {META.description}
        </title>
      </Helmet>
      <Container>Home Page</Container>
    </div>
  );
};

export default Home;
