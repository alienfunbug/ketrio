import "./CharacterDetailPage.css";
import React from "react";
import PositionDetail from "../components/positionDetail/PositionDetail";
import VideoModal from "../components/modals/VideoModal";
import FateModal from "../components/modals/FateModal";
import characterData from "../data/characterData/characters.json";

function CharacterDetailPage(props) {
  const playerNameProp = props.match.params.char;

  let selectedCharacter;
  let characterImage;
  let rating;
  let cost;
  let TBD;
  let highlights;
  let fate1;
  let fate2;
  let fate3;
  let defaultPosition;

  const detailCard = characterData.map((n) => {
    if (n.selectedCharacter === playerNameProp) {
      return n.characterPosition.map((characterPosition, index) => {
        defaultPosition=characterPosition.position
        return (
          <PositionDetail
            id={index}
            selectedCharacter={n.selectedCharacter}
            position={characterPosition.position}
            featureName={characterPosition.featureName}
            featureDescription={characterPosition.featureDescription}
            skill={characterPosition.skill}
            skillDescription={characterPosition.skillDescription}
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
      highlights = n.highlights;
      fate1 = n.fate1;
      fate2 = n.fate2;
      fate3 = n.fate3;
    }return null;
  });

  return (
    <div>
      <div className="details-container">
        {/*<div id="details-navbar">NavBar</div>
         <div className="details-title">
        */}
       
        <div className={`details-title-${defaultPosition}`}>
          <span id="details-character-name">{selectedCharacter}</span>
          <div className="details-title-info">
            <div id="details-rating">{rating}</div>
            <div id="details-cost">{cost}</div>
            <div id="details-TBD">{TBD}</div>
          </div>
        </div>

        <div className="details-position-info-block">{detailCard}</div>

        <div className="details-footer">
          <div id="details-footer-subcontent">
          <FateModal className="details_icons_text" selectedCharacter={selectedCharacter} fatePosition={defaultPosition} fate1={fate1} fate2={fate2} fate3={fate3} />


          </div>
          <div id="details-footer-subcontent">
            <div className="details-fake-link-footer">N/A </div>

          </div>
          <div id="details-footer-subcontent">
            {highlights ? (
              <div>
                <div className="details-fake-link-footer">Highlights</div>
                <VideoModal highlights={highlights} />
              </div>
            ) : (
              <div className="border-test">
                <div className="details-fake-link-footer">Not Available</div>
                <VideoModal highlights={highlights} />
              </div>
            )}
          </div>
        </div>
 
        <div className="details-main">
          <img src={characterImage} alt="file not found" className="img1" />
        </div>
      </div>
    </div>
  );
}
export default CharacterDetailPage;

