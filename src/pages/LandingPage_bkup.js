import React from "react";
import "./LandingPage.css";
import profiles from "../data/profiles/profiles.json"
import Button from "../components/button/Button.js";
import {Link} from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-container">

      <div className="content">
        <span className="title"> Welcome Ballers...</span>
        <div className="profiles">
          {profiles.map((profile,index)=> (
          <div className="profile" key={index}>
    <Link className="image" to={`/${profile.link}/`}>
            <img  className="image" src={profile.image_src} alt={profile.image_src}/>
            </Link>
            <span className="display">{profile.display}</span>

         
          </div>
          ))}

        </div>

        <Button label="About Page"/>
      </div>
    </div>
  );
}

export default LandingPage;
