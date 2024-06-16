import "./Button.scss"

function Button ({imageSrc, name, buttonContainerClassName, buttonClassName, buttonIconClassName}) {
  return (
    <div className={buttonContainerClassName}>
            <button className={buttonClassName} type="button">
              <img className={buttonIconClassName} src={imageSrc} alt=""/>
              {name}
            </button>
    </div>
  )
}

export default Button;