import API from "../api/api";
import "../styles/AppUI.css";

const ExpenseCard = ({ expense, refresh }) => {
  const remove = async () => {
    await API.delete(`/expenses/${expense._id}`);
    refresh();
  };

  return (
    <div className="glass-card expense-card">
      <div>
        <strong>{expense.title}</strong>
        <p>₹{expense.amount} • {expense.category}</p>
      </div>
      <button className="delete-btn" onClick={remove}>Delete</button>
    </div>
  );
};

export default ExpenseCard;
