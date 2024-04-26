import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = ({ tasks, setTasks }) => {

    const addNewTask = (e) => {
        e.preventDefault();

        setTasks([
            ...tasks,
            {
                id: tasks.length + 1,
                title: e.target[0].value,
                completed: false
            }
        ]);
    }

  return (
      <div>
          <h2>Child Component</h2>
          <p>Message from parent:</p><ul>
              {
                  tasks.map(task => (
                      <li key={task.id}>{ task.title }</li>
                  ))
              }
          </ul>
          <form onSubmit={addNewTask}>
              <input 
                  type="text"
                  placeholder="Add a task..."
              />
              <button type="submit">Add Task</button>
          </form>
          <hr />
          <GrandChildComponent tasks={ tasks } />
    </div>
  )
}

export default ChildComponent;