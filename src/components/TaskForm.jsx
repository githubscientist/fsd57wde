import { useContext } from "react";
import { NotificationContext } from "../App";

const TaskForm = () => {

    const { addTask } = useContext(NotificationContext); 

    const handleSubmit = (e) => {
        e.preventDefault();

        const task = e.target[0].value.trim();

        // Check if the task is empty and return early
        if (!task) {
            return;
        }

        // Add the task
        addTask(task);

        // Clear the input field
        e.target[0].value = '';
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" />
            <button type="submit">Add Task</button>
            </form>
    </div>
  )
}

export default TaskForm;