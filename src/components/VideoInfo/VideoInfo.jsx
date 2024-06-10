import VideoDetails from "../VideoDetails/VideoDetails.jsx";
import VideoStats from "../VideoStats/VideoStats.jsx";
import "./VideoInfo.scss";

const dynamicTimeStamp = (timestamp) => {
  const current = new Date();
  const datePosted = new Date(timestamp)
  const diff = Math.floor((current-datePosted)/1000);

  let yearInterval = Math.floor(diff/(60*60*24*365));
  let monthInterval = Math.floor(diff/(60*60*24*30));
  let weekInterval = Math.floor(diff/(60*60*24*7));
  let dayInterval = Math.floor(diff/(60*60*24));
  let hourInterval = Math.floor(diff/(60*60));
  let minuteInterval = Math.floor(diff/(60));
  let secInterval = Math.floor(diff/(1));

  //if the date is years ago, then print the date
  if (yearInterval >= 1){
    let year = datePosted.getFullYear();
    let month = String(datePosted.getMonth()+1).padStart(2,"0");
    let day = String(datePosted.getDate()).padStart(2,"0");
    return (month+"/"+day+"/"+year)
  }

  if (monthInterval >= 1 && monthInterval < 12){
    return monthInterval+" "+"months ago";
  }

  if (weekInterval >= 1 && weekInterval < 5){
    return weekInterval+" "+"weeks ago";
  }

  if (dayInterval >= 1 && dayInterval < 7){
    return dayInterval+" "+"days ago";
  }

  if (hourInterval >= 1 && hourInterval < 24){
    return hourInterval+" "+"hours ago";
  }

  if (minuteInterval >= 1 && minuteInterval < 60){
    return minuteInterval+" "+"mins ago";
  }

  if (secInterval >= 0 && secInterval < 60){
    return secInterval+" "+"secs ago";
  }
}


function VideoInfo ({videoData}){

  return (
    <>
      <article className="video-info">
        <VideoDetails videoDataChannel = {videoData.channel} videoDataTimestamp = {dynamicTimeStamp(videoData.timestamp)} />
        <VideoStats  videoData = {videoData} />
      </article>
    <hr />
    </>
    
  )
}

export default VideoInfo;