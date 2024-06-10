import "./VideoTitle.scss";

function VideoTitle({videoDataTitle}){

    return (
        <article>
            <h1 className="video-title">{videoDataTitle}</h1>
            <hr className="video-title__divider"></hr>
        </article>
    )
  }
  
  export default VideoTitle;