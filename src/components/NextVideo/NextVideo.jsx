import { useState } from "react";
import NextVideoList from "../NextVideoList/NextVideoList";

function NextVideo ({id, videoData, onVideoClicked}) {
  const [filterData, setFilterData] = useState(id);

  function createNewVideoList(id){
    const newVideoData = videoData.filter((item) => item.id !== id);
    console.log(newVideoData);
    newVideoData.map((videoElement) => {
        return(
            <aside>
                <h2>Next videos</h2>
                <NextVideoList key={newVideoData.id} id={newVideoData.id} imageSrc={newVideoData.image} title={newVideoData.title} channel={newVideoData.channel} onVideoClicked={displaySelectedVideo} />
            </aside>
        )
    })
  }

  return (
    <aside>
        <h2>Next videos</h2>
        {videoData.map((videoElement) => {
            function displaySelectedVideo (){
                onVideoClicked(videoElement.id);
                createNewVideoList(videoElement.id);
            }
            if(videoElement.id !== id){
                return (
                    <article key={videoElement.id} onClick={displaySelectedVideo}>
                        <img src={videoElement.image} />
                        <h2>{videoElement.title}</h2>
                        <h2>{videoElement.channel}</h2>
                    </article>
            )
            }
        })}
    </aside>
  )
}

export default NextVideo;