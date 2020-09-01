import React from "react";
import Task from "../Task";

function Tasks(props) {
  const {tasks} = props;

  
  console.log('Tasks props: ' + props );
  console.log('const tasks: ' + tasks);
    return (
      <ul className="taskContainer">
        {
        // tasks.map((name, key) => {
        //   return <Task name={name} key={key} />;
        // })
        }
      </ul>
    );
}



export default Tasks;
