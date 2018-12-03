import React from 'react';

const Screen = (props) => (
  <div className="totheleft">
    <h4> Type This! </h4>
    <div>{props.items[0]}</div>
  </div>
)

export default Screen;