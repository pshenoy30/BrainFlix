import "./VideoDetails.scss"

function VideoDetails ({videoDataChannel, videoDataTimestamp}){

    return (
        <div className="video-data">
            <h2 className="video-data__text">By {videoDataChannel}</h2>
            <h2 className="video-data__text video-data__text--silver">{videoDataTimestamp}</h2>
        </div>
    )
}
  
  export default VideoDetails;