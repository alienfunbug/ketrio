
import React from "react";
import CharacterList from "../components/list/CharacterList.js";
import characterPositionsData from "../data/characterData/characterpositions.json";

function CharacterPage() {
  const position = characterPositionsData.map(({ position }, i) => {
    return (
      <div className="home-container"  key={i}>
        <CharacterList  position={position} />
      </div>
    );
  });
  return <div>{position}</div>;
}
export default CharacterPage;
