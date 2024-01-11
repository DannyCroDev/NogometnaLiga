import { readTeamAdmin } from "./database.js";


document.addEventListener("DOMContentLoaded", () => {
    readTeamAdmin();
})



logOffBtn.addEventListener("click", (e) => {
    window.location.href = 'prijavaOrganizator.html';
  })


  