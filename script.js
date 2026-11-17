// HTML dagi input elementlarini va preview (ko'rsatish) joylarini tutib olamiz
const inputName = document.getElementById('inputName');
const inputTitle = document.getElementById('inputTitle');
const inputPhone = document.getElementById('inputPhone');
const inputEmail = document.getElementById('inputEmail');
const inputAbout = document.getElementById('inputAbout');

const previewName = document.getElementById('previewName');
const previewTitle = document.getElementById('previewTitle');
const previewPhone = document.getElementById('previewPhone');
const previewEmail = document.getElementById('previewEmail');
const previewAbout = document.getElementById('previewAbout');

// Har safar harf yozilganda ishlaydigan funksiya
function updateCV() {
    previewName.textContent = inputName.value || "Ismingiz";
    previewTitle.textContent = inputTitle.value || "Mutaxassisligingiz";
    previewPhone.textContent = inputPhone.value || "+998 ...";
    previewEmail.textContent = inputEmail.value || "email@gmail.com";
    previewAbout.textContent = inputAbout.value || "O'zingiz haqingizda yozing...";
}

// Inputlarga "input" hodisasini (event) ulab chiqamiz
inputName.addEventListener('input', updateCV);
inputTitle.addEventListener('input', updateCV);
inputPhone.addEventListener('input', updateCV);
inputEmail.addEventListener('input', updateCV);
inputAbout.addEventListener('input', updateCV);