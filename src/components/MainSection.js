import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./MainSection.css";
import { Link } from "react-scroll";

function MainSection() {
  return (
    <div className="main-container" id="main">
      <video loop autoplay="" muted>
        <source src="./videos/video-1.mp4" type="video/mp4" />
      </video>
      <h1>Astronomy Picture of the Day</h1>
      <p>APOD</p>
      <div className="main-btns">
        <Link to="cards" spy={true} smooth={true} offset={-50} duration={500}>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            <h1>Check it out!</h1>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default MainSection;
