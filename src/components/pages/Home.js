import React from "react";
import HeroImage from "../HeroImage/HeroImage";
import Jumbotron from "../Jumbotron/index";

function Home() {
  return (
    <Jumbotron>
      <HeroImage></HeroImage>
      <h1 className="display-3 font-weight-bold text-Dark">JANICE</h1>
      <p className="lead text-Dark font-weight-bold">Bringing ideas to life!</p>
    </Jumbotron>
  );
}

export default Home;
