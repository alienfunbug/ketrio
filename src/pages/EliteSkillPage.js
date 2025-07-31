
import React from "react";

import "./LandingPage.css";
import positions from "../data/characterData/skillpage.json";
import { Link } from "react-router-dom";
import EliteSkillsModal from "../components/modals/EliteSkillsModal";

function EliteSkillPage() {



  return (
    <div className="landing-container">
      <Link
        className="landing-back-button"
        to={{
          pathname: `/`,
        }}
        style={{ textDecoration: "none", color: "#FFF" }}
      >
        {" "}
        Back
      </Link>
      
      <div className="landing-content">
        <span className="landing-title"> ...Elite Skills...</span>
        <div className="landing-profiles">
          {positions.map((positions, index) => (
            <div className="landing-profile" key={index}>
              {/* <Link to={`/${positions.link}/`}>  */}
                             <Link to={`/skills/${positions.position}`}>
                <img
                  className="landing-image"
                  src={positions.image_src}
                  alt="file not found"
                />
              </Link>
              <span className="landing-display">{positions.display}</span>
            </div>
          ))}
        </div>
        <div>
          <EliteSkillsModal/>


        </div>
      </div>
    </div>
  );


}
export default EliteSkillPage;
