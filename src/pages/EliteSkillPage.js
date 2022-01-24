import "./CharacterPage.css";
import React from "react";
import EliteSkillList from "../components/list/EliteSkillList.js";
import skillPositionsData from "../data/characterData/skillpositions.json";

function EliteSkillPage() {
  const position = skillPositionsData.map(({ position }, i) => {
    return (
      <div className="home-container"  key={i}>
        <div style={{color:"white"}}> Text here for testing</div>
        <EliteSkillList  position={position} />
      </div>
    );
  });
  return <div>{position}</div>;
}
export default EliteSkillPage;
