import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import WeeklyChart from "../components/WeeklyChart";
import "../styles/AppUI.css";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const expensesRes = await API.get("/expenses");
      setExpenses(expensesRes.data.expenses);
      setTotal(expensesRes.data.totalAmount);

      const dashboardRes = await API.get("/user/dashboard");
      setUsername(dashboardRes.data.user.name);
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Navbar />

      {/* 👋 Welcome Message */}
      <div className="glass-card">
        <h2>Welcome, {username} 👋</h2>
        <p style={{ opacity: 0.8 }}>
          Here’s a quick look at your spending this week
        </p>
      </div>

      <div className="glass-card stat-card">
        Total Spent: ₹{total}
      </div>

      <WeeklyChart expenses={expenses} />

      <div className="glass-card">
        <h3>Recent Expenses</h3>
        <ul>
          {expenses.slice(0, 5).map(exp => (
            <li key={exp._id}>
              {exp.title} – ₹{exp.amount} ({exp.category})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
