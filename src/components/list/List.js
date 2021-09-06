import "./List.css";
import ListItem from "../listItem/ListItem";
import React, { useRef, useState } from "react";
import { ArrowBackIosOutlined, ArrowForwardIos } from "@material-ui/icons";
import characterData from "../../data/characterData/positions.json";

function List(props) {
  const { position } = props;

  const [isMoved, setIsMoved] = useState(false);
  const listReference = useRef();
  const tileWidthLeft = 215;
  const tileWidthRight = 255;
  //tile width - 10px for margin right of listItem

  const clickHandler = (direction) => {
    setIsMoved(true); //activate slider

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

  const testData = characterData.map((n) => {

    if (n.position === position) {

    return  n.players.map((player,i) =>{

        return(
        <ListItem 
        id={i}
        playerName={player.name}
        playerImg={player.img}
        playerRating={player.rating}
        playerPosition1={player.position1}
        playerPosition3={player.position2}
        playerPosition3={player.position3}



        />
        );

      })
    }


    
  })


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
        

          {testData}

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
