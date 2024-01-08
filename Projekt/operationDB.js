import { saveData } from './database.js';

const teamForm = document.getElementById('teamForm');

teamForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const ekipa = document.getElementById('ekipa').value;
  saveData(ekipa);
});