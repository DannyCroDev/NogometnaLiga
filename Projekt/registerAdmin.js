import { registerAdminAcc } from './database.js';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const registerInputs = document.getElementById("registerInputs");


registerInputs.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("register_adminName").value;
    const lastName = document.getElementById("register_adminLastname").value;
    const password = document.getElementById("register_adminCode").value;
    const email = document.getElementById("register_adminEmail").value;

    registerAdminAcc(name, lastName, password, email);

    registerInputs.reset();
    const uniqueId = nanoid();
});