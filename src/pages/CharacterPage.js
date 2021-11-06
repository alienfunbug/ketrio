import "./CharacterPage.css";
import React from "react";
import List from "../components/list/List.js";
import positionsData from "../data/characterData/positions.json";

function CharacterPage() {
  const position = positionsData.map(({ position }, i) => {
    return (
      <div className="home-container"  key={i}>
        <List  position={position} />
      </div>
    );
  });
  return <div>{position}</div>;
}
export default CharacterPage;
