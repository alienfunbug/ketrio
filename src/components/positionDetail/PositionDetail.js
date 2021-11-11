import {} from "@material-ui/icons";
import React from "react";
//import "./PositionDetail.css";

function PositionDetail(props) {
  const {
    position,
    featureName,
    featureDescription,
    skill,
    skillDescription,
    statsPositive,
    statsNegative,
    statsNeutral,
    passive,
    eliteSkills,
    id,
  } = props;

  return (
    <div className={`details-position-info${id}`} key={id}>
      <div className={position}>
        <div id="details-position-name">{position}</div>
        <div>
          <span /*PUT STUFF HERE */>{featureName}</span>
          <span /*PUT STUFF HERE */>{featureDescription}</span>
        </div>
        <div>
          <span /*PUT STUFF HERE */>Skill: </span>
          <span /*PUT STUFF HERE */>{skillDescription}</span>
        </div>
        <span className="details-statsHeader">Stats:</span>
        <span className="details-stats">
          <span className="details-stats-neutral">{statsNeutral}</span>
          <span className="details-stats-positive">{statsPositive}</span>
          <span className="details-stats-negative">{statsNegative}</span>
        </span>
        <div>
          <span /*PUT STUFF HERE */>Passive: </span>
          <span /*PUT STUFF HERE */>{passive} </span>
        </div>
        <div className="details-fake-link"> {eliteSkills}</div>
      </div>
    </div>
  );
}

export default PositionDetail;
