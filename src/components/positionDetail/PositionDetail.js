import {} from "@material-ui/icons";
import React from "react";
import "./PositionDetail.css";

function PositionDetail(props) {
  const {
    position,
    featureName,
    featureDescription,
    skill,
    statsPositive,
    statsNegative,
    eliteSkills,
    id,
  } = props;

  return (

<div className="na" key={id}>
    <div className={position}>
    <div id="details-position-name">{position}</div>
    <div>
      <span /*PUT STUFF HERE */>{featureName}</span>
      <span /*PUT STUFF HERE */>{featureDescription}</span>
    </div>
    <div>
        <span /*PUT STUFF HERE */>SKILL:</span>
      <span /*PUT STUFF HERE */>{skill} </span>
    </div>
    <span className="details-statsHeader">Stats:</span>
    <span className="details-stats">
      <span className="details-stats-positive">{statsPositive}</span>
      <span className="details-stats-positive">{statsNegative}</span>
    </span>
    <div className="details-fake-link">{eliteSkills}</div>
  </div>






    </div>
  );
}

export default PositionDetail;
