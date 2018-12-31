import React from 'react';

const Timer = (props) => (
  <span>
    Time: <span style={props.clock}>{props.timer}s</span>
  </span>
);

export default Timer;