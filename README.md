# 🚀 Fundventory: ACES Fund and Inventory Management System

**Fundventory** is a full-stack digital solution designed to streamline inventory and fund request management for ACES. This project replaces manual processes with an automated system, reducing errors and improving productivity for students, inventory managers, and administrators.

---

## 🏗️ Project Architecture

The application is built using the **MERN** stack and is divided into three main components:

- **Backend**: Express.js server with MongoDB & Cloudinary integration.
- **Frontend**: Vite-powered React application for students/users.
- **Admin**: Separate dashboard for administrators and inventory managers.

---

## ✨ Key Features

### 👤 User (Student) Features
- **Restricted Access**: Registration is secured to `@eng.pdn.ac.lk` email domains.
- **Inventory Browse**: View available equipment and stocks in real-time.
- **Request Workflow**: Place and track orders for inventory items.
- **Fund Requests**: Submit formal fund requests for projects or events with budget detail uploads.
- **Personal Dashboard**: View the status of all active and past requests.

### 🛠️ Admin & Management Features
- **Stock Management**: Add, update, and remove products with image uploads via Cloudinary.
- **Approval System**: Review and update the status of inventory and fund requests (Pending, Approved, Denied, Issued, Returned).
- **User Management**: View all registered users and manage their access levels.
- **Issue/Return Tracking**: Track the physical movement of inventory items.

---

## 🛠️ Tech Stack

- **Frontend**: [React.js](https://reactjs.org/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose ODM)
- **Media Storage**: [Cloudinary](https://cloudinary.com/) (Product & document images)
- **Authentication**: [JWT (JSON Web Tokens)](https://jwt.io/), [Bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- **Validation**: [Validator.js](https://github.com/validatorjs/validator.js)

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. 📥 Installation & Setup

Clone the repository and install dependencies for all three folders:

```bash
# Install Backend Dependencies
cd backend && npm install

# Install Frontend Dependencies
cd ../frontend && npm install

# Install Admin Dependencies
cd ../admin && npm install
```

### 2. 🔑 Environment Configuration

Create a `.env` file in the **`/backend`** directory with the following variables:

```env
MONGODB_URI = "your_mongodb_connection_string"
JWT_SECRET = "your_secret_key"
CLOUDINARY_API_KEY = "your_key"
CLOUDINARY_SECRET_KEY = "your_secret"
CLOUDINARY_NAME = "your_name"
ADMIN_EMAIL = "admin@gmail.com"
ADMIN_PASSWORD = "your_admin_password"
```

Create a `.env` file in both **`/frontend`** and **`/admin`** directories:
```env
VITE_BACKEND_URL = "http://localhost:4000"
```

### 3. ▶️ Running the Application

Start all three services in separate terminals:

| Side | Command | Port |
| :--- | :--- | :--- |
| **Backend** | `npm run server` | `localhost:4000` |
| **Frontend** | `npm run dev` | `localhost:5173` |
| **Admin** | `npm run dev` | `localhost:5174` |

---

## 👥 Team ACES (E/20 Batch)

- **Padeniya S.M.N.N.** (E/20/276)
- **Ranawaka R.A.D.J.I.** (E/20/318)
- **Premasiri L.R.S.R.** (E/20/305)
- **Wijesooriya M.L.** (E/20/447)

---

## 📜 License
This project is for internal ACES use only. All rights reserved.
