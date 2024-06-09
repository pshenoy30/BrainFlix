import { useState } from "react";
import NextVideoList from "../NextVideoList/NextVideoList";
import "./NextVideo.scss";

function NextVideo ({id, videoData, onVideoClicked}) {
  const [originVideoData, setNewVideoData] = useState(videoData);

  function createNewVideoList(id){
    const newVideoData = videoData.filter((item) => item.id !== id);
    setNewVideoData(newVideoData);
    console.log(newVideoData);
    newVideoData.map((videoElement) => {
        return(
            <aside>
                <h2>Next videos</h2>
                <NextVideoList key={newVideoData.id} id={newVideoData.id} image={newVideoData.image} title={newVideoData.title} channel={newVideoData.channel} onVideoClicked={displaySelectedVideo} />
            </aside>
        )
    })
  }

  return (
    <aside class="next-video">
        <h2 class="next-video__header">Next videos</h2>
        {videoData.map((videoElement) => {
            function displaySelectedVideo (){
                onVideoClicked(videoElement.id);
                createNewVideoList(videoElement.id);
            }
            if(videoElement.id !== id){
                return (
                    <article class="next-video__list" key={videoElement.id} onClick={displaySelectedVideo}>
                        <img class="next-video__list__image" src={videoElement.image} />
                        <div class="next-video__list__details">
                            <h2 class="next-video__list__details__text">{videoElement.title}</h2>
                            <h2 class="next-video__list__details__text next-video__list__details__text--light">{videoElement.channel}</h2>
                        </div>
                    </article>
                )
            }
        })}
    </aside>
  )
}

export default NextVideo;