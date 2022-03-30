import './index.css'

const Buttons = props => {
  const {eachButton, isActive, changeLanguageTab} = props
  const {buttonText, id} = eachButton
  const onCLickButton = () => {
    changeLanguageTab(id)
  }

  const bgColor = isActive ? 'button-color' : ''

  return (
    <li className="buttons-list">
      <button
        type="button"
        onClick={onCLickButton}
        className={`tab-bt ${bgColor}`}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Buttons
