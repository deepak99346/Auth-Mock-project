# Auth Mock Project

A simple authentication mock built with **Node.js** and **Express**.  
It provides a basic **login route** (`/api/login`) that validates credentials against mock user data.  

---

## 🚀 Features
- Simple Express server with `/api/login` route
- Validates username & password against hardcoded users
- Error handling for invalid/missing credentials
- Modular project structure (routes, middleware, config)

---

## 📂 Project Structure
Auth-mock/
│── server.js # Entry point
│── package.json # Dependencies & scripts
│
├── routes/
│ └── auth.js # Login route
│
├── config/
│ └── users.js # Mock users data
│
└── middleware/
└── validateLogin.js # Request validation
