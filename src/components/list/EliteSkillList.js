import "./EliteSkillList.css";
import ListItem from "../listItem/EliteSkillListItem";
import React, { useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIos } from "@material-ui/icons";
import skillPositionData from "../../data/characterData/skillpositions.json";

function EliteSkillList(props) {
  const { position } = props;

  const listReference = useRef();
  const tileWidthLeft = 215;
  const tileWidthRight = 255;
  //tile width - 10px for margin right of listItem

  const clickHandler = (direction) => {
    let distance = listReference.current.getBoundingClientRect().x - 50;

    if (direction === "left") {
      listReference.current.style.transform = `translateX(${
        tileWidthLeft + distance
      }px)`;
    }

    if (direction === "right") {
      listReference.current.style.transform = `translateX(${
        tileWidthRight * -1 + distance
      }px)`;
    }
  };

  const characterCard = skillPositionData.map((n) => {
    if (n.position === position) {
      return n.players.map((player, index) => {
        return (
          <ListItem
            key={index}
            playerName={player.name}
            playerImg={player.img}
            playerRating={player.rating}
            playerPosition1={player.position1}
            playerPosition2={player.position2}
            playerPosition3={player.position3}
          />
        );
      });
    }
    return null;
  });

  return (
    <div className="skill-list-container">
      <div className="skill-list-title">{position}</div>
      <div className="skill-list-wrapper">
        <ArrowBackIosOutlined
          className="skill-list-slider-arrow-left"
          onClick={() => clickHandler("left")}
          //style={{display: !isMoved && "none"}} slider
        />

        <div className="skill-list-container" ref={listReference}>
          {characterCard}
        </div>
        <ArrowForwardIos
          className="skill-list-slider-arrow-right"
          onClick={() => clickHandler("right")}
        />
      </div>
    </div>
  );
}

export default EliteSkillList;
