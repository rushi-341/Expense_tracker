import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h2 className="navbar-title">Expense Manager</h2>

        <div
          className={`nav-links ${open ? "open" : ""}`}
        >
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/add-expense">Add Expense</NavLink>
          <NavLink to="/manage-expenses">Manage</NavLink>
          <button className="logout-btn">Logout</button>
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
