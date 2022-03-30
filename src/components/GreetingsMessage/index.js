import {Component} from 'react'
import LanguageItem from '../LanguagesList'
import Buttons from '../ButtonItems'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
  }

  changeLanguageTab = language => {
    this.setState({activeLanguageId: language})
  }

  renderSelectedLanguage = () => {
    const {activeLanguageId} = this.state
    const filteredLanguage = languageGreetingsList.filter(
      eachLanguage => eachLanguage.id === activeLanguageId,
    )
    return filteredLanguage
  }

  render() {
    const {activeLanguageId} = this.state
    const filteredLanguage = this.renderSelectedLanguage()

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="buttons-list">
          {languageGreetingsList.map(eachItem => (
            <Buttons
              key={eachItem.id}
              eachButton={eachItem}
              changeLanguageTab={this.changeLanguageTab}
              isActive={eachItem.id === activeLanguageId}
            />
          ))}
        </ul>
        <ul className="list">
          {filteredLanguage.map(eachItem => (
            <LanguageItem key={eachItem.id} languageDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Greetings
