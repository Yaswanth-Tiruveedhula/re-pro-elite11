// home2.js
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-link');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active classes
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });
});

function f1(){
    window.location.href = "daily-weekly-f1.html";
}
function f2(){
  window.location.href = "achievements.html"
}
function f3(){
  window.location.href = "feature3.html"
}
function f4(){
  window.location.href = "Daily-Scheduler.html"
}
function f5(){
  window.location.href = "weekend-Scheduler.html"
}

function f6(){
  window.location.href = "chatbot.html"
}



