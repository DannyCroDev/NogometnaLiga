import { saveCapAcc } from './database.js';

const capInputs = document.getElementById('capInputs');
const logButton = document.getElementById("logButton");

capInputs.addEventListener("submit", async (e) => {
  e.preventDefault();
  const cap_username = document.getElementById('cap_username').value;
  const cap_password = document.getElementById('cap_password').value;


  await saveCapAcc(cap_username, cap_password);

  capInputs.reset();


});

logButton.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "kapetanDashboard.html";
});