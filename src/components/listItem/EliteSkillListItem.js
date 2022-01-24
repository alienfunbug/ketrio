
import React, { useState } from "react";
import "./EliteSkillListItem.css";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "../modals/VideoModal.css";



/* version with working link to default characterdetail page when clicking any character component
 */

function EliteSkillListItem(props) {
  const {
    playerName,
    playerImg,
    video,
    isChinese,
    id,
  } = props;


  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };



  return (
    <div onClick={toggleModal}>
      
      <div className="skill-list-item" key={id}>

        {console.log(playerName)}
        <img src={playerImg} alt="" />
        
        <div className="SEPARATOR-CONTAINER-HERE">
          <div className="skill-list-item-characterInfo">

          </div>
        </div>
      </div>
      <div className="skill-list-item-characterText">{playerName}</div> {/*this is the text below */}
      {modal && (
        <div className="full-width">
          <ModalVideo  className="full-width"
            channel="youtube"
            isOpen={modal}
            autoplay={1}
            mute={1}
            videoId={video}
            allowFullScreen
            onClose={() => setModal(false)}
          />
        </div>
      )}
</div>
  );
}

export default EliteSkillListItem;
