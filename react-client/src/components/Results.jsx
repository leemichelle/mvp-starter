import React from 'react';

const Results = (props) => (
  <div>
    <div className="results">
      Your final score: {props.score}
    </div>
    <button className='try-again' onClick={props.restartGame}>
      Try Again?
    </button>
  </div>
);


export default Results;