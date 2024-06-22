import CommentNumber from "../CommentNumber/CommentNumber.jsx";
import CommentForm from "../CommentForm/CommentForm.jsx";

function Comment ({videoDataComment, videoId}){
const commentLength =  videoDataComment.length;

  return (
    <section>
        <CommentNumber commentLength={commentLength} />
        <CommentForm videoToDisplay={videoId} videoComments={videoDataComment}/>
    </section>
  )
}

export default Comment;