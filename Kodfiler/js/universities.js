"use strict";

//Efter man har sökt kan man ej trycka in på divarna

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
    console.log(name);
    let universityDiv = document.createElement("div");
    universityDiv.innerHTML = `
    <div>${name}</div>
    `;
    universityDiv.classList.add("universityDiv");
    let infoAbout = document.createElement("div");
    infoAbout.innerHTML= `Information om Universitet`
    infoAbout.classList.add("panel");

    document.querySelector("wrapper").append(infoAbout);  
    document.querySelector("wrapper").append(universityDiv);    
};

function lastdiv() {
    infoAbout.innerHTML= `Information om Universitet`
    infoAbout.classList.add("panel");

    document.querySelector("wrapper").append(infoAbout);  
}

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

