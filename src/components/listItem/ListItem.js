import {
  PlayArrow,
  Add,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React from "react";
import "./ListItem.css";

function ListItem() {
  return (
    <div className="listItem">
        <div className="characterTitle">Eric</div>
      <img src="../assets/images/Eric_full.PNG" alt="" />
      <div className="SEPARATOR-CONTAINER-HERE">
      <div className="characterInfo">
        <span className="characterName">Eric</span>
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownAltOutlined />
        </div>
        <div className="positionInfo">
          <span className="position1">PG</span>
          <span className="position2"></span>
          <span className="position3">SF</span>
        </div>
        <div className="ratingInfo">
          <span className="rating">Rating 500</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ListItem;


/*
set up flex box and spacing for character name,
 positions (special CSS),
 rating

 structure basic data for json import

 put character name on top left of tile

 import json file and fill in basic elements
*/