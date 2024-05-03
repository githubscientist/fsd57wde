import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Todo = () => {

    const { id } = useParams();
    const [todo, setTodo] = useState({});

    useEffect(() => {
        axios.get(`https://66339eeef7d50bbd9b4a170f.mockapi.io/todos/${id}`)
            .then((response) => {
                setTodo(response.data);
            })
    }, []);

  return (
      <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p> 
        <p>{todo.createdAt}</p>
    </div>
  )
}

export default Todo;