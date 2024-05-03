import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todos from "./components/Todos";
import { loader as todosLoader } from "./components/Todos";
import Todo from "./components/Todo";
import { loader as todoLoader } from "./components/Todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos />,
    loader: todosLoader
  },
  {
    path: "/todos/:id",
    element: <Todo />,
    loader: todoLoader
  }
])

const App = () => {
  return <RouterProvider 
    router={router}
  />
}

export default App;