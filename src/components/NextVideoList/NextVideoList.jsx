import "../NextVideo/NextVideo.scss"

function NextVideoList ({id, image, title, channel, onVideoSelected}) {
  return (
    <article class="next-video__list" key={id} onClick={onVideoSelected}>
        <img class="next-video__list__image" src={image} />
        <div class="next-video__list__details">
          <h2 class="next-video__list__details__text">{title}</h2>
          <h2 class="next-video__list__details__text next-video__list__details__text--light">{channel}</h2>
        </div>
    </article>
  )
}

export default NextVideoList;