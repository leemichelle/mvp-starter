import React from 'react';

const Score = (props) => {
  return (
    <span className='time-score-container'>
      Score: {props.score}
    </span>
  )
}

export default Score;