import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainNav from "./wrappers/MainNav";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import DashboardNav from "./wrappers/DashboardNav";
import Courses from "./components/Courses";
import Course from "./components/Course";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNav />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardNav />,
    children: [
      {
        index: true,
        element: <Courses />
      },
      {
        path: "codekata",
        element: <h1>Codekata</h1>
      },
      {
        path: "webkata",
        element: <h1>Webkata</h1>
      },
      {
        path: "ide",
        element: <h1>IDE</h1>
      },
      {
        path: "support",
        element: <h1>Support</h1>
      },
      {
        path: "courses/:id",
        element: <Course />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;