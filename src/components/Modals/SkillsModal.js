import React, { useState } from "react";
import "./Modal.css";

function SkillsModal(props) {
  const { selectedCharacter, position, eliteSkills } = props;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div onClick={toggleModal} className="details-fake-link">
        Elite Skills
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content">
              <h2 className={position}>
                {selectedCharacter} {position} Elite Skills
              </h2>

              <img src={eliteSkills} alt="file not found" />
              {/*<button className="close-modal" onClick={toggleModal}>
                Close
      </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillsModal;
