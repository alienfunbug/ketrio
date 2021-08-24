import { PlayArrow, Add, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import React from "react";
import "./ListItem.css";

function ListItem() {
  return (
    <div className="listItem">
      <img src="../assets/images/Eric_full.PNG" 
      alt="" 
      />
      <div className="itemInfo">
        <div className="icons">
            ELKE
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownAltOutlined/>
           
        </div>
        <div className="itemInfoTop">

            <span>SF</span>
            <span>PG</span>
            <span>SG</span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
