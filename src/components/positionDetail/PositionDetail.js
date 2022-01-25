import {} from "@material-ui/icons";
import React from "react";

import SkillsModal from "../modals/SkillsModal";

function PositionDetail(props) {
  const {
    selectedCharacter,
    position,
    featureName,
    featureDescription,

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
        <div className="details-padded-div">
          <span className="details-header">{featureName}</span>
          <span /*PUT STUFF HERE */>{featureDescription}</span>
        </div>
        <div className="details-padded-div">
          <span className="details-header">Skill: </span>
          <span /*PUT STUFF HERE */>{skillDescription}</span>
        </div>
        <span className="details-header">Stats:</span>
        <span className="details-stats">
          <span className="details-stats-neutral">{statsNeutral}</span>
          <span className="details-stats-positive">{statsPositive}</span>
          <span className="details-stats-negative">{statsNegative}</span>
        </span>
        <div className="details-padded-div">
          <span className="details-header">Passive: </span>
          <span /*PUT STUFF HERE */>{passive} </span>
        </div>

        <SkillsModal
          className="details-fake-link"
          selectedCharacter={selectedCharacter}
          position={position}
          eliteSkills={eliteSkills}
        />
      </div>
    </div>
  );
}

export default PositionDetail;
