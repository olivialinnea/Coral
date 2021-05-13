"use strict";

//Efter man har sökt kan man ej trycka in på divarna

const wrapper = document.querySelector("wrapper");

const searchBar = document.getElementById("uniSearch");
let uniNames = UNIVERSITIES;

searchBar.addEventListener('keyup', (e) => {
  wrapper.innerHTML = "";
  const searchString = e.target.value.toLowerCase();
  const filteredUnis = uniNames.filter(university => {
    return university.name.toLowerCase().includes(searchString)
  });
  filteredUnis.forEach( uni => wrapper.append(universityDiv(uni)));
  console.log(filteredUnis);
});

// let alphabeticalOrderArray = [];

// function alphabeticalOrder() {
//   for(let i = 0; i < UNIVERSITIES.length; i++) {
//     alphabeticalOrderArray.push((UNIVERSITIES[i].name));
//   }

//   alphabeticalOrderArray.sort((a,b) => a > b);
 
//   return alphabeticalOrderArray;
// }
// alphabeticalOrder(); 


for(let i = 0; i < UNIVERSITIES.length; i++) {
  wrapper.append(universityDiv(UNIVERSITIES[i]));
}

function universityDiv(data){
  let universityDiven = document.createElement("div");
  universityDiven.classList.add("universityDiv");
  
  universityDiven.innerHTML = `
  <div>${data.name}</div>
  `;

  let infoAbout = document.createElement("div");
  infoAbout.classList.add("panel");

  infoAbout.innerHTML= `Information om Universitet`

  wrapper.append(infoAbout);  

  return universityDiven;
}

// for(let i = 0; i < alphabeticalOrderArray.length; i++) {
//   universityName(alphabeticalOrderArray[i]);
// }


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

