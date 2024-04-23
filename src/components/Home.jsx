import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
      <div>
          <h1>Welcome to the Home Page</h1>
          <p>This is the home page of our app. This application is a simple todo app with a few features. You can add a todo, mark it as done, and delete it. You can also filter the todos by their status. The app is built with React and React Router.</p>

          <Link to="/login">Login</Link><br />
          <Link to="/register">Register</Link>

          <Outlet />
    </div>
  )
}

export default Home;