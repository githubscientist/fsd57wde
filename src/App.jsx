import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "login",
        element: <Login />,
        children: [
          {
            path: "forgot-password",
            element: <div>Forgot Password</div>
          }
        ]
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App;