import { saveCapAcc } from './database.js';

const capInputs = document.getElementById('capInputs');
const logButton = document.getElementById("logButton");

capInputs.addEventListener("submit", (e) => {
  e.preventDefault();
  const cap_username = document.getElementById('cap_username').value;
  const cap_password = document.getElementById('cap_password').value;

  saveCapAcc(cap_username, cap_password)
    .then(() => {
      window.location.href = 'kapetanDashboard.html';
      capInputs.reset();
    })
    .catch((error) => {
      console.error("Error saving data to the database:", error);
    });
});
