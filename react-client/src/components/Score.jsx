import React from 'react';

const Score = (props) => {
  return (
    <span>
      Score: <span className='score'>{props.score}</span>
    </span>
  )
}

export default Score;