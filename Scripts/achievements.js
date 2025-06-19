const achievements = [
  { id: 1, title: "First Step!", desc: "You opened the app today." },
  { id: 2, title: "Focus Master", desc: "Completed a 25-min focus session." },
  { id: 3, title: "Consistency Champ", desc: "Visited the app 5 days in a row." },
  { id: 4, title: "Task Crusher", desc: "Completed 10 tasks!" },
  { id: 5, title: "No Procrastination", desc: "Had a day with 0 delays!" }
];

function loadAchievements() {
  const achievedIds = JSON.parse(localStorage.getItem("achievedIds")) || [1, 2];
  const achievementsList = document.getElementById("achievementsList");
  achievementsList.innerHTML = "";

  achievements.forEach((ach) => {
    const unlocked = achievedIds.includes(ach.id);
    const card = document.createElement("div");
    card.className = "card";
    card.style.opacity = unlocked ? 1 : 0.5;
    card.innerHTML = `
      <h3>${ach.title}</h3>
      <p>${ach.desc}</p>
      <p style="font-weight:bold; color:${unlocked ? 'green' : 'gray'}">${unlocked ? "Unlocked!" : "Locked"}</p>
    `;
    achievementsList.appendChild(card);
  });

  // Update progress bar
  const percent = (achievedIds.length / achievements.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

function resetAchievements() {
  localStorage.removeItem("achievedIds");
  loadAchievements();
}

loadAchievements();
