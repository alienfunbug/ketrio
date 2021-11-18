import React from "react";
import "./LandingPage.css";
import profiles from "../data/profiles/profiles.json";
import Button from "../components/button/Button.js";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <span className="landing-title"> Welcome Ballers...</span>
        <div className="landing-profiles">
          {profiles.map((profile, index) => (
            <div className="landing-profile" key={index}>
              <Link to={`/${profile.link}/`}>
                <img className="landing-image" src={profile.image_src} alt="file not found" />
              </Link>

              <span className="landing-display">{profile.display}</span>
            </div>
          ))}
        </div>

        <Button label="About Page" />
      </div>
    </div>
  );
}

export default LandingPage;
