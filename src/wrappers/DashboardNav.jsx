import { Link, Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const DashboardNav = () => {
  return (
      <div className="container-fluid">
        <div className="row">
              <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link disabled">Welcome Sathish!</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Logout</Link>
                    </li>
                </ul>
                </div>
        </nav>      
              </div>
          </div>
          
          <div className="row">
              <div className="col-md-3 col-sm-12">
                  <Sidebar />
                </div>
              <div className="col-md-9 col-sm-12 m-4">
                  <Outlet />
              </div>
          </div>
      </div>
      
  )
}

export default DashboardNav