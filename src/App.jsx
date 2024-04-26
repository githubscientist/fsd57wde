import { createContext, useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Notification from "./components/Notification";

export const NotificationContext = createContext();

const App = () => {

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
        }
    ]);

    const [notification, setNotification] = useState({
        message: '',
        visible: false
    });

    const showNotification = (message) => {
        setNotification({
            message,
            visible: true
        });

        setTimeout(() => {
            setNotification({
                message: '',
                visible: false
            });
        }, 5000);
    }

    const addTask = (title) => {
        const newTask = {
            id: tasks.length + 1,
            title,
            completed: false
        };

        setTasks([...tasks, newTask]);
        showNotification('Task added successfully');
    }

    const toggleTask = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }

            return task;
        });

        setTasks(updatedTasks);
    }

  return (
    <NotificationContext.Provider value={{ notification, showNotification, addTask, toggleTask, tasks }}>
        <div>
            <h1>Task Manager</h1>
            <Notification />  
            <TaskList />
            <TaskForm />
        </div>
    </NotificationContext.Provider>
  )
}

export default App;