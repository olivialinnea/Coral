"use strict";

function programmeName(name){
    let programmeDiv = document.createElement("div");
    programmeDiv.innerHTML = `
    <div>${name}</div>
    `;
    programmeDiv.classList.add("programmeDiv");

    let infoAbout = document.createElement("div");
    infoAbout.innerHTML= `Information om program`
    infoAbout.classList.add("panel");
    document.querySelector("main").append(infoAbout);  
    document.querySelector("main").append(programmeDiv); 
};

for(let i = 0; i < PROGRAMMES.length; i++) {
    programmeName(PROGRAMMES[i].name) 
}


// Accordion
let acc = document.getElementsByClassName("programmeDiv");
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