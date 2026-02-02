import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/AppUI.css";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>💰 Expense Tracker</h2>
      </div>

      <div className="navbar-center">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/expenses/add">Add Expense</Link>
        <Link to="/expenses/manage">Manage Expenses</Link>
      </div>

      <div className="navbar-right">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
