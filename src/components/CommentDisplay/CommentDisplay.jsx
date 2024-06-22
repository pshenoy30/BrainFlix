import "./CommentDisplay.scss"
import dynamicTimeStamp from "../../utils/dynamicTimeStamp.js";

function CommentDisplay ({videoCommentData}) {
  return (
    <>
      <ul>
        {videoCommentData.map((commentData) => {
            return (
              <section key={commentData.id}>
                <hr />
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
              </section>
            )
        })}
      </ul>
      <hr className="comment-display__div"/>
    </>
  )
}

export default CommentDisplay;