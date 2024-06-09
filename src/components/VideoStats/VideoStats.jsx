import likeIcon from "../../assets/Icons/likes.svg"
import viewsIcon from "../../assets/Icons/views.svg"

function VideoStats ({videoData}) {

  const {likes, views} = videoData
  return (
    <div>
        <div>
            <img src={likeIcon} alt="Like icon" />
            <h2>{likes}</h2>
        </div>
        <div>
            <img src={viewsIcon} alt="Like icon" />
            <h2>{views}</h2>
        </div>
    </div>
  )
}

export default VideoStats;