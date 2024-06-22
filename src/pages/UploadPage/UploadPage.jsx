import Header from "../../components/Header/Header.jsx"
import ThumbnailImage from "../../assets/Images/Upload-video-preview.jpg"
import UploadIcon from "../../assets/Icons/upload.svg"
import PublishIcon from "../../assets/Icons/publish.svg"
import Button from "../../components/Button/Button.jsx"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./UploadPage.scss"

const BRAINFLIX_API_URL = "http://localhost:8080";

function UploadPage () {
 const [title,setTitle] = useState("");
 const [description,setDescription] = useState(""); 
 const [videoList, setVideoList] = useState(null);
 const [error, setError] = useState (false); 
 const navigate = useNavigate();

 async function getVideos () {
    try{
      const response = await axios.get(BRAINFLIX_API_URL);
      setVideoList(response.data);
      setLoaded(false)
      return loaded;
    }catch (err){
      setError(true)
    }
}

 const handleUpload = async (event) => {
    event.preventDefault();

    await axios.post(BRAINFLIX_API_URL+ "/videos/", {
        title: title,
        description: description
    })

    await getVideos()
    const videoListLastItem = videoList.length - 1;
    const videoListLastItemId = videoList[videoListLastItem].id;
    console.log(videoListLastItemId);
    console.log("video uploaded");
    setTitle("");
    setDescription("");
    navigate(`/videos/${videoListLastItemId}`);
 }

  return (
    <>
        <Header buttonIcon={UploadIcon} buttonName="UPLOAD" buttonContainerClass="button-container__upload" buttonClass="button-container__upload__button" buttonIconClass="button-container__upload__button__image" />
        <hr className="header__hr"/>
        <main className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <hr className="upload__title__hr"/>
            <div className="upload__container">
                <div className="upload__container__right">
                    <h2 className="upload__subtitle">VIDEO THUMBNAIL</h2>
                    <img src={ThumbnailImage} alt="uploaded video thumbnail" className="upload__image" />
                </div>
                <div className="upload__container__left">
                    <form id="form__id"className="upload__form" >
                        <label htmlFor="videoTitle" className="upload__subtitle upload__subtitle--label">TITLE YOUR VIDEO</label>
                        <input type="text" id="videoTitle" name="videoTitle" placeholder="Add a title to your video" className="upload__form__input" onChange={(e) => setTitle(e.target.value) } required></input>
                        <label htmlFor="videoDescription" className="upload__subtitle upload__subtitle--label">ADD A VIDEO DESCRIPTION</label>
                        <input type="text" id="videoDescription" name="videoDescription" placeholder="Add a description to your video" className="upload__form__input upload__form__input--text-area"  onChange={(e) => setDescription(e.target.value)} required></input>
                    </form>
                </div>
            </div>
            <hr className="upload__form__hr"/>
            <div className="upload__button-container" >
                <Button imageSrc={PublishIcon} name="PUBLISH" buttonContainerClassName="upload__form__button-container" buttonClassName="upload__form__button-container__button" buttonIconClassName="upload__form__button-container__button__image" buttonFunction={handleUpload} formId="form__id" />
                <Button imageSrc="" name="CANCEL" buttonContainerClassName="upload__form__button-container" buttonClassName="upload__form__button-container__button upload__form__button-container__button--cancel" />
            </div>
        </main>
    </>
  )
}

export default UploadPage;