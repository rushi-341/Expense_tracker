import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import ExpenseCard from "../components/ExpenseCard";
import "../styles/AppUI.css";

const ManageExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await API.get("/expenses");
    setExpenses(res.data.expenses);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="app-container">
      <Navbar />

      <h1>Manage Expenses</h1>

      {expenses.map(exp => (
        <ExpenseCard
          key={exp._id}
          expense={exp}
          refresh={fetchExpenses}
        />
      ))}
    </div>
  );
};

export default ManageExpenses;
