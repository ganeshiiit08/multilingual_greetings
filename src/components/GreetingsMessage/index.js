import {Component} from 'react'

import LanguagesButton from '../LanguagesList'

import {BgContainer, Heading, TabsList, Image} from './styledComponents'

class Greetings extends Component {
  state = {
    greetingList: [],
    activeTabId: '',
    bgImageUrl: '',
  }

  componentDidMount() {
    this.getListElements()
  }

  getListElements = () => {
    const {languageGreetingsList} = this.props
    const greetList = languageGreetingsList
    this.setState({
      greetingList: greetList,
      activeTabId: greetList[0].id,
    })
  }

  onActiveTab = (id, imageUrl) => {
    this.setState({activeTabId: id, bgImageUrl: imageUrl})
  }

  render() {
    const {activeTabId, greetingList, bgImageUrl} = this.state
    return (
      <BgContainer>
        <Heading>Multilingual Greetings</Heading>
        <TabsList>
          {greetingList.map(each => (
            <LanguagesButton
              tabsList={each}
              key={each.id}
              isActive={activeTabId === each.id}
              onClickedButton={this.onActiveTab}
            />
          ))}
        </TabsList>
        <Image src={bgImageUrl} alt="greeting" />
      </BgContainer>
    )
  }
}
export default Greetings
