import React from "react";

function Task(props) {
  console.log('Task props ' + props);
  return <li>{props.name}</li>;
}

export default Task;
