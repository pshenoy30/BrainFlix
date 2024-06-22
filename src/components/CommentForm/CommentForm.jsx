import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import Button from "../Button/Button.jsx";
import CommentDisplay from "../CommentDisplay/CommentDisplay.jsx";
import "./CommentForm.scss";
import axios from 'axios';
import { useEffect, useState } from "react";

const BRAINFLIX_API_URL = "http://localhost:8080/"

function CommentForm ({videoToDisplay,videoComments}){
  const [commentDescription, setCommentDescription] = useState("");
  const [displayedVideoComments, setDisplayedVideoComments] = useState(videoComments);
  const [video, setVideo] = useState(null);
  
  async function getVideoDataById (videoId) {
    try {
      const response = await axios.get(BRAINFLIX_API_URL+"videos/"+videoId);
      setDisplayedVideoComments(response.data.comments)
      setVideo(response.data);
      setCommentDescription("");
    } catch (error) {
      console.log("Couldn't fetch the data", error);
    }
  }

  const getVideoDataByIdReturnFunction = async (videoId) => {
    try {
      const response = await axios.get(BRAINFLIX_API_URL+"videos/"+videoId);
      return response.data;
    } catch (error) {
      console.log("Couldn't fetch the data", error);
    }
  }
  useEffect(() =>{
    getVideoDataById(videoToDisplay)
  },[videoToDisplay]);

  const handleComment = async (event) => {
    event.preventDefault();

    await axios.post(BRAINFLIX_API_URL+"videos/"+videoToDisplay+"/comments", {
        comment: commentDescription
    })

    let video = await getVideoDataByIdReturnFunction(videoToDisplay);
    console.log(video);
    const displayComments = video.comments;
    console.log(displayComments);
    setDisplayedVideoComments(displayComments);
    setCommentDescription("");
 }

  return (
    <>
      <form className="comment-form" >
          <div className="comment-form__left">
              <img className="comment-form__left__image" src={avatarImage} alt="avatar image"></img>
          </div>
          <div className="comment-form__right">
              <h3 className="comment-form__right__header">Join the converstation</h3>
              <div className="comment-form__right__input-button">
                <input placeholder="Add a new comment" className="comment-form__right__input-button__input" onChange={(e) => setCommentDescription(e.target.value)} value={commentDescription}  />
                <Button imageSrc={commentIcon} name="COMMENT" buttonContainerClassName="comment-form__right__input-button__button-container" buttonClassName="comment-form__right__input-button__button-container__button" buttonIconClassName="comment-form__right__input-button__button-container__button__image" buttonFunction={handleComment}  />
              </div>
          </div>
      </form>
    <CommentDisplay videoCommentData={displayedVideoComments} />
    </>
  )
}

export default CommentForm