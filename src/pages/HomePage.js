import "./HomePage.css";
import React from "react";
import List from "../components/list/List";
import positionsData from "../data/characterData/positions.json";

function HomePage() {
  const position = positionsData.map(({ position }) => {
    return (
      <div className="home-container">
        <List  position={position} />
      </div>
    );
  });
  return <div>{position}</div>;
}
export default HomePage;
