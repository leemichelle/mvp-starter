import React from 'react';
import Start from './Start.jsx';

class Timer extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      timer: 30,
    }
  }

  render() {
    return (
      <div>
      <span>Time: {this.state.timer}s </span>
      <Start startGame={this.props.startGame} />
      </div>
    )
  }
}


// constructor(props) {
//   super(props);
//   this.state = { time: {}, seconds: 30 };
//   this.timer = 0;
//   this.startTimer = this.startTimer.bind(this);
//   this.countDown = this.countDown.bind(this);
// }

// secondsToTime(secs){

//   let divisor_for_minutes = secs % (60 * 60);
//   let minutes = Math.floor(divisor_for_minutes / 60);

//   let divisor_for_seconds = divisor_for_minutes % 60;
//   let seconds = Math.ceil(divisor_for_seconds);

//   let obj = {
//     "s": seconds
//   };
//   return obj;
// }

// componentDidMount() {
//   let timeLeftVar = this.secondsToTime(this.state.seconds);
//   this.setState({ time: timeLeftVar });
// }

// startTimer() {
//   if (this.timer == 0 && this.state.seconds > 0) {
//     this.timer = setInterval(this.countDown, 1000);
//   }
// }

// countDown() {
//   // Remove one second, set state so a re-render happens.
//   let seconds = this.state.seconds - 1;
//   this.setState({
//     time: this.secondsToTime(seconds),
//     seconds: seconds,
//   });
  
//   // Check if we're at zero.
//   if (seconds == 0) { 
//     clearInterval(this.timer);
//   }
// }

// render() {
//   return(
//     <div>
//     <div className="time-score-container">
//       {/* <button onClick={this.startTimer}>Start</button> */}
//       Time: {this.state.time.s}s
//     </div>
//     <div className="totheleft">
//       <Start startTimer={this.startTimer} />
//     </div>
//     </div>
//   );
// }
// }

// const Timer = (props) => {
//   return (
//     <span>Time: </span>
//   )
// }

export default Timer;