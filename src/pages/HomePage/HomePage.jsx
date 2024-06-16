import Header from "../../components/Header/Header.jsx";
import Main from "../../components/Main/Main.jsx";
import { useEffect, useState } from "react";
import { BRAINFLIX_API_KEY, BRAINFLIX_API_URL } from "../../utils/api.js";
import axios from "axios";

 function HomePage() {

    // const [loaded, setLoaded]  = useState(true);
    const [videos, setVideos]  = useState(null);
    // const [err, setErr] = useState(false);

    const getVideoUrl = BRAINFLIX_API_URL+"videos"+BRAINFLIX_API_KEY;

  const getVideos = async () => {
    try{
        const response = await axios.get(getVideoUrl);
        console.log(response.data)
        setVideos(response.data[0]);
        // setLoaded(false);
    }catch(err){
        console.log("Couldn't fetch data ", err)
        // setErr(true);
    }
  }

//   if (loaded) {
//     return <h2>Loading video data</h2>
//   } 

//   if (setErr) {
//     return <h2>Unfortunately, we have encountered an issue with server. Please try again later or refresh the page</h2>
//   }

  useEffect( () => {
      console.log("getVideos is being called");
      getVideos();
  },[]);

  console.log(videos);

    return (
        <>
            <Header />
            <Main videoData={videos}/>
        </>
    )
 }

export default HomePage;