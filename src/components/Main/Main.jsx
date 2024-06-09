import { useState } from 'react';
import videoDetailsData from '../../data/video-details.json';
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx';
import VideoTitle from '../VideoTitle/VideoTitle.jsx';
import VideoInfo from '../VideoInfo/VideoInfo.jsx';
import VideoDescription from '../VideoDescription/videoDescription.jsx';
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
    <VideoPlayer videoData={videoSelected} />
    <VideoTitle videoDataTitle={videoSelected.title} />
    <VideoInfo videoData={videoSelected} />
    <VideoDescription videoDataDescription={videoSelected.description} />
    <Comment videoDataComment={videoSelected.comments} />
    <NextVideo id={videoSelected.id} videoData={videoDetailsData} onVideoClicked={videoSelect}/>
    </>
  )
}

export default Main;