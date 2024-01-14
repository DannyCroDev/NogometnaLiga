import { readTeamAdmin } from "./database.js";

const spremiBodove = document.getElementById("spremiBodove");
const ekipeLista = document.getElementById("ekipeLista");
let pozicijaStupac = document.getElementById("pozicijaStupac");
let nazivStupac = document.getElementById("nazivStupac");
let bodoviStupac = document.getElementById("bodoviStupac");
let bodoviUnos = document.getElementById("bodoviUnos");
const tablicaRezultata = document.getElementById("tablicaRezultata");




document.addEventListener("DOMContentLoaded", () => {
    readTeamAdmin();
})



logOffBtn.addEventListener("click", (e) => {
    window.location.href = 'prijavaOrganizator.html';
  })


  spremiBodove.addEventListener("click", (e) => {
    e.preventDefault();

    const odabranaEkipa = ekipeLista.value;
    let brBodovaEkipe = 0;
    let uneseniBodovi = parseInt(bodoviUnos.value);
    

        if(odabranaEkipa && !isNaN(uneseniBodovi)){


            const redTima = Array.from(tablicaRezultata.rows).find(row => row.cells[1].textContent === odabranaEkipa);


            if(redTima) {
                const trenutniBodovi = parseInt(redTima.cells[2].textContent);
                redTima.cells[2].textContent = parseInt(trenutniBodovi + uneseniBodovi);
            } else{
                const noviRedTima = tablicaRezultata.insertRow(-1);
                const pozicija = tablicaRezultata.rows.length - 1;

                noviRedTima.innerHTML = `
                    <td>${pozicija}</td>
                    <td>${odabranaEkipa}</td>
                    <td>${uneseniBodovi}</td>
                                        `
            }

            bodoviUnos.value = '';

      

            sortTable(tablicaRezultata);

        } else {
            alert("Molimo vas odaberite tim i unesite bodove")
        }
    
        
  });




  function sortTable(table) {
    const rows = Array.from(table.rows).slice(1);

    rows.sort((rowA, rowB) => {
        const pointsA = parseInt(rowA.cells[2].textContent) || 0;
        const pointsB = parseInt(rowB.cells[2].textContent) || 0;
        return pointsB - pointsA;
    });

    while(table.rows.length > 1){
        table.deleteRow(1);
    }

   rows.forEach((row, index) => {
        const pozicija = row.cells[0];
        pozicija.textContent = index + 1;
        table.appendChild(row);
   })
}
  