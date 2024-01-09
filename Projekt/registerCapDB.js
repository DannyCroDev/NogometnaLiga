import { registerCapAcc } from './database.js';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const registerInputs = document.getElementById("registerInputs");


registerInputs.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("register_capName").value;
    const lastName = document.getElementById("register_capLastname").value;
    const password = document.getElementById("register_capCode").value;
    const email = document.getElementById("register_capEmail").value;

    registerCapAcc(name, lastName, password, email);

    registerInputs.reset();
    const uniqueId = nanoid();
});