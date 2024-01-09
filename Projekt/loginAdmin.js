import { saveAdminAcc } from './database.js';

const adminInputs = document.getElementById('adminInputs');

adminInputs.addEventListener("submit", (e) => {
  e.preventDefault();
  const admin_username = document.getElementById('admin_username').value;
  const admin_password = document.getElementById('admin_password').value;


  saveAdminAcc(admin_username, admin_password);

  adminInputs.reset();
});

