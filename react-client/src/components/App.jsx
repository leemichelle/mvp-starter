import React from 'react';
import $ from 'jquery';
import Screen from './Screen.jsx';
import TypeArea from './TypeArea.jsx';
import Score from './Score.jsx';
import Start from './Start.jsx';
import Timer from './Timer.jsx';
import Cheetos from './Cheetos.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: ['hawt cheetos', 'deerp meerp'],
      words: '',
      score: 0,
      cheetoShake: {
        animation: '',
      },
      timer: 15,
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
    // this.randomizeWords = this.randomizeWords.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/api/test', 
      success: (data) => {
        console.log('this is data', data.map((word) => {
          this.state.items.push(word.words);
          // console.log('this is state words', this.state.items)
        }))
        // this.setState({
        //   items: data
        // })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  // randomizeWords() {
  //   $.ajax({
  //     url: '/api/test', 
  //     success: (data) => {
  //       console.log('this is data', data.map((word) => {
  //         this.state.items.push(word.words);
  //       }))
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  //   this.setState({
  //     items: this.state.items.slice(50)
  //   });
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log('this is state in app', this.state)
  }

  checkAnswer(e) {
    if (this.state.words === this.state.items[0]) {
      this.setState({
        score: this.state.score + 1,
        items: this.state.items.slice(1),
      });
      this.resetInput(e);
    } else {
      console.log('wrong answer')
      //more wrong, make hot cheetos bigger, getting too many wrong will block input field
    }
  }

  resetInput(e) {
    e.target.value = '';
  }

  // may have to create a function that randomizes shake time so it's different each time?
  cheetoDance() {
    console.log('hi', this.state.shake);
    if (!this.state.shake) {
    this.setState({
      cheetoShake: {
        animation: 'shake 100s', //why doesn't work?!?
      },
      shake: !this.state.shake,
    })
    } else {
      this.setState({
        cheetoShake: {
          animation: 'shake 0s', //why doesn't work?!?
        },
        shake: !this.state.shake,
      })
    }
  }

  timer(){
    console.log('hit timer function')
    let newTime = this.state.timer - 1;
    this.setState({
      timer: newTime,
      // cheetoShake: {
      //   animation: 'shake 0.9s',
      // },
    });
    if (newTime < 10) {
      this.setState({
        clock: {
          color: 'red',
          // cheetoShake: {
          //   animation:'shake 0.7s',
          // },
        },
      });
    }
    if (newTime === 0) {
      window.clearInterval(this.interval);
    }
  }

  startGame() {
    setInterval(this.timer, 1000)
    console.log('this is the time', this.state.timer)
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.checkAnswer(e);
      // console.log('pressed enter!')
    }
  }

  restartGame() {
    this.setState({
      score: 0,
      timer: 15,
      clock: {
        color: 'black',
      },
      items: this.state.items.slice(50),
    });
  }

  showMascot() {
    this.setState({
      mascot: true,
    });
  }

  render () {
    console.log(this.state)
    if (this.state.timer > 0) {
      return (
      <div>
        {/* <h1>Hot Cheetos</h1> */}
        {this.state.mascot ? <Cheetos cheetoShake={this.state.cheetoShake} />: <button className="mascot-button" onClick={this.showMascot}>Click Me</button>}
        <Screen items={this.state.items} />
        <TypeArea handleChange={this.handleChange} onKeyPress={this.onKeyPress} cheetoDance={this.cheetoDance} />
        <span className='time-score-container'>
        <Score score={this.state.score} /> 
        <span>Time: <span style={this.state.clock}>{this.state.timer}s</span></span>
        </span>
        {/* <Timer startGame={this.startGame} endOfGame={this.endOfGame} /> */}
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