import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, set, push } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';
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

  push(ref(db, 'timovi/' + ekipa), {
    nazivEkipe: ekipa,
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
    push(ref(db, 'računiKapetana/' + cap_username), {
        cap_username:  cap_username,
        cap_password: cap_password
      });
}

export function registerCapAcc(register_capName, register_capLastname, register_capCode, register_capEmail){
  const db = getDatabase(app);
  const uniqueId = nanoid();

  push(ref(db, 'registracijeRačuna/' + uniqueId), {
      reg_ime: register_capName,
      reg_prezime: register_capLastname,
      reg_lozinka: register_capCode,
      reg_email: register_capEmail
  });
  console.log(uniqueId);

}