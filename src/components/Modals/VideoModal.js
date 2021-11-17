import ModalVideo from "react-modal-video";
import React, { useState } from "react";
import "./VideoModal.css";

function VideoModal(props) {

    const {highlights} = props;
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div onClick={toggleModal} className="details-fake-link">
      <img
                className="details_icons"
                src={`${process.env.PUBLIC_URL}/assets/images/trio_test_images/3b.PNG`}
                alt="no image here"
              />
      </div>
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
    </div>
  );
}

export default VideoModal;
