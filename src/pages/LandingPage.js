import React from "react";
import "./LandingPage.css";
import profiles from "../data/profiles/profiles.json"
import Button from "../components/button/Button.js";

function LandingPage() {
  return (
    <div className="landing-container">
      {/* <img /> */} 

      <div className="content">
        <span className="title"> Welcome Ballers...</span>
        <div className="profiles">
          {profiles.map((profile,index)=> (
          <div className="profile">
            <img className="image" src={profile.image_src} alt={profile.image_src}/>
            <span className="username">{profile.username}</span>
          </div>
          ))}

        </div>

        <Button label="About Page"/>
      </div>
    </div>
  );
}

export default LandingPage;
