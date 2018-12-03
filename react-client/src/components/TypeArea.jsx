import React from 'react';

const TypeArea = (props) => {
  return (
    <div>
      <input name='words' onChange={props.handleChange} onKeyPress={props.onKeyPress} onKeyDown={props.startGame}></input>
    </div>
  )
}

export default TypeArea;


// class TypeArea extends React.Component {
//   constructor(props){
//     super(props);
//     // this.resetState = this.resetState.bind(this);
//     // this.onKeyPress = this.onKeyPress.bind(this);
//   }

//   // resetState(e) {
//   //   e.target.value = '';
//   // }

//   // onKeyPress(e) {
//   //   if (e.key === 'Enter') {
//   //     this.props.checkAnswer();
//   //     this.resetState(e);
//   //     console.log('pressed enter!')
//   //   }
//   // }

//   render() {
//     console.log('this is state in typearea', this.state)
//     return (
//       <div>
//         <input name='words' onChange={this.props.handleChange} onKeyPress={this.props.onKeyPress}></input>
//       </div>
//     )
//   }
// }