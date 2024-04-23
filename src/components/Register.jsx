const Register = () => {
  return (
      <div>
          <form>
                <h1>Register</h1>
                <label htmlFor="username">Username</label><br />
                <input type="text" id="username" name="username" /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" name="password" /><br />
                <button type="submit">Register</button>
          </form>
    </div>
  )
}

export default Register;