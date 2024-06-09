function VideoPlayer ({videoData}) {

  const {image, video} = videoData;
  
  return (
    <>
    <video controls poster={image} > 
        <source src={video} />
        Your browser doesnot support video
    </video>
    </>
    
  )
}

export default VideoPlayer;
