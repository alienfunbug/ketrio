import {} from "@material-ui/icons";
import React from "react";
import "./ListItem.css";
import { Link } from "react-router-dom";

/* version with working link to default characterdetail page when clicking any character component
 */

function ListItem(props) {
  const {
    playerName,
    playerImg,
    playerRating,
    playerPosition1,
    playerPosition2,
    playerPosition3,
    key,
  } = props;

  return (
    <Link
      to={{
        pathname: `/characterDetailPage/${playerName}`,
        state: { playerNameProp: `${playerName}` }
      }}
      style={{ textDecoration: 'none' }}
    >
      <div className="listItem" key={key}>
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
    </Link>
  );
}

export default ListItem;
