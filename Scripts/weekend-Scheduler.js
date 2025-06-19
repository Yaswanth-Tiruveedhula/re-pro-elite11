const schedulerContainer = document.getElementById("scheduler");
const clearAllBtn = document.getElementById("clearAllBtn");

const weekendDays = [
  "Saturday Morning", "Saturday Afternoon",
  "Sunday Morning", "Sunday Afternoon"
];

// Load saved weekend tasks from localStorage or start empty
let tasks = JSON.parse(localStorage.getItem("weekendTasks")) || {};

// Create time slots for weekend
function createTimeSlots() {
  schedulerContainer.innerHTML = ""; // clear

  weekendDays.forEach(slot => {
    const timeSlot = document.createElement("div");
    timeSlot.className = "time-slot";

    const label = document.createElement("div");
    label.className = "time-label";
    label.textContent = slot;

    const input = document.createElement("input");
    input.type = "text";
    input.className = "task-input";
    input.placeholder = "Add your weekend task...";
    input.value = tasks[slot]?.text || "";

    if(tasks[slot]?.completed) {
      input.classList.add("completed");
    }

    const saveBtn = document.createElement("button");
    saveBtn.className = "save-btn";
    saveBtn.textContent = "Save";

    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.textContent = tasks[slot]?.completed ? "Completed" : "Mark Done";

    if(tasks[slot]?.completed) {
      completeBtn.classList.add("completed");
      completeBtn.disabled = true;
    }

    saveBtn.addEventListener("click", () => {
      const val = input.value.trim();
      if(val === "") {
        delete tasks[slot];
      } else {
        tasks[slot] = {
          text: val,
          completed: tasks[slot]?.completed || false
        };
      }
      localStorage.setItem("weekendTasks", JSON.stringify(tasks));
      alert("Weekend task saved!");
    });

    completeBtn.addEventListener("click", () => {
      if(tasks[slot]) {
        tasks[slot].completed = true;
        localStorage.setItem("weekendTasks", JSON.stringify(tasks));
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

// Clear all weekend tasks
clearAllBtn.addEventListener("click", () => {
  if(confirm("Are you sure you want to clear all weekend tasks?")) {
    tasks = {};
    localStorage.removeItem("weekendTasks");
    createTimeSlots();
  }
});

// Initialize scheduler on page load
createTimeSlots();
