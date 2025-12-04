let modebtn = document.querySelector('.circ');
let body = document.querySelector("body")
currentMode = "light";


modebtn.addEventListener ("click", () =>{
  modebtn.classList.toggle("active");

  if (currentMode === "light"){
     currentMode = "dark";
       body.classList.remove("light"); // remove old class
       body.classList.add("dark"); // add new one
    
  }else{
    currentMode = "light";
     body.classList.remove("dark"); // remove old class
    body.classList.add("light"); // add new one
    

  }
console.log(currentMode);
});



// let modebtn = document.querySelector('.circ');
// let body = document.querySelector("body")
// currentMode = "light";


// modebtn.addEventListener ("click", () =>{
//   modebtn.classList.toggle("active");

//   if (currentMode === "light"){
//      currentMode = "dark";
//        body.classList.remove("light"); // remove old class
//        body.classList.add("dark"); // add new one
    
//   }else{
//     currentMode = "light";
//      body.classList.remove("dark"); // remove old class
//     body.classList.add("light"); // add new one
    

//   }
// console.log(currentMode);
// });

