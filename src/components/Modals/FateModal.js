import React, { useState } from "react";
import "./Modal.css";

function FateModal(props) {
 const { selectedCharacter,fatePosition, fate1, fate2, fate3 } = props;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div onClick={toggleModal} className="details-fake-link-footer">
        Fate
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content">
              <h2 className={fatePosition}>
                {selectedCharacter} Fate Members
              </h2>

              <div className="fate-total">
                <div className="fate-1">{fate1}</div>
                <div className="fate-1">{fate2}</div>
                <div className="fate-1">{fate3}</div>
              </div>
              <div className="disclaimer">Subject to change</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FateModal;
