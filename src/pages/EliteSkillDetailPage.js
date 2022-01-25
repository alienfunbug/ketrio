import React, { useState } from "react";
import "./EliteSkillDetailPage.css";

import skillData from "../data/characterData/skillpositions.json";
import { Link } from "react-router-dom";

import ModalVideo from "react-modal-video";
import "../components/modals/VideoModal.css";
import EliteSkillListItem from "../components/listItem/EliteSkillListItem";

function EliteSkillDetailPage(props) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };


  const passedPositionProp = props.match.params.position;

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
      <Link
        className="skills-back-button"
        to={{
          pathname: `/skills/`,
        }}
        style={{ textDecoration: "none", color: "#FFF" }}
      >
        {" "}
        Back
      </Link>
      <div>
        <div className="skills-position-heading">
          {passedPositionProp} Skills
        </div>
        <div className="skill-container-parent">
          <div className="skill-container">{skillCard}</div>
        </div>
      </div>
    </div>
  );
}
export default EliteSkillDetailPage;
