
const sections = document.querySelectorAll('.TexBtn');

sections.forEach((section) => {
  const responseId = section.getAttribute("value");

  const button = section.querySelector('.boton');
  
  section.addEventListener('click', () => {
   
    const answer = document.getElementById("Resp"+responseId);
    
    if (answer.style.display === "one" || answer.style.display === "") {
      answer.style.display = "block";
      button.querySelector("img").src = "/JS/faq-accordion-main/assets/images/icon-minus.svg";
    } else {
      answer.style.display = "none";
      button.querySelector("img").src = "/JS/faq-accordion-main/assets/images/icon-plus.svg";  // Restaurar el icono cuando se contrae
    }
  });
});