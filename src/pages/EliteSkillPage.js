import "./CharacterPage.css";
import React from "react";
import CharacterList from "../components/list/CharacterList.js";
import skillPositionsData from "../data/characterData/skillpositions.json";

function EliteSkillPage() {
  const position = skillPositionsData.map(({ position }, i) => {
    return (
      <div className="home-container"  key={i}>
        <div color="white"> Text here for testing</div>
        <CharacterList  position={position} />
      </div>
    );
  });
  return <div>{position}</div>;
}
export default EliteSkillPage;
