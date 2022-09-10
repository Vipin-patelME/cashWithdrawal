// Write your code here
import {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDecreament = () => {
    this.setState(prevState => ({
      amount: prevState.amount - 50,
    }))
  }

  render() {
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
            <div>
              <button
                className="button-style"
                type="button"
                onClick={this.onDecreament}
              >
                50
              </button>
              <button className="button-style" type="button">
                100
              </button>
            </div>
            <div>
              <button className="button-style" type="button">
                200
              </button>
              <button className="button-style" type="button">
                500
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
