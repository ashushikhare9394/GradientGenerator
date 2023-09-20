// Write your code here
import {ActiveBtn, Btn} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, changeDirection, activeBtn} = props
  const {displayText, value} = details

  const onActiveBtn = () => {
    changeDirection(value)
  }

  return (
    <li>
      {activeBtn === value ? (
        <ActiveBtn type="button" onClick={onActiveBtn}>
          {displayText}
        </ActiveBtn>
      ) : (
        <Btn type="button" onClick={onActiveBtn}>
          {displayText}
        </Btn>
      )}
    </li>
  )
}

export default GradientDirectionItem
