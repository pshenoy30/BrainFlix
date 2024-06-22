import "./VideoSection.scss";

function VideoSection ({videoData}){
  
  const {image, video} = videoData;
  const BRAINFLIX_API_URL = "http://localhost:8080"
  

  return (
    <>
        <div className="video">
            <video className="video__player" controls poster={BRAINFLIX_API_URL+image} > 
                <source src={video} />
                    Your browser doesnot support video
            </video>
        </div>
    </>
  )
}

export default VideoSection;