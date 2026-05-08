import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/signin"; // simple navigation

  }
  const handleLogin = () => {
    alert("Login clicked");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary px-3">
      <NavLink className="navbar-brand text-warning fw-bold" to="/">
        CarDealership
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          {/* Always visible */}
          <li className="nav-item">
            <NavLink to="/" className="nav-link">GetCars</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/addcars" className="nav-link">Add Cars</NavLink>
          </li>

          {/* Conditional Rendering */}
          {user ? (
            <>
              <li className="nav-item">
                <span className="nav-link text-success fw-bold">
                  👋 {user.username}
                </span>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="btn btn-sm btn-danger ms-2">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link">Signup</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Signup" className="nav-link">signin</NavLink>
              </li>
            </>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;