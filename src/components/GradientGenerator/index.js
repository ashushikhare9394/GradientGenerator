import {Component} from 'react'

import {
  GradientContainer,
  Heading,
  Para,
  List,
  ColorItem,
  ColorName,
  Btn,
  ColorContainer,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: ' #014f7b',
    inputColor1: '#8ae323',
    inputColor2: ' #014f7b',
    activeBtn: 'top',
    direction: 'top',
  }

  onChangeColor1 = event => {
    this.setState({inputColor1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({inputColor2: event.target.value})
  }

  generateGradient = () => {
    const {inputColor1, inputColor2, activeBtn} = this.state

    this.setState({
      color1: inputColor1,
      color2: inputColor2,
      direction: activeBtn,
    })
  }

  changeDirection = value => {
    this.setState({activeBtn: value})
  }

  renderUI = () => {
    const {
      color1,
      color2,
      inputColor1,
      inputColor2,
      activeBtn,
      direction,
    } = this.state

    return (
      <GradientContainer
        color1={color1}
        color2={color2}
        direction={direction}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <List>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              details={eachItem}
              activeBtn={activeBtn}
              changeDirection={this.changeDirection}
            />
          ))}
        </List>
        <Para>Pick the colors</Para>
        <ColorContainer>
          <ColorItem>
            <ColorName htmlFor="color1">{inputColor1}</ColorName>
            <input
              id="color1"
              value={inputColor1}
              type="color"
              onChange={this.onChangeColor1}
            />
          </ColorItem>
          <ColorItem>
            <ColorName htmlFor="color2">{inputColor2}</ColorName>
            <input
              type="color"
              id="color2"
              value={inputColor2}
              onChange={this.onChangeColor2}
            />
          </ColorItem>
          <Btn type="button" onClick={this.generateGradient}>
            Generate
          </Btn>
        </ColorContainer>
      </GradientContainer>
    )
  }

  render() {
    return <div>{this.renderUI()}</div>
  }
}

export default GradientGenerator
