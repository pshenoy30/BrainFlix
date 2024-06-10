import "./VideoPlayer.scss"

function VideoPlayer ({videoData}) {

  const {image, video} = videoData;
  
  return (
    <>
    <video className="video-player" controls poster={image} > 
        <source src={video} />
        Your browser doesnot support video
    </video>
    </>
    
  )
}

export default VideoPlayer;
