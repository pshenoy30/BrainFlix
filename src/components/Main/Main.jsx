import { useState } from 'react';
import videoDetailsData from '../../data/video-details.json';
import Video from '../Video/Video.jsx';
import Comment from '../Comment/Comment.jsx';
import NextVideo from '../NextVideo/NextVideo.jsx';

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
    <Video videoData={videoSelected} />
    <Comment videoDataComment={videoSelected.comments} />
    <NextVideo id={videoSelected.id} videoData={videoDetailsData} onVideoClicked={videoSelect}/>
    </>
  )
}

export default Main;