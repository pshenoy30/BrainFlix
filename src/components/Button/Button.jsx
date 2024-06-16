import "./Button.scss"

function Button ({imageSrc, name}) {
  return (
    <div className="button-container">
            <button className="button-container__button" type="button">
              <img className="button-container__button__image" src={imageSrc} alt="Upload Icon"/>
              {name}
            </button>
    </div>
  )
}

export default Button;