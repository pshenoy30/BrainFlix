import "./NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo ({videoData}) {

  return (
    <aside class="next-video">
        <h2 class="next-video__header">Next videos</h2>
        {videoData.map((videoElement) => {
            const paramLink = `/videos/${videoElement.id}`;
                return (
                        <article className="next-video__list" key={videoElement.id} >
                            <Link to={paramLink} >
                                <img className="next-video__list__image" src={videoElement.image} />
                            </Link>
                            <div className="next-video__list__details">
                                <h2 className="next-video__list__details__text">{videoElement.title}</h2>
                                <h2 className="next-video__list__details__text next-video__list__details__text--light">{videoElement.channel}</h2>
                            </div>
                        </article>
                )
            }
        )}
    </aside>
  )
}

export default NextVideo;