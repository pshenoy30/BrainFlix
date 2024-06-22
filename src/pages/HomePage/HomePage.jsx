import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import uploadIcon from "../../assets/Icons/upload.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BRAINFLIX_API_URL = "http://localhost:8080/";

function HomePage () {
  const [loaded, setLoaded] = useState(true);
  const [videoList, setVideoList] = useState(null);
  const [error, setError] = useState (false);
  const { videoId } = useParams();

  async function getVideos () {
    try{
      const response = await axios.get(BRAINFLIX_API_URL);
      setVideoList(response.data);
      setLoaded(false)
      return loaded;
    }catch (err){
      setError(true)
    }
  }

  useEffect(() => {
    getVideos();
  },[]);

  if(error) {
    return (
      <h1>Unfortunately, we were unable to load the data</h1>
    )
  }

  if(!loaded) {
    const videoToDisplay = videoId || videoList[0]?.id;

    return (
      <>
          <Header buttonIcon={uploadIcon} buttonName="UPLOAD" buttonContainerClass="button-container__upload" buttonClass="button-container__upload__button" buttonIconClass="button-container__upload__button__image" />
          <Main videoToDisplayID={videoToDisplay} videoListData = {videoList}/>
      </>
    )
  } else {
    return(
      <h1>Loading data</h1>
    )
  }
}

export default HomePage;