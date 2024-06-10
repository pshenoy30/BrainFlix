import logoImage from "../../assets/Logo/BrainFlix-logo.svg";
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";
import searchIcon from "../../assets/Icons/search.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import "./Header.scss"

function Header(){

  return (
    <>
    <header className="header-section">
        <div className="header-section__logo">
            <img src={logoImage} alt="Brainflix Logo"/>
        </div>
        <form className="header-section__form">
          <div className="header-section__form__search">
            <img className="header-section__form__search__image" src={searchIcon} alt="search icon" />
            <input id="search" className="header-section__form__search__input" placeholder="Search"></input>
          </div>
          <div className="header-section__form__button-container">
            <button className="header-section__form__button-container__button" type="button">
              <img className="header-section__form__button-container__button__image" src={uploadIcon} alt="Upload Icon"/>
              UPLOAD
            </button>
          </div>
          <div className="header-section__form__avatar">
            <img className="header-section__form__avatar__image" src={avatarImage} alt="Profile picture"/>
          </div>
        </form>
    </header>
    </>
    
  )
}

export default Header;
