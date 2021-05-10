"use strict";


function CountryName(name){
    let countryDiv = document.createElement("div");
    countryDiv.innerHTML = `
    <div>${name}</div>
    `;
    countryDiv.classList.add("countryDiv");


    let infoAbout = document.createElement("div");
    infoAbout.innerHTML= `Information om land`
    infoAbout.classList.add("panel");
    document.querySelector("main").append(infoAbout);  
    document.querySelector("main").append(countryDiv); 
};

for(let i = 0; i < COUNTRIES.length; i++) {
       CountryName(COUNTRIES[i].name) 
}

// Accordion
let acc = document.getElementsByClassName("countryDiv");
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