const button = document.querySelector("#open-dialog");
const modal = document.querySelector("dialog");
const closeModal = document.querySelector("#close-dialog");

button.onclick = () => modal.showModal();

closeModal.onclick = () => modal.close();
