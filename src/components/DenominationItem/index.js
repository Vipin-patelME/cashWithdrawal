// Write your code here
// Write your code here
import './index.css'

const DenominationButton = props => {
  const {eachDenomination} = props
  const {value, decreaseAmount, key} = eachDenomination

  const onDecreament = () => decreaseAmount(value)

  return (
    <li>
      <button className="button-style" type="button" onClick={onDecreament}>
        {value}
      </button>
    </li>
  )
}

export default DenominationButton
