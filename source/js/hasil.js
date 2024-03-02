const hasil = JSON.parse(sessionStorage.getItem('nilai'));
const name_user = JSON.parse(sessionStorage.getItem('username'));
document.querySelector(".hasil").textContent = hasil;
document.querySelector(".user").textContent = `Halo ${name_user} terimakasih
telah mengisi quiz`;