function NextVideoList ({id, image, title, channel, onVideoSelected}) {
  return (
    <article key={id} onClick={onVideoSelected}>
        <img src={image} />
        <h2>{title}</h2>
        <h2>{channel}</h2>
    </article>
  )
}

export default NextVideoList;