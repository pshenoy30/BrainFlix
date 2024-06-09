function NextVideo ({videoData}) {

  //const {title, image, channel} = videoData  
  return (
    <aside>
    <h2>Next videos</h2>
        {videoData.map((videoElement) => {
            return (
                <>
                    <img src={videoElement.image} />
                    <h2>{videoElement.title}</h2>
                    <h2>{videoElement.channel}</h2>
                </>
            )
        })}
    </aside>
  )
}

export default NextVideo;