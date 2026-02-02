# Expense Tracker 💰

A full-stack Expense Tracker application that allows users to manage daily expenses with authentication, analytics, and a clean UI.

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Add, View, and Delete Expenses
- Protected Routes
- Weekly Expense Analytics (Charts)
- Dashboard with Welcome Message
- Responsive UI (Mobile + Desktop)

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios
- Recharts
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs

---

## 📁 Project Structure
```
Expense_tracker/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── api/
│ │ └── styles/
│ ├── package.json
│ └── vite.config.js
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── database/
│ ├── server.js
│ └── package.json
│
├── .gitignore
└── README.md
```
# Expense Tracker 💰

A full-stack Expense Tracker application that allows users to manage daily expenses with authentication, analytics, and a clean UI.

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Add, View, and Delete Expenses
- Protected Routes
- Weekly Expense Analytics (Charts)
- Dashboard with Welcome Message
- Responsive UI (Mobile + Desktop)

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Axios
- Recharts
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs

---

## 📁 Project Structure
Expense_tracker/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── api/
│ │ └── styles/
│ ├── package.json
│ └── vite.config.js
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── database/
│ ├── server.js
│ └── package.json
│
├── .gitignore
└── README.md

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
PORT=3000

▶️ Running the Project Locally
Backend
cd backend
npm install
npm run dev


Server runs on:

http://localhost:3000

Frontend
cd frontend
npm install
npm run dev


App runs on:

http://localhost:5173

🔐 Authentication Flow

User logs in or registers

Backend generates JWT token

Token is stored in browser

Token is sent in Authorization header

Protected routes verify JWT

📊 Analytics

Weekly expense chart (Monday → Sunday)

Dynamic week navigation

Data aggregated using timestamps

🌍 Deployment

Frontend: GitHub Pages / Vercel

Backend: Render

Database: MongoDB Atlas

📌 Future Improvements

Monthly expense analytics

Category-wise charts

Edit expense functionality

Export expenses to CSV

Dark / Light theme toggle

👨‍💻 Author

Rushi Yalamanchili

GitHub: https://github.com/rushi-341
