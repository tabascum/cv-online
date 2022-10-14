//theme swich

/* function switchTheme() {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
}

document.getElementById("switch").addEventListener("click", switchTheme); */

//modal / dialog open and close functions

const button = document.querySelector("#open-dialog");
const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#close-dialog");

button.onclick = () => modal.showModal();

closeModal.onclick = () => modal.close();
