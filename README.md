📝 EasyToDo – Task Manager API + Frontend
EasyToDo is a clean, fully functional To-Do List application built with FastAPI for the backend and a static frontend using HTML + JavaScript. It supports complete CRUD operations, status filtering, and live progress tracking.

🚀 Live Demo
🌐 Frontend deployed on Netlify:
👉 https://easytodo01.netlify.app

⚠️ The backend must run locally at http://127.0.0.1:8000 for full functionality.

🧱 Project Structure
pgsql
Copy
Edit
todo-api-fastapi/
├── app/               # FastAPI backend
│   ├── main.py
│   ├── models.py
│   ├── crud.py
│   ├── schemas.py
│   └── database.py
├── frontend/          # Static frontend
│   ├── index.html
│   └── script.js
├── requirements.txt
└── README.md
⚙️ Features
✅ Add, edit, and delete tasks

✅ Track task progress (starting, in_progress, almost_done)

✅ Mark tasks as completed

✅ Filter tasks by status

✅ Lightweight and clean UI

✅ Fully functional REST API (FastAPI + SQLite)

✅ Deployed frontend with Netlify

📡 API Endpoints
Method	Endpoint	Description
GET	/tasks/	Retrieve all tasks
GET	/tasks/{id}	Retrieve a single task
POST	/tasks/	Create a new task
PUT	/tasks/{id}	Update task content or status
DELETE	/tasks/{id}	Delete a task

🛠 Tech Stack
Backend: Python, FastAPI, SQLAlchemy, SQLite

Frontend: HTML, JavaScript (Vanilla), Fetch API

Deployment: Netlify (frontend), Localhost (backend)

🧠 Developer Notes
This project is part of my backend portfolio to demonstrate API development and frontend integration. It was designed to be simple, modular, and easy to expand. Future improvements may include backend deployment, authentication, and multi-user support.

⚙️ Local Setup (optional)
bash
Copy
Edit
git clone https://github.com/your-username/todo-api-fastapi
cd todo-api-fastapi
python -m venv venv
source venv/bin/activate      # On Unix/Mac
venv\Scripts\activate         # On Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
Visit http://127.0.0.1:8000/docs for interactive Swagger API documentation.

📬 Contact
Open to collaboration and freelance opportunities.
You can reach me via GitHub or at adrianlive1024@gmail.com
