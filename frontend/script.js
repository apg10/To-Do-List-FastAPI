const API_URL = "https://to-do-list-fastapi.onrender.com/tasks";

const form = document.getElementById("task-form");
const list = document.getElementById("task-list");
const filter = document.getElementById("filter");

// Add new task
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const progress = document.getElementById("progress").value;

  await fetch(API_URL + "/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, progress }),
  });

  form.reset();
  loadTasks();
});

// Load and display tasks
async function loadTasks() {
  const res = await fetch(API_URL + "/");
  const tasks = await res.json();

  list.innerHTML = "";

  const selectedFilter = filter.value;

  tasks
    .filter((task) => {
      if (selectedFilter === "completed") return task.is_completed;
      if (selectedFilter === "not_completed") return !task.is_completed;
      return true;
    })
    .forEach((task) => {
      const li = document.createElement("li");
      li.textContent = `[${task.progress}] ${task.title} - ${task.description}`;

      // Button to mark task as completed
      const completeBtn = document.createElement("button");
      completeBtn.textContent = task.is_completed ? "✔️" : "✅";
      completeBtn.onclick = async () => {
        await fetch(API_URL + `/${task.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ is_completed: !task.is_completed }),
        });
        loadTasks();
      };

      // Button to delete task
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️";
      deleteBtn.onclick = async () => {
        await fetch(API_URL + `/${task.id}`, { method: "DELETE" });
        loadTasks();
      };

      li.appendChild(completeBtn);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
}

// Filter event
filter.addEventListener("change", loadTasks);

// Initial load
loadTasks();
