
import React from "react";
import "./EliteSkillListItem.css";
import { Link } from "react-router-dom";

/* version with working link to default characterdetail page when clicking any character component
 */

function EliteSkillListItem(props) {
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
      <div className="skill-list-item" key={id}>
        <div className="skill-list-item-characterTitle">{playerName}</div>
        {console.log(playerName)}
        <img src={playerImg} alt="" />
        
        <div className="SEPARATOR-CONTAINER-HERE">
          <div className="skill-list-item-characterInfo">
            <div className="skill-list-item-ratingInfo">
              <span className="skill-list-item-rating">{playerRating}</span>
            </div>
            <div className="skill-list-item-positionInfo">
              <span className="skill-list-item-position1">{playerPosition1}</span>
              <span className="skill-list-item-position2">{playerPosition2}</span>
              <span className="skill-list-item-position3">{playerPosition3}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-list-item-characterText">{playerName}</div> {/*this is the text below */}
    </Link>
  );
}

export default EliteSkillListItem;
