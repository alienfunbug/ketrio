import "./List.css";
import ListItem from "../listItem/ListItem";
import React, { useRef, useState } from "react";
import { ArrowBackIosOutlined, ArrowForwardIos } from "@material-ui/icons";

function List() {
  
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
      console.log(distance);
    }

    if (direction === "right") {
      listReference.current.style.transform = `translateX(${
        tileWidthRight * -1 + distance
      }px)`;
      console.log(distance);
    }
  };

  return (
    <div className="list-container">
      <div className="title">All Stars</div>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider-arrow-left"
          onClick={() => clickHandler("left")}
          //style={{display: !isMoved && "none"}} slider
        
        />
        <div className="container" ref={listReference}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
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
