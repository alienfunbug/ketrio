import "./List.css";
import ListItem from "../listItem/ListItem";
import React from "react";
import { ArrowBackIosOutlined, ArrowForwardIos } from "@material-ui/icons";

function List() {
  return (
    <div className="list-container">
      <div className="title">All Stars</div>
      <div className="wrapper">
        <ArrowBackIosOutlined className="slider-arrow-left"/>
        <div className="container">
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>



        </div>
        <ArrowForwardIos className="slider-arrow-right"/>
      </div>
    </div>
  );
}

export default List;
