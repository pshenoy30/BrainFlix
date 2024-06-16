import "./VideoSection.scss";

function VideoSection ({videoData}){
  
  const {image, video, title} = videoData;

  return (
    <>
        <div className="video">
            <video className="video__player" controls poster={image} > 
                <source src={video} />
                    Your browser doesnot support video
            </video>
        </div>
        <section className="video-section">
            <article>
                <h1 className="video-section__title">{title}</h1>
                <hr className="video-section__title__divider"/>
            </article>
        </section>
    </>
  )
}

export default VideoSection;