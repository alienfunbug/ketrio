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
          <div>Gori</div>
        </div>
      </header>
      <div className="background">
        <div className="background-image">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/ranking_large.PNG`}
            alt="no image here"
            className="img1"
          />

        </div>
      </div>
    </div>
  );
}
export default CharacterDetailPage;

/* load data from json file first step
rewrite paper form of profile
set up header with content and fonts
set up middle data plan
set up footer
)


*/
