import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import Navbar from "../components/Navbar";
import "../styles/AppUI.css";

const AddExpense = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/expenses", { title, amount, category });
    navigate("/dashboard");
  };

  return (
    <div className="app-container">
      <Navbar />

      <div className="glass-card">
        <h2>Add Expense</h2>

        <form onSubmit={submit}>
          <input
            className="form-input"
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />

          <input
            className="form-input"
            type="number"
            placeholder="Amount"
            onChange={e => setAmount(e.target.value)}
          />

          <select
            className="form-select"
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Clothes</option>
            <option>Rent</option>
            <option>Other</option>
          </select>

          <button className="form-button">Add Expense</button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
