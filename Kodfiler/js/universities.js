"use strict";

//Efter man har sökt kan man ej trycka in på divarna

const wrapper = document.querySelector("wrapper");
let alphabeticalOrderArray = [];

const searchBar = document.getElementById("uniSearch");
let uniNames = UNIVERSITIES;

searchBar.addEventListener('keyup', (e) => {
  document.querySelector("wrapper").innerHTML = "";
  const searchString = e.target.value.toLowerCase();
  const filteredUnis = uniNames.filter(university => {
    return university.name.toLowerCase().includes(searchString)
  });
  filteredUnis.forEach( uni => universityName(uni.name));
  console.log(filteredUnis);
});

function alphabeticalOrder() {
  for(let i = 0; i < UNIVERSITIES.length; i++) {
    alphabeticalOrderArray.push((UNIVERSITIES[i].name));
  }

  alphabeticalOrderArray.sort((a,b) => a > b);
 
  return alphabeticalOrderArray;
}
alphabeticalOrder();

for(let i = 0; i < alphabeticalOrderArray.length; i++) {
  wrapper.append(universityName(alphabeticalOrderArray[i]));
}

function universityName(name){
    let universityDiv = document.createElement("div");
    universityDiv.classList.add("universityDiv");

    universityDiv.innerHTML = `
    <div>${name}</div>
    `;
    
    let infoAbout = document.createElement("div");
    infoAbout.classList.add("panel");

    infoAbout.innerHTML= `Information om Universitet`

    document.querySelector("wrapper").append(infoAbout);  
    
    return universityDiv;
};

function lastdiv() {
  let infoAbout = document.createElement("div");
  infoAbout.classList.add("panel");

  infoAbout.innerHTML= `Information om Universitet`

  wrapper.append(infoAbout);  
}
lastdiv();

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

