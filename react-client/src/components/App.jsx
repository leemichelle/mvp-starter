import React from 'react';
import $ from 'jquery';
import Screen from './Screen.jsx';
import TypeArea from './TypeArea.jsx';
import Score from './Score.jsx';
// import Start from './Start.jsx';
import Timer from './Timer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: ['hawt cheetos', 'hot', 'cheetos', 'is', 'delicious'],
      words: '',
      score: 0,
      cheetoShake: {
        animation: 'shake 0s',
        animationIterationCount: 'infinite',
      },
      // seconds: 30,
    }
    this.handleChange = this.handleChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.cheetoDance = this.cheetoDance.bind(this);
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: 'http://hipsterjesus.com/api/', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
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

  cheetoDance() {
    this.setState({
      cheetoShake: {
        animation: 'shake 0.9s', //why doesn't work?!?
      }
    })
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.checkAnswer(e);
      // console.log('pressed enter!')
    }
  }

  // endOfGame() {
  //   this.setState({
  //     seconds: 0,
  //   })
  //   // want to return the score
  // }

  render () {
    // console.log(this.state)
    return (
      <div>
        <h1>Hot Cheetos</h1>
        <div className="cheeto-container">
          <img style={this.state.cheetoShake} src="https://fritos.com/images/default-source/blue-bag-image/cheetos-crunchy-flamin-hot.png?sfvrsn=5651573a_2"/>
          <img className="pop" src="https://fritos.com/images/default-source/blue-bag-image/cheetos-crunchy-flamin-hot.png?sfvrsn=5651573a_2"/>
          <img className="pop" src="https://fritos.com/images/default-source/blue-bag-image/cheetos-crunchy-flamin-hot.png?sfvrsn=5651573a_2"/>
        </div>
        <Screen items={this.state.items} />
        <TypeArea handleChange={this.handleChange} onKeyPress={this.onKeyPress} cheetoDance={this.cheetoDance} />
        <Score score={this.state.score} />
        <span></span>
        <Timer seconds={this.state.seconds} endOfGame={this.endOfGame} />
        {/* <Start /> */}
      </div>
    )
  }
}

export default App;