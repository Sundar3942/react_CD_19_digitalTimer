// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    timerGoing: false,
    timerMins: 25,
    timerSecs: 0,
  }

  decreaseHandler = () => {
    this.setState(prevState => ({timerMins: prevState.timerMins - 1}))
  }

  increaseHandler = () => {
    this.setState(prevState => ({timerMins: prevState.timerMins + 1}))
  }

  returnAdjustedSecs = timerSecs => {
    if (timerSecs === 0) {
      return '00'
    }
    return timerSecs
  }

  startHandler = () => {
    this.tick()
  }

  pauseHandler = () => {
    this.clearTheTimer()
    this.setState({timerGoing: false})
  }

  resetHandler = () => {
    this.clearTheTimer()
    this.setState({timerGoing: false, timerMins: 25, timerSecs: 0})
  }

  tick() {
    this.timerId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timerSecs === 0) {
          return {
            timerGoing: true,
            timerMins: prevState.timerMins - 1,
            timerSecs: 59,
          }
        }
        return {timerGoing: true, timerSecs: prevState.timerSecs - 1}
      })
    }, 1000)
  }

  clearTheTimer() {
    clearInterval(this.timerId)
  }

  render() {
    const {timerMins, timerSecs, timerGoing} = this.state
    const pausedOrRunning = timerGoing ? 'Running' : 'Paused'
    console.log(timerMins, timerSecs, timerGoing)
    const adjustedTimeSecs = this.returnAdjustedSecs(timerSecs)
    // const startPauseElement = timerGoing ? (
    //   <>
    //     <button
    //       type="button"
    //       className="play-pause-btn"
    //       onClick={this.pauseHandler}
    //     >
    //       <img
    //         src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
    //         alt="pause icon"
    //         className="play-pause-img"
    //       />
    //     </button>
    //     <button
    //       type="button"
    //       className="play-pause-btn"
    //       onClick={this.pauseHandler}
    //     >
    //       Pause
    //     </button>
    //   </>
    // ) : (
    //   <>
    //     <button
    //       type="button"
    //       className="play-pause-btn"
    //       onClick={this.startHandler}
    //     >
    //       <img
    //         src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
    //         alt="play icon"
    //         className="play-pause-img"
    //       />
    //     </button>
    //     <button
    //       type="button"
    //       className="play-pause-btn"
    //       onClick={this.startHandler}
    //     >
    //       Start
    //     </button>
    //   </>
    // )
    return (
      <div className="page">
        <h1 className="page-heading">Digital Timer</h1>
        <div className="timer-and-controls-container">
          <div className="timer-container-bg">
            <div className="timer-section">
              <h1 className="time">
                {timerMins}:{adjustedTimeSecs}
              </h1>
              <p className="bold">{pausedOrRunning}</p>
            </div>
          </div>
          <div className="controls-container">
            <div className="start-pause-and-reset-container">
              <div className="start-pause-container">
                <button
                  type="button"
                  className="play-pause-btn"
                  onClick={timerGoing ? this.pauseHandler : this.startHandler}
                >
                  <img
                    src={
                      timerGoing
                        ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                    }
                    alt={timerGoing ? 'pause icon' : 'play icon'}
                    className="play-pause-img"
                  />
                  <p>{timerGoing ? 'Pause' : 'Start'} </p>
                </button>
              </div>
              <div className="reset-container">
                <button
                  type="button"
                  className="reset-btn"
                  onClick={this.resetHandler}
                >
                  <span>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                      alt="reset icon"
                      className="reset-img"
                    />
                  </span>
                  Reset
                </button>
              </div>
            </div>
            <p>Set Timer Limit</p>
            <div className="timer-limit-container">
              <button
                type="button"
                className="decrease-increase-btn"
                onClick={timerGoing ? null : this.decreaseHandler}
              >
                -
              </button>
              <p className="timer-limit">{timerMins}</p>
              <button
                type="button"
                className="decrease-increase-btn"
                onClick={timerGoing ? null : this.increaseHandler}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
