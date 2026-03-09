// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscriberForm");
  const messageArea = document.getElementById("messageArea");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    form.classList.add("was-validated");

    const isValid = form.checkValidity();

    if (!messageArea) return;

    if (!isValid) {
      messageArea.innerHTML = `
        <div class="alert alert-danger" role="alert">
          Please fill out all required fields correctly.
        </div>
      `;
      return; 
    }


    messageArea.innerHTML = `
      <div class="alert alert-success" role="alert">
        Success! Your registration was submitted.
      </div>
    `;

  });
});