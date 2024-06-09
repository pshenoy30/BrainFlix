import VideoDetails from "../VideoDetails/VideoDetails.jsx"
import VideoStats from "../VideoStats/VideoStats.jsx";

function VideoInfo ({videoData}){

  return (
    <article>
        <VideoDetails videoDataChannel = {videoData.channel} videoDataTimestamp = {videoData.timestamp} />
        <VideoStats  videoData = {videoData} />
        <hr />
    </article>
  )
}

export default VideoInfo;