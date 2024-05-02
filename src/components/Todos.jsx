import { useLoaderData } from "react-router-dom";
import axios from "axios";

// make the data available to the component
export async function loader() {
    const todos = await axios.get('https://66339eeef7d50bbd9b4a170f.mockapi.io/todos');
    return { todos: todos.data };
}

const Todos = () => {

    const { todos } = useLoaderData();

    console.log(todos);

  return (
      <div>
            <h1>Todos</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <p><strong>Title:</strong> {todo.title}</p>
                        <p><strong>Description:</strong> {todo.description}
                        </p>
                        <p><strong>Created At: </strong>{todo.createdAt}</p>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Todos;