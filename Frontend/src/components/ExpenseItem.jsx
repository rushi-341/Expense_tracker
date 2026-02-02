import API from "../api/api";

const ExpenseItem = ({ expense, refresh }) => {
  const deleteItem = async () => {
    await API.delete(`/expenses/${expense._id}`);
    refresh();
  };

  return (
    <div>
      <span>
        {expense.title} - ₹{expense.amount}
      </span>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
