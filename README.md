# 📝 MERN Todos App

A full-stack **Todo application** built using the **MERN stack**.  
This project was developed as my **final project at CTD** and demonstrates authentication, profile management, and complete CRUD operations for todos.

---
## 🌐 Live Demo

🔗 **Deployed Application:**  
👉 https://judix-assignment.onrender.com


## 📸 Screenshots

### 🔐 TO DO lists
**Signup Page**
![Signup Page](./images/todo.png)

**Pending lists**
![Login Page](./images/pen.png)

**View AND Edit Profile**
![Login Page](./images/prof.png)
## 🚀 Tech Stack

### Frontend
- React.js
- Vite
- CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Authentication
- JSON Web Tokens (JWT)
- HTTP-only cookies

---

## ✨ Features

### 🔐 Authentication
- User signup & login
- Secure logout
- JWT-based authentication

### 👤 Profile Management
- View profile
- Update user name and email
- Change password
- Delete user account

### ✅ Todo Management
- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as **Completed** or **Pending**

### 📂 Todo Sections
- All Todos
- Completed Todos
- Pending Todos

### 🧩 Additional
- Protected routes
- Custom 404 (Page Not Found)
- Scalable & extensible project structure

---

## 🔗 API Endpoints

### 🔐 Auth & User
- `GET /check-auth` – Check authentication status
- `POST /signup` – User signup
- `POST /login` – User login
- `POST /logout` – User logout
- `GET /user` – Get user profile
- `PUT /user/update` – Update user profile
- `DELETE /user/delete` – Delete user account

### 📝 Todos
- `POST /addtodo` – Add a new todo
- `GET /todos` – Get all todos
- `GET /completedTodos` – Get completed todos
- `GET /pendingTodos` – Get pending todos
- `PUT /todo/updateStatus` – Update todo status
- `PUT /todo/update` – Update todo
- `DELETE /todo/delete` – Delete todo

---

## 🛠️ Run Locally

### 1️⃣ Clone the repository
```bash
git clone <repository-url>
cd MERN_TODOS_APP
