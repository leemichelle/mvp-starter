import React from 'react';
import $ from 'jquery';
import Cheetos from './Cheetos.jsx';
import Results from './Results.jsx';
import Screen from './Screen.jsx';
import Score from './Score.jsx';
import Show from './Show.jsx';
import Start from './Start.jsx';
import Timer from './Timer.jsx';
import TypeArea from './TypeArea.jsx';

const stringToNum = (string) => {
  const num = string.split('%');
  return Number(num[0]);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: ['hot cheetos', 'deerp meerp'],
      words: '',
      score: 0,
      cheetoShake: {
        animation: '',
        width: '15%',
      },
      timer: 60,
      clock: {
        color: 'black',
      },
      shake: false,
      mascot: false,
      start: false,
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
          this.state.list.push(word.words);
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleChange(e) {
    this.setState({
      words: e.target.value
    });
  }

  resetInput(e) {
    e.target.value = '';
  }

  checkAnswer(e) {
    if (this.state.words === this.state.list[0]) {
      this.setState({
        score: this.state.score + 1,
        list: this.state.list.slice(1),
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

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.checkAnswer(e);
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
  }

  startGame() {
    setInterval(this.timer, 1000);

    // let interval = setInterval(this.timer, 1000);
    // clearInterval(interval);

    // let newTime = this.state.timer - 1;
    // let interval = setInterval(() => {
    //   this.setState({
    //     timer: newTime,
    //   });
    //   if (newTime < 10) {
    //     this.setState({
    //       clock: {
    //         color: 'red',
    //       },
    //     });
    //   }}, 1000)
    // clearInterval(interval);
  }

  restartGame() {
    // clearInterval(this.timer())
    this.setState({
      score: 0,
      timer: 60,
      clock: {
        color: 'black',
      },
      list: this.state.list.slice(1),
      shake: false,
      mascot: false,
      cheetoShake: {
        animation: '',
        width: '15%',
      },
    });
  }

  showMascot() {
    this.setState({
      mascot: true,
    });
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

  render () {
    if (this.state.timer > 0) {
      return (
        <div>
          {this.state.mascot ? 
            <Cheetos cheetoShake={this.state.cheetoShake} /> : 
            <Show showMascot={this.showMascot} />
          }
          <Screen list={this.state.list} />
          <TypeArea handleChange={this.handleChange} onKeyPress={this.onKeyPress} cheetoDance={this.cheetoDance} />
          <span className='time-score-container'>
            <Score score={this.state.score} /> 
            <Timer clock={this.state.clock} timer={this.state.timer} />
          </span>
          <Start startGame={this.startGame} />
        </div>
      )
    } else {
      return (
        <Results score={this.state.score} restartGame={this.restartGame} />
      )
    }
  };
};

export default App;