import React, { useState } from "react";
import "./EliteSkillDetailPage.css";

import skillData from "../data/characterData/skillpositions.json";
import { Link } from "react-router-dom";
import "./EliteSkillDetailPage.css";
import ModalVideo from "react-modal-video";
import "../components/modals/VideoModal.css";
import EliteSkillListItem from "../components/listItem/EliteSkillListItem";

function EliteSkillDetailPage(props) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const passedPositionProp = "Center"; //props.match.params.char;

  const skillCard = skillData.map((n) => {
    if (n.position === passedPositionProp) {
      return n.skill.map((skill, index) => {
        return (
          //key={index}
          <EliteSkillListItem
            key={index}
            name={skill.name}
            img={skill.img}
            video={skill.video}
            isChinese={skill.isChinese}
          />
        );
      });
    }
    return null;
  });

  {
    /*
  return <div style={{ color: "white" }}>{skillCard}</div>;
  */
  }

  return (
    <div className="overall-div">
      <div> back button </div>

      <div >
      {passedPositionProp} Skill
        <div className="skill-container">
  
          {skillCard}
        </div>
      </div>
    </div>
  );
}
export default EliteSkillDetailPage;
