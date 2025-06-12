// Base URL of the API
const API_URL = "http://127.0.0.1:8000/tasks";

// Reference to the form and list elements in the DOM
const form = document.getElementById("task-form");
const list = document.getElementById("task-list");

// Handle form submission to create a new task
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent page reload

  // Get input values
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const progress = document.getElementById("progress").value;

  // Send POST request to create a new task
  const response = await fetch(API_URL + "/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, progress }),
  });

  // If successful, reload tasks and reset the form
  if (response.ok) {
    loadTasks();
    form.reset();
  }
});

// Load tasks from the backend and display them
async function loadTasks() {
  const res = await fetch(API_URL + "/");
  const tasks = await res.json();

  // Clear current task list
  list.innerHTML = "";

  // Display each task as a list item
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = `[${task.progress}] ${task.title} - ${task.description}`;
    list.appendChild(li);
  });
}

// Initial load
loadTasks();
