import "./CharacterDetailPage.css";
import React from "react";
import { ArrowBackOutlined, ArrowForwardIos } from "@material-ui/icons";

import positionsData from "../data/characterData/positions.json";

function CharacterDetailPage() {
  return (
    <div>
      <div className="details-container">
        <div id="details-navbar">NavBar</div>
        <div className="details-title">
          <span id="details-character-name">Elke</span>
          <div className="details-title-info">
            <div id="details-rating">Rating 500</div>
            <div id="details-cost">1 token / 500 shards</div>
            <div id="details-TBD">TBD</div>
          </div>
        </div>

        <div className="details-position-info1">
          <div id="details-position-name">SG</div>
          <div>
            Reaper II: Fairly increases 3-pointer FG% when falling behind.
            Effect cleared after regaining the lead.
          </div>
          <div>Skill: N/A</div>
          <span className="details-statsHeader">Stats:</span>
          <span className="details-stats">
            <span className="details-stats-positive">+2 3pt</span>
            <span className="details-stats-positive">+3 Run</span>
            <span className="details-stats-negative">-5 Contact</span>

          </span>
          <div className="details-fake-link">Elite Skills Link</div>
        </div>
        <div className="details-position-info2">
          <div id="details-position-name">SF</div>
          <div>
            Reaper II: Fairly increase midshot resistance when falling behind.
            Effect cleared after regaining the lead.
          </div>
          <div>Skill: N/A</div>
          <span className="details-statsHeader">Stats:</span>
          <span className="details-stats">
            <span className="details-stats-positive">+5 mid</span>
            <span className="details-stats-negative">-5 Contact</span>
          </span>
          <div className="details-fake-link">Elite Skills Link</div>
        </div>
        <div className="details-position-info3">
          <div id="details-position-name">PG</div>
          <div>
            Reaper II: Fairly increase intercept rate when falling behind.
            Fairly increase midshot resistance when behind. Effect cleared after
            regaining the lead.
          </div>
          <div>Skill: N/A</div>
          <span className="details-statsHeader">Stats:</span>
          <span className="details-stats">
            <span className="details-stats-positive">+3 Steal</span>
            <span className="details-stats-positive">+2 Run</span>
            <span className="details-stats-negative">-5 Contact</span>
          </span>
          <div className="details-fake-link">Elite Skills Link</div>
        </div>

        <div className="details-footer">
          <div id="details-evolve">
            <p>Evolve</p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/info_box.PNG`}
              alt="no image here"
              className="img1"
            />
          </div>
          <div id="details-fate">
            <p>Fate</p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/info_box.PNG`}
              alt="no image here"
              className="img1"
            />
          </div>
          <div id="details-avatar">
            <p>Avatar</p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/info_box.PNG`}
              alt="no image here"
              className="img1"
            />
          </div>
        </div>

        <div className="details-main">
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


load data from json file first step
rewrite paper form of profile
set up header with content and fonts
set up middle data plan
set up footer
)

*/
