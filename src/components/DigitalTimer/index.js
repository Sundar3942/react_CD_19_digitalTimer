// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  render() {
    const a = 0
    console.log(a)
    return (
      <div className="page">
        <h1 className="page-heading">Digital Timer</h1>
        <div className="timer-and-controls-container">
          <div className="timer-container-bg">
            <div className="timer-section">
              <p className="time">00:00</p>
              <p className="bold">Paused</p>
            </div>
          </div>
          <div className="controls-container">
            <div className="start-pause-and-reset-container">
              <div className="start-pause-container">
                <button type="button" className="play-pause-btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play"
                    className="play-pause-img"
                  />
                </button>
                <p>Start</p>
              </div>
              <div className="reset-container">
                <button type="button" className="reset-btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset"
                    className="reset-img"
                  />
                </button>
                <p>Reset</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
