import ModalVideo from "react-modal-video";
import React, { useState } from "react";
import "./VideoModal.css";

function SkillsVideoModal(props) {
  const { video } = props;
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <span>
      <span onClick={toggleModal}>
        Highlights
      </span>
      {modal && (
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={modal}
            autoplay={1}
            mute={1}
            videoId={highlights}
            onClose={() => setModal(false)}
          />
        </div>
      )}
    </span>
  );
}

export default SkillsVideoModal;
