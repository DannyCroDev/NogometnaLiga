import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set, push, onValue, child, get } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const firebaseConfig = {
    apiKey: "AIzaSyBaaum-PI17XKbZnkzuUCXGe-9MqNwJqfg",
    authDomain: "nogometna-liga-2dc5b.firebaseapp.com",
    databaseURL: "https://nogometna-liga-2dc5b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nogometna-liga-2dc5b",
    storageBucket: "nogometna-liga-2dc5b.appspot.com",
    messagingSenderId: "899310206855",
    appId: "1:899310206855:web:6e3fbd880928bdf4dc9d22"
  };

const app = initializeApp(firebaseConfig);

export function saveData(ekipa, ime, prezime, pozicija, brojIgraca) {
  const db = getDatabase(app);
  const nazivEkipe = ekipa;
  

  push(ref(db, 'timovi/' + ekipa), {
    igrac:{
        ime: ime,
        prezime: prezime,
        pozicija: pozicija,
        brojIgraca: brojIgraca
    }
  });


}

export function saveCapAcc(cap_username, cap_password){
    const db = getDatabase(app);
    push(ref(db, 'Računi kapetana/' + cap_username), {
        cap_username:  cap_username,
        cap_password: cap_password
      });
}

export function registerCapAcc(register_capName, register_capLastname, register_capCode, register_capEmail){
  const db = getDatabase(app);
  const uniqueId = nanoid();

  push(ref(db, 'Registracija kapetana/' + uniqueId), {
      reg_ime: register_capName,
      reg_prezime: register_capLastname,
      reg_lozinka: register_capCode,
      reg_email: register_capEmail
  });
  console.log(uniqueId);

}



export function saveAdminAcc(admin_username, admin_password){
  const db = getDatabase(app);
  push(ref(db, 'Računi voditelja/' + admin_username), {
      admin_username:  admin_username,
      admin_password: admin_password
    });
}

export function registerAdminAcc(register_adminName, register_adminLastname, register_adminCode, register_adminEmail){
const db = getDatabase(app);
const uniqueId = nanoid();

push(ref(db, 'Registracija voditelja/' + uniqueId), {
    reg_ime: register_adminName,
    reg_prezime: register_adminLastname,
    reg_lozinka: register_adminCode,
    reg_email: register_adminEmail
});
console.log(uniqueId);

}



export function readTeamData(ekipa){
  const db = getDatabase();
  const teamRef = ref(db, `timovi/${ekipa}`);
  const tableBody = document.querySelector('.table-container table tbody');
  
    tableBody.innerHTML = '';
    get(teamRef).then((snapshot) => {
  

    if(snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const playerData = childSnapshot.val().igrac;
        const { ime, prezime, pozicija, brojIgraca} = playerData;
        const redIgraca = document.createElement('tr');
        const infoTitle = document.querySelector('.playerInfoTitle');
        infoTitle.innerHTML = `Igrači ekipe ${ekipa}`;


        redIgraca.innerHTML = `
          <td>${ime}</td>
          <td>${prezime}</td>
          <td>${brojIgraca}</td>
          <td>${pozicija}</td>      
                              `;

          tableBody.appendChild(redIgraca);
      });

    } else{
      console.log("Nema zabilježenih podataka za ovaj tim");
    }
  }).catch((error) => {
    console.error(error);
  });
}