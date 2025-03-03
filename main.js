
const sections = document.querySelectorAll('.TexBtn');
let actual = "";
sections.forEach((section) => {
  const responseId = section.getAttribute("value");
  
  const button = section.querySelector('.boton');
  
  section.addEventListener('click', () => {
   
    const answer = document.getElementById("Resp"+responseId);
 
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      button.querySelector("img").src = "/JS/faq-accordion-main/assets/images/icon-minus.svg";
      actual = responseId;
  
    } else {
      answer.style.display = "none";
      button.querySelector("img").src = "/JS/faq-accordion-main/assets/images/icon-plus.svg"; 

    }
    for(let i = 1; i < sections.length+1 ; i++){
      let resp = document.getElementById("Resp"+i.toString());
      let boton = document.getElementById("Btn"+i.toString());
      if(actual =! i.toString()){
        resp.style.display = "none"
        boton.src = "/JS/faq-accordion-main/assets/images/icon-minus.svg";
      }
      
    }
  });
});

