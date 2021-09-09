import "./CharacterDetailPage.css";
import React from "react";
import { ArrowBackOutlined, ArrowForwardIos } from "@material-ui/icons";

import positionsData from "../data/characterData/positions.json";

function CharacterDetailPage() {
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <ArrowBackOutlined className="back-arrow" />
          Gori
        </div>
      </header>
      <div className="background">
        <div className="background-image">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/ranking_large.PNG`}
            alt="no image here"
            className="img1"
          />
          <div className="avatar">

            <img
              src={`${process.env.PUBLIC_URL}/assets/images/portraits/Gori_full.PNG`}
              alt="no image here"
              className="img2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CharacterDetailPage;
