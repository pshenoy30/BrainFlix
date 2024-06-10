import VideoTitle from '../VideoTitle/VideoTitle.jsx';
import VideoInfo from '../VideoInfo/VideoInfo.jsx';
import VideoDescription from '../VideoDescription/videoDescription.jsx';

function Video ({videoData}){
  return (
    <section>
        <VideoTitle videoDataTitle={videoData.title} />
        <VideoInfo videoData={videoData} />
        <VideoDescription videoDataDescription={videoData.description} />
    </section>
  )
}

export default Video;