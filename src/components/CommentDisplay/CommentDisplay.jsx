import "./CommentDisplay.scss"

const dynamicTimeStamp = (timestamp) => {
  const current = new Date();
  const datePosted = new Date(timestamp)
  let postedAgo = "";
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


function CommentDisplay ({videoCommentData}) {
  return (
    <ul>
        <hr />
        {videoCommentData.map((commentData) => {
            return (
              <>
                <article className="comment-display">
                    <div className="comment-display__image">
                      <img className="comment-display__image"/>
                    </div>
                    <div className="comment-display__details">
                      <div className="comment-display__details__name-time">
                        <h3 className="comment-display__details__name-time__text">{commentData.name}</h3>
                        <h3 className="comment-display__details__name-time__text comment-display__details__name-time__text--mercury comment-display__details__text--right">{dynamicTimeStamp(commentData.timestamp)}</h3> 
                      </div>
                      <p className="comment-display__details__name-time__text">{commentData.comment}</p> 
                    </div>
                </article>
                <hr />
              </>
            )
        })}
    </ul>
  )
}

export default CommentDisplay;