import "./CommentNumber.scss"

function CommentNumber ({commentLength}) {

  return (
    <h3 className="comment-number">{commentLength} Comments</h3>
  )
}

export default CommentNumber;