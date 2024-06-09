import { useState } from 'react';
import videoDetailsData from '../../data/video-details.json';
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx';
import VideoTitle from '../VideoTitle/VideoTitle.jsx';
import VideoInfo from '../VideoInfo/VideoInfo.jsx';

function Main(){

  const [videoSelected, setVideoSelected] = useState(videoDetailsData[0]);

  return (
    <>
    <VideoPlayer videoData={videoSelected} />
    <VideoTitle videoDataTitle={videoSelected.title} />
    <VideoInfo videoData={videoSelected} />
    </>
  )
}

export default Main;