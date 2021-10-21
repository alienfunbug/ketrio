import "./CharacterDetailPage.css";
import React from "react";
import { ArrowBackOutlined, ArrowForwardIos } from "@material-ui/icons";

import positionsData from "../data/characterData/positions.json";

function CharacterDetailPage() {
  return (
    <div>
      <div className="container">
        <div id="navBar">NavBar</div>
        <div className="title">
          Elke
          <div className="titleInfo">
            <div id="rating">Rating 500</div>
            <div id="cost">1 token / 500 shards</div>
            <div id="TBD">TBD</div>
          </div>
        </div>

        <div className="positionInfo1">
          <div id="positionName1">SG</div>
          <div>
            Reaper II: Fairly increases 3-pointer FG% when falling behind.
            Effect cleared after regaining the lead.
          </div>
          <div>Skill: N/A</div>
          Stats:
          <span className="stats">
            <span id="stat1">+2 3pt</span>
            <span id="stat2">+3 Run</span>
            <span id="stat3">-5 Contact</span>
          </span>
      
        </div>
        <div className="positionInfo2">Position2 sf +5m.-5c: Fairly increase midshot resistance when falling behind. Effect cleared after regaining the lead </div>
        <div className="positionInfo3">Position3 pg -5c +3steal +2run: Fairly increase intercept rate when falling behind. Fairly increase midshot resistance when behind. Effect cleared after regaining the lead</div>

        <div className="footer">
          <div id="evolve">
            <p>Evolve</p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/info_box.PNG`}
              alt="no image here"
              className="img1"
            />
          </div>
          <div id="fate">
            <p>Fate</p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/info_box.PNG`}
              alt="no image here"
              className="img1"
            />
          </div>
          <div id="avatar">
            <p>Avatar</p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/info_box.PNG`}
              alt="no image here"
              className="img1"
            />
          </div>
        </div>

        <div className="main">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/ranking_large_elke.PNG`}
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
