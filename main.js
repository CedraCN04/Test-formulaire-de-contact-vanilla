// Récupération des éléments du DOM de manière globale

const form = document.getElementById("contact-form");
const mailInput = document.getElementById("input-mail");
const passwordInput = document.getElementById("input-password");
const submitButton = document.getElementById("submit-button");
const errorMail = document.getElementById("error-mail");
const errorPassword = document.getElementById("error-password");

mailInput.addEventListener(
  "input",
  (e) => {
    if (mailInput.validity.valid) {
      // Réinitialisation du message d'erreur
      errorMail.innerHTML = "";
      errorMail.className = "error-mail";
    }
  },
  false
);
