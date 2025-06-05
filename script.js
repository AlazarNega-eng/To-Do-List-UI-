document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const filterButtons = document.querySelectorAll(".filter-btn");

  let tasks = [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Read a book", completed: true },
    { id: 3, title: "Write some code", completed: false },
  ];
  let nextId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  let currentFilter = "all"; // 'all', 'pending', 'completed'

  function renderTasks() {
    taskList.innerHTML = ""; // Clear existing tasks

    let filteredTasks = tasks;
    if (currentFilter === "pending") {
      filteredTasks = tasks.filter((task) => !task.completed);
    } else if (currentFilter === "completed") {
      filteredTasks = tasks.filter((task) => task.completed);
    }

    if (filteredTasks.length === 0) {
      const emptyMessage = document.createElement("li");
      emptyMessage.textContent =
        currentFilter === "all"
          ? "No tasks yet. Add one!"
          : `No ${currentFilter} tasks.`;
      emptyMessage.style.textAlign = "center";
      emptyMessage.style.color = "#777";
      emptyMessage.style.padding = "15px";
      emptyMessage.style.border = "none";
      emptyMessage.style.background = "none";
      taskList.appendChild(emptyMessage);
      return;
    }

    filteredTasks.forEach((task) => {
      const li = document.createElement("li");
      li.dataset.id = task.id;
      if (task.completed) {
        li.classList.add("completed");
      }

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => toggleComplete(task.id));

      const titleSpan = document.createElement("span");
      titleSpan.textContent = task.title;
      titleSpan.classList.add("task-title");

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => deleteTask(task.id));

      li.appendChild(checkbox);
      li.appendChild(titleSpan);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  function addTask() {
    const title = taskInput.value.trim();
    if (title === "") {
      alert("Task title cannot be empty!");
      return;
    }

    const newTask = {
      id: nextId++,
      title: title,
      completed: false,
    };
    tasks.push(newTask);
    taskInput.value = ""; // Clear input
    renderTasks();
  }

  function toggleComplete(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      renderTasks();
    }
  }

  function deleteTask(taskId) {
    tasks = tasks.filter((t) => t.id !== taskId);
    renderTasks();
  }

  function setFilter(filter) {
    currentFilter = filter;
    filterButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === filter);
    });
    renderTasks();
  }

  // Event Listeners
  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setFilter(button.dataset.filter);
    });
  });

  // Initial render
  renderTasks();
});
