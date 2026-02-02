const Expense = require("../models/Expense");

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense
      .find({ user: req.user.userId })
      .sort({ createdAt: -1 });

    const totalAmount = expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );

    return res.status(200).json({
      success: true,
      totalAmount,
      expenses
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};

const addExpenses = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    if (!title || !amount || !category) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const expense = await Expense.create({
      title,
      amount,
      category,
      user: req.user.userId // ✅ FIXED
    });

    return res.status(201).json({
      success: true,
      message: "Expense added successfully",
      data: expense
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExpense = await Expense.findOneAndDelete({
      _id: id,
      user: req.user.userId
    });

    if (!deletedExpense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found or not authorized"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Expense deleted successfully"
    });

  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};

module.exports = { getExpenses, addExpenses, deleteExpense };
