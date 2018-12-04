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

export default Timer;