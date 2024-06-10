import "./VideoDescription.scss"

function VideoDescription ({videoDataDescription}) {
  return (
    <article>
        <p className="video-description">{videoDataDescription}</p>
    </article>
  )
}

export default VideoDescription;
