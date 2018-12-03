import React from 'react';

const Screen = (props) => (
  <div className="screen">
    <h4> Type This! </h4>
    <div className="screen-div">{props.items[0]}</div>
  </div>
)

export default Screen;