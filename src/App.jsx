import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todos from "./components/Todos";
import { loader as todosLoader } from "./components/Todos";
import AddTodo from "./components/AddTodo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos />,
    loader: todosLoader
  },
  {
    path: "/add",
    element: <AddTodo />
  }
])

const App = () => {
  return <RouterProvider 
    router={router}
  />
}

export default App;