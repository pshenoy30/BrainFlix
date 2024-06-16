import "./VideoPlayer.scss"

function VideoPlayer ({videoData}) {

  // const {image, video} = videoData;
  
  return (
    <div className="video">
      <video className="video__player" controls poster={videoData.image} > 
        {/* <source src={video} />
        Your browser doesnot support video*/}
      </video>
    </div>
  )
}

export default VideoPlayer;
