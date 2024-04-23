import { Link, Outlet } from "react-router-dom";

const Login = () => {
  return (
      <div>
          <form>
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Login</button>
      </form>
      <p>Forgot your password? <Link to="/login/forgot-password">Click here</Link></p>
      <Outlet />
    </div>
  )
}

export default Login;