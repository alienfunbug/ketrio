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
          <span id="characterName">Elke</span>
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
          <span className="statsHeader">Stats:</span>
          <span className="stats">
            <span className="statPositive">+2 3pt</span>
            <span className="statPositive">+3 Run</span>
            <span className="statNegative">-5 Contact</span>

          </span>
          <div className="fakeLink">Elite Skills Link</div>
        </div>
        <div className="positionInfo2">
          <div id="positionName1">SF</div>
          <div>
            Reaper II: Fairly increase midshot resistance when falling behind.
            Effect cleared after regaining the lead.
          </div>
          <div>Skill: N/A</div>
          <span className="statsHeader">Stats:</span>
          <span className="stats">
            <span className="statPositive">+5 mid</span>
            <span className="statNegative">-5 Contact</span>
          </span>
          <div className="fakeLink">Elite Skills Link</div>
        </div>
        <div className="positionInfo3">
          <div id="positionName1">PG</div>
          <div>
            Reaper II: Fairly increase intercept rate when falling behind.
            Fairly increase midshot resistance when behind. Effect cleared after
            regaining the lead.
          </div>
          <div>Skill: N/A</div>
          <span className="statsHeader">Stats:</span>
          <span className="stats">
            <span className="statPositive">+3 Steal</span>
            <span className="statPositive">+2 Run</span>
            <span className="statNegative">-5 Contact</span>
          </span>
          <div className="fakeLink">Elite Skills Link</div>
        </div>

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

/*
setup routing for ketrio project

load data from json file first step
rewrite paper form of profile
set up header with content and fonts
set up middle data plan
set up footer
)

*/
