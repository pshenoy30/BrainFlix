import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BRAINFLIX_API_KEY, BRAINFLIX_API_URL } from "../../utils/api.js";
import axios from "axios";
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx';
import Video from '../Video/Video.jsx';
import Comment from '../Comment/Comment.jsx';
import NextVideo from '../NextVideo/NextVideo.jsx';
import "./Main.scss";

function Main({videoData}){

  // const [loaded, setLoaded]  = useState(true);
  // const [videos, setVideos]  = useState(null);
  // const [err, setErr] = useState(false);
  // const { videoId } = useParams();

  // const getVideoUrl = BRAINFLIX_API_URL+"videos"+BRAINFLIX_API_KEY;

  // const getVideos = async () => {
  //   try{
  //       const response = await axios.get(getVideoUrl);
  //       setVideos(response.data);
  //       setLoaded(false);
  //   }catch(err){
  //       console.log("Couldn't fetch data ", err)
  //       setErr(true);
  //   }
  // }

  // if (loaded) {
  //   return <h2>Loading video data</h2>
  // } 

  // if (setErr) {
  //   return <h2>Unfortunately, we have encountered an issue with server. Please try again later or refresh the page</h2>
  // }

  // useEffect( () => {
  //     console.log("getVideos is being called");
  //     getVideos();
  // },[])

  // const videoToBeDisplayedId = () => {
  //   console.log(videoId);
  //   if (videoId === null){
  //       return videos[0]
  //   }else{
  //       return videos.find((id)=>{
  //           return  id === videoId;
  //       })
  //   }
  // }

  // console.log(videoToBeDisplayedId());

  return (
    <>
      <VideoPlayer videoData={videoData} />
      <div className="main">
        <div className="main__right">
          <Video videoData={videoData} />
          {/* <Comment videoData={videoData.Comment} /> */}
        </div>
        {/* <div className="main__left">
          <NextVideo nextVideos = {filteredVideos} />
        </div> */}
      </div>
    </>
  )


  // useEffect( () => {
  //   console.log("getVideos is being called");
  //   videoToBeDisplayedId();
  // },[])

  

  // const filteredVideos = () => {
  //   if (videoId === undefined){
  //       console.log(videos.slice(1,responseData.length()))
  //       return videos.slice(1,responseData.length())
  //   }else{
  //       return videos.filter((id)=>{
  //           return  id !== videoId;
  //       })
  //   }
  // }

  // console.log(filteredVideos());

  
}

export default Main;