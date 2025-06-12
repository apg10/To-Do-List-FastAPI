# 📝 EasyToDo API & Frontend

This is a simple and fully functional **To-Do List** project built with **FastAPI** (Python) and a static frontend in **HTML + JavaScript**. It includes full CRUD functionality, task filtering, progress tracking, and live deployment.

## 🚀 Live Demo

🌐 Frontend deployed on Netlify:  
👉 [https://easytodo01.netlify.app](https://easytodo01.netlify.app)

> ⚠️ The backend must be running locally at `http://127.0.0.1:8000` for the frontend to work.

---

## 🧱 Project Structure

todo-api-fastapi/
├── app/ ← FastAPI backend (API)
│ ├── main.py
│ ├── models.py
│ ├── crud.py
│ ├── schemas.py
│ └── database.py
├── frontend/ ← HTML + JS frontend
│ ├── index.html
│ └── script.js
├── requirements.txt
└── README.md


---

## ⚙️ Features

- ✅ Add, edit, delete tasks
- ✅ Track task progress (`starting`, `in_progress`, `almost_done`)
- ✅ Mark tasks as completed
- ✅ Filter tasks by completion status
- ✅ Simple and clean UI
- ✅ Fully functional API with FastAPI + SQLite
- ✅ Frontend hosted for public access via Netlify

---

## 📡 API Endpoints (FastAPI)

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| GET    | `/tasks/`          | Get all tasks              |
| GET    | `/tasks/{id}`      | Get a specific task        |
| POST   | `/tasks/`          | Create a new task          |
| PUT    | `/tasks/{id}`      | Update task (progress, status) |
| DELETE | `/tasks/{id}`      | Delete a task              |

---

## 🛠 Tech Stack

- **Backend:** Python, FastAPI, SQLAlchemy, SQLite
- **Frontend:** HTML, Vanilla JS, Fetch API
- **Deploy:** Netlify (frontend), local backend

---

## 🧑‍💻 Developer Notes

This project is part of a personal backend portfolio, focusing on building clean, working APIs connected to minimal frontends. Future enhancements may include full deployment of the backend and user authentication.

---

## 📦 Local Setup (optional)

1. Clone this repo:
   ```bash
   git clone https://github.com/your-username/todo-api-fastapi
Create and activate a virtual environment:

bash
Copiar
Editar
python -m venv venv
venv\Scripts\activate  # On Windows
Install dependencies:

bash
Copiar
Editar
pip install -r requirements.txt
Run the API:

bash
Copiar
Editar
uvicorn app.main:app --reload
Open http://127.0.0.1:8000/docs for Swagger UI.

📬 Contact
Feel free to reach out via GitHub issues or connect for collaboration opportunities.
