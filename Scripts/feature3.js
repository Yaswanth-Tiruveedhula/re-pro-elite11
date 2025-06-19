// Dummy data: procrastination time in minutes for 7 days (Mon to Sun)
const procrastinationData = [
  { day: "Mon", minutes: 30 },
  { day: "Tue", minutes: 45 },
  { day: "Wed", minutes: 20 },
  { day: "Thu", minutes: 50 },
  { day: "Fri", minutes: 15 },
  { day: "Sat", minutes: 60 },
  { day: "Sun", minutes: 25 }
];

// Find max minutes to scale bar heights
const maxMinutes = Math.max(...procrastinationData.map(d => d.minutes));

const chartContainer = document.getElementById("chartContainer");
const summary = document.getElementById("summary");

// Create bars for each day
procrastinationData.forEach(({ day, minutes }) => {
  const bar = document.createElement("div");
  bar.className = "bar";
  // Height proportional to minutes (max height = 180px)
  const height = (minutes / maxMinutes) * 180;
  bar.style.height = `${height}px`;

  bar.innerHTML = `
    <span class="value">${minutes}m</span>
    <span class="day">${day}</span>
  `;

  chartContainer.appendChild(bar);
});

// Calculate total procrastination time and average
const totalMinutes = procrastinationData.reduce((sum, d) => sum + d.minutes, 0);
const averageMinutes = Math.round(totalMinutes / procrastinationData.length);

summary.textContent = `Total procrastination this week: ${totalMinutes} minutes. Average per day: ${averageMinutes} minutes. Keep improving!`;
