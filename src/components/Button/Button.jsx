import "./Button.scss"

function Button ({imageSrc, name, buttonContainerClassName, buttonClassName, buttonIconClassName, buttonFunction, dataKey}) {
  return (
    <div className={buttonContainerClassName}>
            <button onClick={buttonFunction} className={buttonClassName} type="button" id={dataKey}>
              <img className={buttonIconClassName} src={imageSrc} alt=""/>
              {name}
            </button>
    </div>
  )
}

export default Button;