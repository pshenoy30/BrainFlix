import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BRAINFLIX_API_KEY, BRAINFLIX_API_URL } from "../../utils/api.js"
import axios from "axios";

function HomePage () {
  const [loaded, setLoaded] = useState(true);
  const [videoList, setVideoList] = useState(null);
  const [error, setError] = useState (false);
  const { videoId } = useParams();

  async function getVideos () {
    try{
      const response = await axios.get(BRAINFLIX_API_URL+"videos"+BRAINFLIX_API_KEY);
      setVideoList(response.data);
      setLoaded(false)
      return loaded;
    }catch (error){
      console.log("Couldn't fetch the data", err);
      setError(true)
    }
  }

  useEffect(() => {
    getVideos();
  },[]);

  if(!loaded){
    const videoToDisplay = videoId || videoList[0]?.id;

    return (
      <>
          <Header />
          <Main videoToDisplayID={videoToDisplay} videoListData = {videoList}/>
      </>
    )
  }
}

export default HomePage;