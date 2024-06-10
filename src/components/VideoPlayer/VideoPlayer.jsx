import "./VideoPlayer.scss"

function VideoPlayer ({videoData}) {

  const {image, video} = videoData;
  
  return (
    <div class="video">
      <video className="video__player" controls poster={image} > 
        <source src={video} />
        Your browser doesnot support video
      </video>
    </div>
  )
}

export default VideoPlayer;
