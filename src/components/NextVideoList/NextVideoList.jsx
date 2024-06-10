import "../NextVideo/NextVideo.scss"

function NextVideoList ({id, image, title, channel, onVideoSelected}) {
  return (
    <article className="next-video__list" key={id} onClick={onVideoSelected}>
        <img className="next-video__list__image" src={image} />
        <div className="next-video__list__details">
          <h2 className="next-video__list__details__text">{title}</h2>
          <h2 className="next-video__list__details__text next-video__list__details__text--light">{channel}</h2>
        </div>
    </article>
  )
}

export default NextVideoList;