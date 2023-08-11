import {Component} from 'react'

import {
  BackgroundContainer,
  CardContainer,
  Heading,
  InputContainer,
  Input,
  Paragraph,
  Button,
} from './styledComponents'

class EditorFormInput extends Component {
  state = {editText: '', isButtonClicked: false}

  onChangeSearchInput = event => {
    this.setState({editText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {editText, isButtonClicked} = this.state
    const EditorSaveButton = isButtonClicked ? 'Edit' : 'save'
    return (
      <BackgroundContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <Paragraph>{editText}</Paragraph>
            ) : (
              <Input
                type="text"
                onChange={this.onChangeSearchInput}
                value={editText}
              />
            )}

            <Button onClick={this.onClickButton}>{EditorSaveButton}</Button>
          </InputContainer>
        </CardContainer>
      </BackgroundContainer>
    )
  }
}

export default EditorFormInput
