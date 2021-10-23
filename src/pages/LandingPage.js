import React from "react";
import "./LandingPage.css";
import profiles from "../data/profiles/profiles.json"
import Button from "../components/button/Button.js";
import {Link} from 'react-router-dom';

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
            <span className="display">{profile.display}</span>
            <Link to={`/${profile.link}/`}>  URL here  </Link>
         
          </div>
          ))}

        </div>

        <Button label="About Page"/>
      </div>
    </div>
  );
}

export default LandingPage;
