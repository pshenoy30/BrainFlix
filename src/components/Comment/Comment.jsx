import CommentNumber from "../CommentNumber/CommentNumber.jsx";
import CommentForm from "../CommentForm/CommentForm.jsx";
import CommentDisplay from "../CommentDisplay/CommentDisplay.jsx";

function Comment ({videoDataComment}){
const commentLength =  videoDataComment.length;
  return (
    <section>
        <CommentNumber commentLength={commentLength} />
        <CommentForm />
        <CommentDisplay videoCommentData={videoDataComment} />
    </section>
  )
}

export default Comment;