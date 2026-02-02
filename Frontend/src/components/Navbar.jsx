import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Expense Manager</h2>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/dashboard"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/expenses/add"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Add Expense
        </NavLink>

        <NavLink
          to="/expenses/manage"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Manage Expenses
        </NavLink>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
