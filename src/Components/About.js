//The about page is linked to from the footer
//Only Anthony changes this code

import React from "react";
import Profile from "./Profile";

function About(props) {
  return (
    <div className="about-container">
      <div className="profile-container">
        <Profile
          image="https://ca.slack-edge.com/T4JUEB3ME-UQPHHCJ5U-516d22802d4b-512"
          name="anthony amaro"
          github="https://github.com/anthonyamaro15"
        />
        <Profile
          image="https://ca.slack-edge.com/T4JUEB3ME-USWMDPP3R-467c9f1ca9a3-512"
          name="victoria topham"
          github="https://github.com/vtopham"
        />
      </div>
      <div className="zomato">
        <h1>with special thanks to</h1>

        <div className="zomato-logo">
          <a
            href="https://www.zomato.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            zomato
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
