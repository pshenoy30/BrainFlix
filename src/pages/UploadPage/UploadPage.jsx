import Header from "../../components/Header/Header.jsx"
import ThumbnailImage from "../../assets/Images/Upload-video-preview.jpg"
import PublishIcon from "../../assets/Icons/publish.svg"
import Button from "../../components/Button/Button.jsx"
import "./UploadPage.scss"

function UploadPage (props) {
  return (
    <>
        <Header />
        <hr />
        <main className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <h2 className="upload__subtitle">VIDEO THUMBNAIL</h2>
            <img src={ThumbnailImage} alt="uploaded video thumbnail" className="upload__image" />
            <form className="upload__form">
                <label htmlFor="videoTitle" className="upload__subtitle upload__subtitle--label">TITLE YOUR VIDEO</label>
                <input type="text" id="videoTitle" name="videoTitle" placeholder="Add a title to your video" className="upload__form__input" required></input>
                <label htmlFor="videoDescription" className="upload__subtitle upload__subtitle--label">ADD A VIDEO DESCRIPTION</label>
                <input type="text" id="videoDescription" name="videoDescription" placeholder="Add a description to your video" className="upload__form__input upload__form__input--text-area" required></input>
                {/* <Button  imageSrc={PublishIcon} name="PUBLISH" /> */}
                {/* <Button name="CANCEL" /> */}
            </form>
        </main>
    </>
  )
}

export default UploadPage;