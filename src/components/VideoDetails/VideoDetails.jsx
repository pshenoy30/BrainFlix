function VideoDetails ({videoDataChannel, videoDataTimestamp}){

    return (
        <div>
            <h2>By {videoDataChannel}</h2>
            <h2>{videoDataTimestamp}</h2>
        </div>
    )
  }
  
  export default VideoDetails;