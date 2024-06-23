import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import Button from "../Button/Button.jsx";
import dynamicTimeStamp from "../../utils/dynamicTimeStamp.js";
import "./Comment.scss";
import axios from 'axios';
import { useEffect, useState } from "react";

const BRAINFLIX_API_URL = "http://localhost:8080/"

function Comment ({videoToDisplay,videoComments}){
  const [commentDescription, setCommentDescription] = useState("");
  const [displayedVideoComments, setDisplayedVideoComments] = useState(videoComments);
  const [video, setVideo] = useState(null);
  const [commentLength,setCommentLength] = useState(videoComments.length)
  
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
    const displayComments = video.comments;
    setDisplayedVideoComments(displayComments);
    setCommentDescription("");
    setCommentLength(displayComments.length)
 }

 const handleDelete = async (event) => {
  event.preventDefault();
  let commentId = event.target.id;
  
  await axios.delete(BRAINFLIX_API_URL+"videos/"+videoToDisplay+"/comments/"+commentId)

  let videoDisplayed = await getVideoDataByIdReturnFunction(videoToDisplay);
  const displayComments = videoDisplayed.comments;
  setDisplayedVideoComments(displayComments);
  setCommentLength(displayComments.length)
}

  return (
    <article>
      <h3 className="comment-number">{commentLength} Comments</h3>
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
        {displayedVideoComments.map((commentData) => {
                return (
                  <article key={commentData.id} className="comment">
                    <hr />
                    <article className="comment-display">
                        <article className="comment-display__image">
                          <img className="comment-display__image"/>
                        </article>
                        <article className="comment-display__details">
                          <article className="comment-display__details__name-time">
                            <h3 className="comment-display__details__name-time__text">{commentData.name}</h3>
                            <h3 className="comment-display__details__name-time__text comment-display__details__name-time__text--mercury comment-display__details__name-time__text--right">{dynamicTimeStamp(commentData.timestamp)}</h3> 
                          </article>
                          <p className="comment-display__details__name-time__text">{commentData.comment}</p> 
                        </article>
                    </article>
                    <Button name="DELETE" buttonContainerClassName="comment-display__details__button-container" buttonClassName="comment-form__right__input-button__button-container__button" buttonFunction={handleDelete} dataKey={commentData.id}/>
                  </article>
                )
            })}
        <hr className="comment-display__div"/>
    </article>
  )
}

export default Comment