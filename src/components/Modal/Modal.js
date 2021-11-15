import React, { useState } from "react";
import "./Modal.css";

function Modal(props) {
  const { selectedCharacter, position, eliteSkills } = props;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Elite Skills
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content">
              <h2>{selectedCharacter} {position} Elite Skills</h2>

              <img src={eliteSkills} alt="no image here" />
              <button className="close-modal" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
