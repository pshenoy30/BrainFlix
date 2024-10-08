import { useState, useEffect } from 'react';
import axios from 'axios';
import VideoSection from "../VideoSection/VideoSection.jsx"
import VideoDetails from '../VideoDetails/VideoDetails.jsx';
import Comment from '../Comment/Comment.jsx';
import NextVideo from '../NextVideo/NextVideo.jsx';
import "./Main.scss";
const BRAINFLIX_API_URL = "http://localhost:8080/"


function Main({videoToDisplayID, videoListData}){
  const [video, setVideo] = useState (null);
  const [error, setError] = useState (false);
  const [loaded, setLoaded] = useState(true);
  
  const getVideoDataById = async (videoId) => {
    try {
      const response = await axios.get(BRAINFLIX_API_URL+"videos/"+videoId);
      setVideo(response.data);
      setLoaded(false);
    } catch (error) {
      console.log("Couldn't fetch the data", error);
      setError(true);
    }
  }

  function filterVideos (id) {
    return videoListData.filter((video) => {
      return video.id !== id;
    })
  }

  useEffect(() => {
    getVideoDataById(videoToDisplayID);
  },[videoToDisplayID]);

  if(error) {
    return (
      <h1>Unfortunately, we couldn't fetch the data</h1>
    )
  }

  if(!loaded) {
    return (
      <>
        <VideoSection videoData={video} />
        <main className="main"> 
          <section className="main__right">
            <VideoDetails videoData={video} />
            <Comment videoComments={video.comments} videoToDisplay={videoToDisplayID}/>
          </section>
          <section className="main__left">
            <NextVideo videoData={filterVideos(videoToDisplayID)}/>
          </section>
        </main>
      </>
    )
  }else {
    return (
      <h1>Loading data</h1>
    )
  }
  
}

export default Main;