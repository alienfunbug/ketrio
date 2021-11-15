import "./CharacterDetailPage.css";
import React from "react";
import PositionDetail from "../components/positionDetail/PositionDetail";
import { ArrowBackOutlined, ArrowForwardIos } from "@material-ui/icons";

import characterData from "../data/characterData/characters.json";

function CharacterDetailPage(props) {
  console.log(props.match.params.char);

  const playerNameProp = props.match.params.char;

  let selectedCharacter;
  let characterImage;
  let rating;
  let cost;
  let TBD;

  console.log(playerNameProp);

  const detailCard = characterData.map((n) => {
    if (n.selectedCharacter === playerNameProp) {
      return n.characterPosition.map((characterPosition, index) => {
        return (
          <PositionDetail
            id={index}
            position={characterPosition.position}
            featureName={characterPosition.featureName}
            featureDescription={characterPosition.featureDescription}
            skill={characterPosition.skill}
            skillDescription={characterPosition.skillDescription }
            statsPositive={characterPosition.statsPositive}
            statsNegative={characterPosition.statsNegative}
            statsNeutral={characterPosition.statsNeutral}
            eliteSkills={characterPosition.eliteSkills}
            passive={characterPosition.passive}
            key={index}

            // add 3 more json topics for evolve fate avatar, elite skills
          />
        );
      });
    }
    return null;
  });

  characterData.map((n) => {
    if (n.selectedCharacter === playerNameProp) {
      selectedCharacter = n.selectedCharacter;
      characterImage = n.characterImage;
      rating = n.rating;
      cost = n.cost;
      TBD = n.TBD;
    }
  });

  return (
    <div>
      <div className="details-container">
        <div id="details-navbar">NavBar</div>
        <div className="details-title">
          <span id="details-character-name">{selectedCharacter}</span>
          <div className="details-title-info">
            <div id="details-rating">{rating}</div>
            <div id="details-cost">{cost}</div>
            <div id="details-TBD">{TBD}</div>
          </div>
        </div>

        <div className="details-position-info-block">{detailCard}</div>

        <div className="details-footer">
          <div id="details-evolve">
            <p>Evolve</p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/elite_skills/claw_elite_skills.PNG`}
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
            <p>Highlights</p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/info_box.PNG`}
              alt="no image here"
              className="img1"
            />
          </div>
        </div>

        <div className="details-main">
          <img src={characterImage} alt="no image here" className="img1" />
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
