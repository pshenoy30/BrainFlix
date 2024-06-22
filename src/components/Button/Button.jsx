import "./Button.scss"

function Button ({imageSrc, name, buttonContainerClassName, buttonClassName, buttonIconClassName, buttonFunction, formId }) {
  return (
    <div className={buttonContainerClassName}>
            <button form={formId} onClick={buttonFunction} className={buttonClassName} type="button">
              <img className={buttonIconClassName} src={imageSrc} alt=""/>
              {name}
            </button>
    </div>
  )
}

export default Button;