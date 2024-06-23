import dynamicTimeStamp from "../../utils/dynamicTimeStamp.js";
import likeIcon from "../../assets/Icons/likes.svg"
import viewsIcon from "../../assets/Icons/views.svg"
import "./VideoDetails.scss"

function Video ({videoData}){

  const {channel,timestamp, likes, views,description, title} = videoData;

  return (
    <>
      <article className="video-details">
          <h1 className="video-details__title">{title}</h1>
          <hr className="video-details__title__divider"/>
      </article>
      <article className="video-info">
              <div className="video-data">
                  <h2 className="video-data__text video-data__text--bold">By {channel}</h2>
                  <h2 className="video-data__text video-data__text--silver">{dynamicTimeStamp(timestamp)}</h2>
              </div>
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
      </article>
      <hr className="video-data__div"/>
      <article>
        <p className="video-description">{description}</p>
      </article>
    </>
  )
}

export default Video;