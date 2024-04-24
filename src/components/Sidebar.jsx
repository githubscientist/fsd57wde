import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
      <div className="p-3 text-white bg-light">
            <ul className="d-flex nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link active" aria-current="page">
                        Courses
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/codekata" className="nav-link link-dark">
                        Codekata
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/webkata" className="nav-link link-dark">
                        Webkata
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/ide" className="nav-link link-dark">
                        IDE
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/support" className="nav-link link-dark">
                        Support
                    </Link>
                </li>
            </ul>          
    </div>
  )
}

export default Sidebar;