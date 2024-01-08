import { saveCapAcc } from './database.js';

const capInputs = document.getElementById('capInputs');

capInputs.addEventListener("submit", (e) => {
  e.preventDefault();
  const cap_username = document.getElementById('cap_username').value;
  const cap_password = document.getElementById('cap_password').value;


  saveCapAcc(cap_username, cap_password);

  capInputs.reset();
});

