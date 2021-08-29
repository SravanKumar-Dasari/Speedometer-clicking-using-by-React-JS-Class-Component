import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading"> SPEEDOMETER </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image-logo"
          />
          <h1 className="sub-heading">Speed is {speed}mph</h1>
          <p className="description">Min limit is 0mph, Max limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="accelerate-btn button "
              type="button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              className="apply-brake button"
              type="button"
              onClick={this.onDecrement}
            >
              Apply Brakes
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
