import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../components/modals/VideoModal.css";



/* version with working link to default characterdetail page when clicking any character component
 */

function EliteSkillListItem(props) {
  const {
    video,
    name,
    img,
    isChinese,
    key,
  } = props;


  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };



  return (

    //key={index}
    <div className="skill-tile" onClick={toggleModal}>
   {console.log({name})};
    {modal && (
      <div className="">
        <ModalVideo
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

    <div className="skill-title">{name}</div>
    <img src={img} alt="File Not Found" />
  



  </div>
  );
}

export default EliteSkillListItem;
