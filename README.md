# NODEJS-CRUD-APP – Full Stack Client Management System

This is a full-stack **CRUD (Create, Read, Update, Delete)** application I developed using **React.js**, **Node.js**, and **PostgreSQL**. It provides an interactive interface for managing clients, including creating, editing, viewing, and deleting records.

---

## 🔧 Tech Stack

**Frontend**

* Vite + React.js
* Tailwind CSS
* DaisyUI
* Axios

**Backend**

* Node.js
* Express.js
* PostgreSQL
* pg, dotenv

**Tools**

* Postman
* PgAdmin

---

## 💡 Features

* Responsive UI built with DaisyUI and Tailwind CSS
* Modal-based form for adding/editing client details
* Dynamic client table with status toggles
* RESTful API with full CRUD operations
* PostgreSQL for persistent data storage
* Modular backend structure (Routes, Controllers, Services)

---

## 🚀 How I Built It

### Frontend Setup:

* Initialized with `npm create vite@latest`
* Installed Tailwind CSS and DaisyUI
* Created components: `Navbar`, `ClientsTable`, `ModalForm`, and `Select`
* Integrated Axios for API communication
* Used `useState` and `useEffect` for state and lifecycle management

### Backend Setup:

* Created an Express server
* Configured CORS and JSON middleware
* Defined routes in `/routes/clients.js`
* Modularized logic using `controllers` and `services`
* Connected to PostgreSQL using the `pg` package

### Database:

* Created `clients_tb` table using SQL in PgAdmin
* Sample data inserted for testing
* Connection string managed securely using `.env`

### Testing:

* APIs tested using Postman
* UI validated with React table and form interactions

---

## 🔮 API Endpoints

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | /api/clients      | Fetch all clients   |
| POST   | /api/clients      | Add new client      |
| PUT    | /api/clients/\:id | Update client by ID |
| DELETE | /api/clients/\:id | Delete client by ID |

---

## 📅 Future Enhancements

* User authentication with JWT
* Role-based access control
* Client search and filter functionality

---

## 📦 Run Locally

### Backend

```bash
cd crud-backend
npm install
node index.js
```

### Frontend

```bash
cd crud-frontend
npm install
npm run dev
```

---

## 📷 UI Preview
<img width="1440" alt="Screenshot 2025-06-20 at 5 00 45 PM" src="https://github.com/user-attachments/assets/43abcd54-9956-4ae7-b878-425b9e6ab242" />

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with patience, coffee, and a love for clean code. ☕️
