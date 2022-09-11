// Write your code here
import {Component} from 'react'
import DenominationButton from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  decreaseAmount = value => {
    this.setState(prevState => {
      amount: prevState.amount - value
    })
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div>
        <div className="bg-container">
          <div className="card1-container">
            <h1 className="card1-heading">S</h1>
            <p className="card1-para">Sarah Williams</p>
          </div>
          <div className="card2-container">
            <h1 className="card2-heading">your Balance</h1>
            <div className="total-amount-container">
              <h1 className="total-amount">{amount}</h1>
              <p className="card2-para">In Rupees</p>
            </div>
          </div>
          <h1 className="withdraw">Withdraw</h1>
          <p className="choose-sum-para">CHOOSE SUM (IN RUPEES)</p>
          <div className="btn-container">
            {denominationsList.map(eachDenomination => (
              <DenominationButton
                eachDenomination={eachDenomination}
                key={eachDenomination.id}
                decreaseAmount={this.decreaseAmount}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
