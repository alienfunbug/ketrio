import "./List.css";
import ListItem from "../listItem/ListItem";
import React, { useRef, useState } from "react";
import { ArrowBackIosOutlined, ArrowForwardIos } from "@material-ui/icons";
import characterData from "../../data/characterData/positions.json";

function List(props) {

  const {
    position
  } = props

 


 // if (player !== undefined) console.log(player[0].name)

  const test = characterData;

  
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

  return (
<div>



    <div className="list-container">
      <div className="title">{position}</div>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider-arrow-left"
          onClick={() => clickHandler("left")}
          //style={{display: !isMoved && "none"}} slider
        
        />
        <div className="container" ref={listReference}>
        {test.map((players,img) => 
          <ListItem player={{position}.players}/>
          )}

        </div>
        <ArrowForwardIos
          className="slider-arrow-right"
          onClick={() => clickHandler("right")}
        />
      </div>
    </div>

  </div>);
}

export default List;
