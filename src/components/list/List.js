import "./List.css";
import ListItem from "../listItem/ListItem";
import React, { useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIos } from "@material-ui/icons";
import positionData from "../../data/characterData/positions.json";

function List(props) {
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

  const characterCard = positionData.map((n) => {
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
    <div className="list-container">
      <div className="title">{position}</div>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider-arrow-left"
          onClick={() => clickHandler("left")}
          //style={{display: !isMoved && "none"}} slider
        />

        <div className="container" ref={listReference}>
          {characterCard}
        </div>
        <ArrowForwardIos
          className="slider-arrow-right"
          onClick={() => clickHandler("right")}
        />
      </div>
    </div>
  );
}

export default List;
