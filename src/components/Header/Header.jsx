import logoImage from "../../assets/Logo/BrainFlix-logo.svg";
import avatarImage from "../../assets/Images/Mohan-muruge.jpg";

function Header(){

  return (
    <>
    <header>
        <div className="header__logo">
            <img src={logoImage} alt="Brainflix Logo"/>
        </div>
        <form>
          <input id="search" className="header__form__input" placeholder="Search"></input>
          <div className="header__form__avatar">
            <img className="header__form__avatar__image" src={avatarImage} alt="Profile picture"/>
          </div>
        </form>
        <button type="button">UPLOAD</button>
    </header>
    </>
    
  )
}

export default Header;
