function CommentDisplay ({videoCommentData}) {
  return (
    <ul>
        <hr />
        {videoCommentData.map((commentData) => {
            return (
                <>
                    <img alt="Empty avatar"></img>
                    <h3>{commentData.name}</h3>
                    <h3>{commentData.timestamp}</h3>
                    <p>{commentData.comment}</p> 
                    <hr />
                </>
            )
        })}
    </ul>
  )
}

export default CommentDisplay;