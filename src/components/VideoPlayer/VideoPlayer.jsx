import {AiFillCloseCircle} from "react-icons/ai";

const VideoPlayer = ({active, setActive, animatoin}) => {
  return (
    <div className={`videoplayer__container ${active && 'active'}`}>

    <video controls autoPlay className={`videoplayer ${active && 'active'}`}>
      <AiFillCloseCircle className="close__button" />
      <source src={animatoin} type="video/mp4" />
    </video>


    <style>
      {`
      .videoplayer__container {
        top: 0;
        width: 85vw;
        position: fixed;
        height: 80vh;
        z-index: 100;
      }

      .videoplayer{
        width: 100%;
        height: 100%;
      }
      `}
    </style>
    </div>
  );
};

export default VideoPlayer;
