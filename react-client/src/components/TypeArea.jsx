import React from 'react';

const TypeArea = (props) => (
  <div>
    <input name='words' onChange={props.handleChange} onKeyPress={props.onKeyPress} onKeyDown={props.cheetoDance}></input>
  </div>
);

export default TypeArea;
