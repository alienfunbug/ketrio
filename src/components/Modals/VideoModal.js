import ModalVideo from "react-modal-video";
import React, { useState } from "react";
import "./VideoModal.css";

function VideoModal(props) {
  const { highlights } = props;
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <span>
      <span onClick={toggleModal} className="details-fake-link-footer">
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

export default VideoModal;
