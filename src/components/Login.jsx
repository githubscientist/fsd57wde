import { useNavigate } from 'react-router-dom';
import signupImg from '../assets/signup.jpeg';

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row p-5 justify-content-center align-items-center">
        <div className="col-md-6">
          <img src={signupImg} alt="GUVI logo" 
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6">
          <h1 className="text-center">Login</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                navigate('/dashboard');
              }}
            >Login</button>
          </form>
        </div>  
      </div>
    </div>
  )
}

export default Login;