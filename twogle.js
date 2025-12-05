let modebtn = document.querySelector('.fa-sun');
let body = document.querySelector("body")
currentMode = "light";


modebtn.addEventListener ("click", () =>{
  modebtn.classList.toggle("active");

  if (currentMode === "light"){
     currentMode = "dark";
       body.classList.remove("light"); // remove old class
       body.classList.add("dark"); // add new one
         modebtn.classList.remove("fa-sun");
        modebtn.classList.add("fa-moon");
    
  }else{
    currentMode = "light";
     body.classList.remove("dark"); // remove old class
    body.classList.add("light"); // add new one

    modebtn.classList.remove("fa-moon");
        modebtn.classList.add("fa-sun");
    

  }
console.log(currentMode);
});


