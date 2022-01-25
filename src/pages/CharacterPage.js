import React from "react";
import CharacterList from "../components/list/CharacterList.js";
import characterPositionsData from "../data/characterData/characterpositions.json";
import { Link } from "react-router-dom";

function CharacterPage() {
  const position = characterPositionsData.map(({ position }, i) => {
    return (
      <div className="home-container" key={i}>
        <CharacterList position={position} />
      </div>
    );
  });

  return (
    <div>
      <Link  
        to={{
          pathname: `/`,
        }}
        style={{ textDecoration: "none", color: "#FFF", padding: ".25rem" }}
      >

        Back
      </Link>
      {position}
    </div>
  );
}
export default CharacterPage;
