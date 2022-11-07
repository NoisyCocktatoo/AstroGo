import React from "react";
import "./Cards.css";
import Card from "./Card";

function Cards() {
  return (
    <div className="cards">
      <h1>Let's Dig Deeper!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Card
              src="images/1.jpg"
              text="Get in touch with the Astronomy Picture of the Day!"
              label="APOD"
              path="/APOD"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
