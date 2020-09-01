import React, {useState} from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// class App extends React.Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       tasks: []
//     }
//   }

//   handleCallback(inputValue) {
//     console.log("Soy el inputValue: " + inputValue);
//     const {tasks} = this.state;

//     tasks.push(inputValue);

//     this.setState({
//       tasks
//     })
//   }

//   render() {
//     const {tasks} = this.state;
//     return (
//       <>
//         <AddTask propDePrueba={(inputValue) => this.handleCallback(inputValue)} />
//         <Tasks tasks={tasks} />
//       </>
//     );
//   }
// }

function App(){
  const [tasks, setTasks] = useState([]);

  function handleCallback(inputValue) {
    console.log("Soy el inputValue: " + inputValue);
    // console.log('App tasks ' + tasks);



    
    setTasks( (tasks) => { console.log('tasks ' + tasks); });

    
  }

  return(
    <>
        <AddTask propDePrueba={(inputValue) => handleCallback(inputValue)} />
        <Tasks tasksProp={tasks} />
      </>
  )
}

export default App;