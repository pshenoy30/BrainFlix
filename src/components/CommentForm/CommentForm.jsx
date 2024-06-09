import avatarImage from "../../assets/Images/Mohan-muruge.jpg"
function CommentForm (){
  return (
    <form>
        <div>
            <img src={avatarImage} alt="avatar image"></img>
        </div>
        <div>
            <h3>Join the converstation</h3>
            <textarea placeholder="Add a new comment"></textarea>
            <button type="submit">Comment</button>
        </div>
    </form>
  )
}

export default CommentForm