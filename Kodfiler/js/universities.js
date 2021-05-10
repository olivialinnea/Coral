"use strict";

let alphabeticalOrderArray = [];

function alphabeticalOrder() {
  for(let i = 0; i < UNIVERSITIES.length; i++) {
    alphabeticalOrderArray.push((UNIVERSITIES[i].name));
  }

  alphabeticalOrderArray.sort((a,b) => a > b);
 
  return alphabeticalOrderArray;
}
alphabeticalOrder();

function universityName(name){
    let universityDiv = document.createElement("div");
    universityDiv.innerHTML = `
    <div>${name}</div>
    `;
    universityDiv.classList.add("universityDiv");
    let infoAbout = document.createElement("div");
    infoAbout.innerHTML= `Information om land`
    infoAbout.classList.add("panel");

    document.querySelector("wrapper").append(infoAbout);  
    document.querySelector("wrapper").append(universityDiv);    
};

for(let i = 0; i < alphabeticalOrderArray.length; i++) {
  universityName(alphabeticalOrderArray[i]);
}

// for(let i = 0; i < UNIVERSITIES.length; i++) {
//     universityName(UNIVERSITIES[i].name) 
// }

// Accordion
let acc = document.getElementsByClassName("universityDiv");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// Accordion