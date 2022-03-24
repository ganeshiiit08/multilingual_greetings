import {TabItem, Button} from './styledComponents'

const LanguagesButton = props => {
  const {tabsList, isActive, onClickedButton} = props
  const {id, buttonText, imageUrl} = tabsList
  const onSelectButton = () => {
    onClickedButton(id, imageUrl)
  }

  return (
    <TabItem>
      <Button type="button" active={isActive} onClick={onSelectButton}>
        {buttonText}
      </Button>
    </TabItem>
  )
}
export default LanguagesButton
