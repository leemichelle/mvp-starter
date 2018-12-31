import React from 'react';

const Score = (props) => (
  <span>
    Score: <span className='score'>{props.score}</span>
  </span>
);

export default Score;