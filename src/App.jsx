import { useState } from "react";
import ChildComponent from "./components/ChildComponent";

const App = () => {

    const [message, setMessage] = useState('Hello, Grand Child!');
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Task 1',
            completed: false
        },
        {
            id: 2,
            title: 'Task 2',
            completed: true
        },
        {
            id: 3,
            title: 'Task 3',
            completed: false
        }
    ]);

  return (
      <div>
        <h1>Parent Component</h1>
        <hr />
          <ChildComponent
              tasks={tasks} 
              setTasks={setTasks}
              />
    </div>
  )
}

export default App;