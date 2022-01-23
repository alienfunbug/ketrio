
import React from "react";
import "./CharacterListItem.css";
import { Link } from "react-router-dom";

/* version with working link to default characterdetail page when clicking any character component
 */

function CharacterListItem(props) {
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
    <Link
      to={{
        pathname: `/characterDetailPage/${playerName}`,
        state: { playerNameProp: `${playerName}` }
      }}
      style={{ textDecoration: 'none' }}
    >
      <div className="list-item" key={id}>
        <div className="list-item-characterTitle">{playerName}</div>
        {console.log(playerName)}
        <img src={playerImg} alt="" />
        <div className="SEPARATOR-CONTAINER-HERE">
          <div className="list-item-characterInfo">
            <div className="list-item-ratingInfo">
              <span className="list-item-rating">{playerRating}</span>
            </div>
            <div className="list-item-positionInfo">
              <span className="list-item-position1">{playerPosition1}</span>
              <span className="list-item-position2">{playerPosition2}</span>
              <span className="list-item-position3">{playerPosition3}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CharacterListItem;
