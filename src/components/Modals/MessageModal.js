import React, { useState } from "react";
import "./Modal.css";
import "../button/Button"
function MessageModal() {


  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div onClick={toggleModal} className="button-container">
        About Page
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="dark-modal-content">
              <h2 className="place-holder">
                Why?
              </h2>

              <div className="fate-total">
                <div className="message-1"> ...For practice with React. A big thanks to the crew; especially Runtz and Delay for being The Plugs.
 
                If something needs to be updated or corrected, ping or email: alienfunbug@gmail.com</div>
      
              </div>
              <div className="disclaimer">-AlienfunBug</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageModal;
