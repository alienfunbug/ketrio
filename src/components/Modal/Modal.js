import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open Modal Button
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}>
            <div className="modal-content">
              <h2>Modal Elite Skills</h2>

              <img
              src={`${process.env.PUBLIC_URL}/assets/images/elite_skills/claw_elite_skills.PNG`}
              alt="no image here"
         
            />
              <button className="close-modal" onClick={toggleModal}>
                
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
