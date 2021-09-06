import {} from "@material-ui/icons";
import React from "react";
import "./ListItem.css";

function ListItem(props) {
  const {
    playerName,

    playerImg,
    playerRating,
    playerPosition1,
    playerPosition2,
    playerPosition3,
    id,
  } = props;

  return (
    <div className="listItem" key={id}>
      <div className="characterTitle">{playerName}</div>
      <img src={playerImg} alt="" />
      <div className="SEPARATOR-CONTAINER-HERE">
        <div className="characterInfo">
          <div className="ratingInfo">
            <span className="rating">{playerRating}</span>
          </div>
          <div className="positionInfo">
            <span className="position1">{playerPosition1}</span>
            <span className="position2">{playerPosition2}</span>
            <span className="position3">{playerPosition3}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
