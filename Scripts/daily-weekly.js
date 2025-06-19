const data = {
  daily: [
    { activity: 'Work', hours: 5 },
    { activity: 'Study', hours: 2 },
    { activity: 'Exercise', hours: 1 },
    { activity: 'Leisure', hours: 3 },
  ],
  weekly: [
    { activity: 'Work', hours: 35 },
    { activity: 'Study', hours: 14 },
    { activity: 'Exercise', hours: 5 },
    { activity: 'Leisure', hours: 10 },
  ],
  monthly: [
    { activity: 'Work', hours: 140 },
    { activity: 'Study', hours: 60 },
    { activity: 'Exercise', hours: 20 },
    { activity: 'Leisure', hours: 40 },
  ],
};

const timeframeButtons = document.querySelectorAll('.timeframe-selector button');
const statsContainer = document.getElementById('stats-container');

function renderStats(timeframe) {
  statsContainer.innerHTML = '';
  data[timeframe].forEach(item => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `
      <h2>${item.activity}</h2>
      <p>${item.hours} hrs</p>
    `;
    statsContainer.appendChild(card);
  });
}

timeframeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    timeframeButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to the clicked button
    button.classList.add('active');
    // Render stats for the selected timeframe
    const timeframe = button.getAttribute('data-timeframe');
    renderStats(timeframe);
  });
});

// Initialize with daily stats
renderStats('daily');
