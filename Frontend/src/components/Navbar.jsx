import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Expense Manager</h2>

      <div className="nav-links">
        <NavLink to="/dashboard" className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }>
          Dashboard
        </NavLink>

        <NavLink to="/expenses/add" className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }>
          Add Expense
        </NavLink>

        <NavLink to="/expenses/manage" className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }>
          Manage Expenses
        </NavLink>

        {/* 🔴 LOGOUT */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
