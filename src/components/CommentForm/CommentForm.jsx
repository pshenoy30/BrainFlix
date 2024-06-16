import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import Button from "../Button/Button.jsx";
import "./CommentForm.scss";

function CommentForm (){
  return (
    <form className="comment-form">
        <div className="comment-form__left">
            <img className="comment-form__left__image" src={avatarImage} alt="avatar image"></img>
        </div>
        <div className="comment-form__right">
            <h3 className="comment-form__right__header">Join the converstation</h3>
            <div className="comment-form__right__input-button">
              <input placeholder="Add a new comment" className="comment-form__right__input-button__input" />
              <Button imageSrc={commentIcon} name="COMMENT" buttonContainerClassName="comment-form__right__input-button__button-container" buttonClassName="comment-form__right__input-button__button-container__button" buttonIconClassName="comment-form__right__input-button__button-container__button__image" />
            </div>
        </div>
    </form>
  )
}

export default CommentForm