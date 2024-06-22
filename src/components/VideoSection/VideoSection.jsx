import "./VideoSection.scss";
import ReactPlayer from "react-player";

function VideoSection ({videoData}){
  
  const {image, video} = videoData;
  const BRAINFLIX_API_URL = "http://localhost:8080"
  

  return (
    <>
        <div className="video">
            {/* <video className="video__player" controls poster={BRAINFLIX_API_URL+image} > 
                <source src={video} />
                    Your browser doesnot support video
            </video> */}
            <ReactPlayer className="video__player" url="../../assets/Video/BrainStation Sample Video.mp4" playing={true} muted={true} />
            {/* <Control /> */}
        </div>
    </>
  )
}

export default VideoSection;