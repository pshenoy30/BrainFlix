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
        <section>
            <article>
                <h1 className="video__title">{title}</h1>
                <hr />
            </article>
        </section>
    </>
  )
}

export default VideoSection;