import React from 'react';

const TypeArea = (props) => {
  return (
    <div>
      <input name='words' onChange={props.handleChange} onKeyPress={props.onKeyPress} onKeyDown={props.cheetoDance}></input>
    </div>
  )
}

export default TypeArea;
