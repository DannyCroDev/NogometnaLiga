import { saveAdminAcc } from './database.js';

const adminInputs = document.getElementById('adminInputs');


adminInputs.addEventListener("submit", (e) => {
  e.preventDefault();
  const admin_username = document.getElementById('admin_username').value;
  const admin_password = document.getElementById('admin_password').value;


  saveAdminAcc(admin_username, admin_password)
  .then(() => {
    window.location.href = 'organizatorDashboard.html';
    adminInputs.reset();
  })
  .catch((error) => {
    console.error("Error saving data to the database:", error);
  });
});

