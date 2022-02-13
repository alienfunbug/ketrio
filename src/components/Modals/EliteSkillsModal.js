import React, { useState } from "react";
import "./Modal.css";
import "../button/Button"
function EliteSkillsModal() {


  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div onClick={toggleModal} className="button-container">
        Elite Skills FAQs
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="dark-modal-content">
              <h2 className="place-holder">
                How Does It Work?
              </h2>

              <div className="fate-total">
                <div className="message-1"> The higher rating the character, the more elite skills they will have.
                </div>
                <div className="message-1"> Elite skills cost 1 Purple, 5 Gold Books, and 4000 Coins WEEKLY.
                </div>
                <div className="message-1"> Elite skills are optional, you can pick and chose which you need, or use them all.
                </div>
      
              </div>
              <div className="disclaimer">-AlienfunB</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EliteSkillsModal;
