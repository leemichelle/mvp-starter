import React from 'react';

const Start = (props) => {
  return (
    <div className="button-container">
      <button onClick={props.startGame}>START</button>
    </div>
  )
}

export default Start;