import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// make the data available to the component
export async function loader() {
    const todos = await axios.get('https://66339eeef7d50bbd9b4a170f.mockapi.io/todos');
    return { todos: todos.data };
}

const Todos = () => {

    const { todos } = useLoaderData();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // create a new todo object
        const newTodo = {
            title,
            description
        }

        // add the new todo to the list of todos
        axios.post(`https://66339eeef7d50bbd9b4a170f.mockapi.io/todos`, newTodo)
            .then((reponse) => {
                alert('Todo added successfully!')

                // reload the page to see the new todo
                window.location.reload();
            })
            .catch((error) => {
                alert('Failed to add todo!')
            });

        // clear the form 
        setTitle('');
        setDescription('');
    }

  return (
      <div>
            <h1>Todos</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/todos/${todo.id}`}><p>{todo.title}</p></Link>
                    </li>
                ))}
          </ul>
          
          <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter todo title..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter todo description..." 
                value={description}
                onChange={(e) => setDescription(e.target.value)}    
            />
            <button type="submit">Add Todo</button>
          </form>
    </div>
  )
}

export default Todos;