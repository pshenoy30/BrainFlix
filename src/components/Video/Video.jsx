import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx';
import VideoTitle from '../VideoTitle/VideoTitle.jsx';
import VideoInfo from '../VideoInfo/VideoInfo.jsx';
import VideoDescription from '../VideoDescription/VideoDescription.jsx';

function Video ({videoData}){
  return (
    <section>
        <VideoPlayer videoData={videoData} />
        <VideoTitle videoDataTitle={videoData.title} />
        <VideoInfo videoData={videoData} />
        <VideoDescription videoDataDescription={videoData.description} />
    </section>
  )
}

export default Video;