import React from 'react';
import $ from 'jquery';
import Screen from './Screen.jsx';
import TypeArea from './TypeArea.jsx';
import Score from './Score.jsx';
import Start from './Start.jsx';
import Cheetos from './Cheetos.jsx';

const stringToNum = (string) => {
  const num = string.split('%');
  return Number(num[0]);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: ['hawt cheetos', 'deerp meerp'],
      words: '',
      score: 0,
      cheetoShake: {
        animation: '',
        width: '15%',
      },
      timer: 30,
      clock: {
        color: 'black',
      },
      shake: false,
      mascot: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.cheetoDance = this.cheetoDance.bind(this);
    this.startGame = this.startGame.bind(this);
    this.timer = this.timer.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.showMascot = this.showMascot.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/api/test', 
      success: (data) => {
        data.map((word) => {
          this.state.items.push(word.words);
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  checkAnswer(e) {
    if (this.state.words === this.state.items[0]) {
      this.setState({
        score: this.state.score + 1,
        items: this.state.items.slice(1),
      });
      this.resetInput(e);
    } else {
      this.setState({
        cheetoShake: {
          width: stringToNum(this.state.cheetoShake.width) + 2 + '%',
        }
      });
    }
  }

  resetInput(e) {
    e.target.value = '';
  }

  cheetoDance() {
    if (!this.state.shake) {
      this.setState({
        cheetoShake: {
          animation: 'shake 100s', 
          width: this.state.cheetoShake.width,
        },
        shake: !this.state.shake,
      });
    } else {
      this.setState({
        cheetoShake: {
          animation: 'shake 0s', 
          width: this.state.cheetoShake.width,
        },
        shake: !this.state.shake,
      });
    }
  }

  timer(){
    let newTime = this.state.timer - 1;
    this.setState({
      timer: newTime,
    });
    if (newTime < 10) {
      this.setState({
        clock: {
          color: 'red',
        },
      });
    }
    if (newTime === 0) {
      window.clearInterval(this.interval);
    }
  }

  startGame() {
    setInterval(this.timer, 1000)
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.checkAnswer(e);
    }
  }

  restartGame() {
    this.setState({
      score: 0,
      timer: 30,
      clock: {
        color: 'black',
      },
      items: this.state.items.slice(1),
      shake: false,
      mascot: false,
      cheetoShake: {
        animation: '',
        width: '15%',
      },
    });
    stopInterval(this.timer);
  }

  showMascot() {
    this.setState({
      mascot: true,
    });
  }

  render () {
    if (this.state.timer > 0) {
      return (
        <div>
          {this.state.mascot ? <Cheetos cheetoShake={this.state.cheetoShake} />: <button className="mascot-button" onClick={this.showMascot}>Click Me</button>}
          <Screen items={this.state.items} />
          <TypeArea handleChange={this.handleChange} onKeyPress={this.onKeyPress} cheetoDance={this.cheetoDance} />
          <span className='time-score-container'>
          <Score score={this.state.score} /> 
          <span>Time: <span style={this.state.clock}>{this.state.timer}s</span></span>
          </span>
          <Start startGame={this.startGame} />
        </div>
      )
    } else {
      return (
        <div>
        <div className="results">
        Your final score: {this.state.score}
        </div>
        <button className='try-again' onClick={this.restartGame}>Try Again?</button>
        </div>
      )
    }
  }
}

export default App;