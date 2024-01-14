import { readTeamAdmin } from "./database.js";

document.addEventListener("DOMContentLoaded", () => {
    loadStandings();
})

function loadStandings(){
    const tablicaRezultata = document.getElementById("tablicaRezultata");

    const standingsData = JSON.parse(localStorage.getItem('standingsData')) || [];

    standingsData.forEach((team, index) => {

        if (index > 0) {
            const noviRed = tablicaRezultata.insertRow(-1);

            noviRed.innerHTML = `
                <td>${index}</td>
                <td>${team.team}</td>
                <td>${team.points}</td>
            `;
        }
    });
}