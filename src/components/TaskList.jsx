import { useContext } from "react";
import { NotificationContext } from "../App";

const TaskList = () => {

    const { tasks } = useContext(NotificationContext);

  return (
    <div>
        {
              tasks.map(task => (
                <div key={task.id}>
                      <input
                          type="checkbox" defaultChecked={task.completed} 
                      />
                    <span>{task.title}</span>
                </div>
            ))      
        }
    </div>
  )
}

export default TaskList;