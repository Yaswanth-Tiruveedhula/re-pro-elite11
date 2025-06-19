const schedulerContainer = document.getElementById("scheduler");
const clearAllBtn = document.getElementById("clearAllBtn");

const workHours = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM",
  "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM"
];

// Load saved tasks from localStorage or start empty
let tasks = JSON.parse(localStorage.getItem("dailyTasks")) || {};

// Create time slots
function createTimeSlots() {
  schedulerContainer.innerHTML = ""; // clear

  workHours.forEach(hour => {
    const timeSlot = document.createElement("div");
    timeSlot.className = "time-slot";

    const label = document.createElement("div");
    label.className = "time-label";
    label.textContent = hour;

    const input = document.createElement("input");
    input.type = "text";
    input.className = "task-input";
    input.placeholder = "Add your task...";
    input.value = tasks[hour]?.text || "";

    // Mark completed style
    if(tasks[hour]?.completed) {
      input.classList.add("completed");
    }

    const saveBtn = document.createElement("button");
    saveBtn.className = "save-btn";
    saveBtn.textContent = "Save";

    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.textContent = tasks[hour]?.completed ? "Completed" : "Mark Done";

    if(tasks[hour]?.completed) {
      completeBtn.classList.add("completed");
      completeBtn.disabled = true;
    }

    // Save button click
    saveBtn.addEventListener("click", () => {
      const val = input.value.trim();
      if(val === "") {
        delete tasks[hour];
      } else {
        tasks[hour] = {
          text: val,
          completed: tasks[hour]?.completed || false
        };
      }
      localStorage.setItem("dailyTasks", JSON.stringify(tasks));
      alert("Task saved!");
    });

    // Complete button click
    completeBtn.addEventListener("click", () => {
      if(tasks[hour]) {
        tasks[hour].completed = true;
        localStorage.setItem("dailyTasks", JSON.stringify(tasks));
        input.classList.add("completed");
        completeBtn.textContent = "Completed";
        completeBtn.classList.add("completed");
        completeBtn.disabled = true;
      } else {
        alert("Save a task first!");
      }
    });

    timeSlot.append(label, input, saveBtn, completeBtn);
    schedulerContainer.appendChild(timeSlot);
  });
}

// Clear all tasks
clearAllBtn.addEventListener("click", () => {
  if(confirm("Are you sure you want to clear all tasks?")) {
    tasks = {};
    localStorage.removeItem("dailyTasks");
    createTimeSlots();
  }
});

// Initialize scheduler on page load
createTimeSlots();
