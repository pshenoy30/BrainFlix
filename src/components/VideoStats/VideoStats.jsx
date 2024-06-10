import likeIcon from "../../assets/Icons/likes.svg"
import viewsIcon from "../../assets/Icons/views.svg"
import "./VideoStats.scss"

function VideoStats ({videoData}) {

  const {likes, views} = videoData
  return (
    <div className="video-data">
        <div className="video-data__stats">
            <img className="video-data__stats__image" src={viewsIcon} alt="Like icon" />
            <h2 className="video-data__stats__text">{views}</h2>
        </div>
        <div className="video-data__stats">
            <img className="video-data__stats__image" src={likeIcon} alt="Like icon" />
            <h2 className="video-data__stats__text">{likes}</h2>
        </div>
    </div>
  )
}

export default VideoStats;