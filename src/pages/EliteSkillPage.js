
import React from "react";
import EliteSkillList from "../components/list/EliteSkillList.js";
import "./LandingPage.css";
import positions from "../data/characterData/skillpage.json";
import { Link } from "react-router-dom";
import MessageModal from "../components/modals/MessageModal";

function EliteSkillPage() {




  return (
    <div className="landing-container">
      <div className="landing-content">
        <span className="landing-title"> Elite Skills...</span>
        <div className="landing-profiles">
          {positions.map((positions, index) => (
            <div className="landing-profile" key={index}>
              <Link to={`/${positions.link}/`}>
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
          <MessageModal/>

        </div>
      </div>
    </div>
  );


}
export default EliteSkillPage;
