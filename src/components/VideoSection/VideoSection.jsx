import "./VideoSection.scss";

function VideoSection ({videoData}){
  
  const {image, video} = videoData;

  return (
    <>
        <div className="video">
            <video className="video__player" controls poster={image} > 
                <source src={video} />
                    Your browser doesnot support video
            </video>
        </div>
    </>
  )
}

export default VideoSection;