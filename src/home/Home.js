import React from "react";
import Hero from "./hero";
import Form from "./form";

import Guid from "./guid";
import Me from "./me";
import Utube from "./utube";
import Footer from "./footer";
import Heroslide from "./heroslide";

const Home = () => {
  return (
    <React.Fragment>
      <main style={{ color: "gray" }}>
        <div className="container">
          <div className="heroContainer">
            <Hero />
          </div>
          <Form />
          <div>
            <Heroslide />
          </div>
          {/* <LatestCourses /> */}
          <Guid />
          <Me />
          <Utube />
          <Footer />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
