import { saveData, readTeamData } from './database.js';

const teamForm = document.getElementById('teamForm');
const logOffBtn = document.getElementById("logOffBtn");

teamForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const ekipa = document.getElementById('ekipa').value;
  const ime = document.getElementById('ime').value;
  const prezime = document.getElementById('prezime').value;
  const brojIgraca = document.getElementById("brojIgraca").value;
  const pozicija = document.getElementById('pozicija').value;

  saveData(ekipa, ime, prezime, pozicija, brojIgraca);
  readTeamData(ekipa);
  teamForm.reset();
});



logOffBtn.addEventListener("click", (e) => {
  window.location.href = 'prijavaKapetan.html';
})