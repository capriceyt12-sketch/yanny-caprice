




  




document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
  
      const inputs = form.querySelectorAll("input[type='text'], textarea");
      let allFilled = true;
  
      inputs.forEach(input => {
        if (input.value.trim() === "") {
          input.style.borderColor = "red";
          allFilled = false;
        } else {
          input.style.borderColor = "black";
        }
      });
  
      if (allFilled) {
        alert("Merci ! Votre message a été envoyé avec succès.");
        form.reset();
      } else {
        alert("Veuillez remplir tous les champs avant d'envoyer.");
      }
    });
  });
  