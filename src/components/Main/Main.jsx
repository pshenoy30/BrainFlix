import { useState } from 'react';
import videoDetailsData from '../../data/video-details.json';
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx';
import Video from '../Video/Video.jsx';
import Comment from '../Comment/Comment.jsx';
import NextVideo from '../NextVideo/NextVideo.jsx';
import "./Main.scss";

function Main(){

  const [videoSelected, setVideoSelected] = useState(videoDetailsData[0]);

  const videoSelect = (videoId) => {
    console.log(videoId);
    const videoClicked = videoDetailsData.find((videoData) => {
        return videoData.id === videoId;
    });
    console.log(videoClicked);
    setVideoSelected(videoClicked);
  }

  return (
    <>
      <VideoPlayer videoData={videoSelected} />
      <div className="main">
        <div className="main__right">
          <Video videoData={videoSelected} />
          <Comment videoDataComment={videoSelected.comments} />
        </div>
        <div className="main__left">
          <NextVideo id={videoSelected.id} videoData={videoDetailsData} onVideoClicked={videoSelect}/>
        </div>
      </div>
    </>
  )
}

export default Main;