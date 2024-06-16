import dynamicTimeStamp from "../../utils/dynamicTimeStamp.js";
import likeIcon from "../../assets/Icons/likes.svg"
import viewsIcon from "../../assets/Icons/views.svg"
import "./VideoDetails.scss"

function Video ({videoData}){

  const {channel,timestamp, likes, views,description} = videoData;

  return (
    <section className="video-details">
        <article className="video-info">
                <div className="video-data">
                    <h2 className="video-data__text">By {channel}</h2>
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
            <hr />
            <article>
               <p className="video-description">{description}</p>
            </article>
    </section>
  )
}

export default Video;