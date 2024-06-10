import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import commentImage from "../../assets/Icons/add_comment.svg"
import "./CommentForm.scss";

function CommentForm (){
  return (
    <form className="comment-form">
        <div className="comment-form__left">
            <img className="comment-form__left__image" src={avatarImage} alt="avatar image"></img>
        </div>
        <div className="comment-form__right">
            <h3 className="comment-form__right__header">Join the converstation</h3>
            <div class="comment-form__right__input-button">
              <input placeholder="Add a new comment" className="comment-form__right__input-button__input" />
              <button type="submit" className="comment-form__right__input-button__button">
                <img className="comment-form__right__input-button__button__image" src={commentImage} />
                Comment
              </button>
            </div>
        </div>
    </form>
  )
}

export default CommentForm