"use strict";

const searchBar = document.getElementById("programmeSearch");
let programmeNames = PROGRAMMES;

searchBar.addEventListener('keyup', (e) => {
  document.querySelector("wrapper").innerHTML = "";
  const searchString = e.target.value.toLowerCase();
  const filteredUnis = programmeNames.filter(university => {
    return university.name.toLowerCase().includes(searchString)
  });
  filteredUnis.forEach( programme => programmeName(programme.name));
  console.log(filteredUnis);
});


let alphabeticalOrderArray = [];
 
function alphabeticalOrder() {
  for(let i = 0; i < PROGRAMMES.length; i++) {
    alphabeticalOrderArray.push((PROGRAMMES[i].name));
  }

  alphabeticalOrderArray.sort((a,b) => a > b);
 
  return alphabeticalOrderArray;
}
alphabeticalOrder();

function programmeName(name){
    let programmeDiv = document.createElement("div");
    programmeDiv.innerHTML = `
    <div>${name}</div>
    `;
    programmeDiv.classList.add("programmeDiv");

    let infoAbout = document.createElement("div");
    infoAbout.innerHTML= `Information om land`
    infoAbout.classList.add("panel");

    document.querySelector("wrapper").append(infoAbout);  
    document.querySelector("wrapper").append(programmeDiv);    
};

let uniquePrograms = alphabeticalOrderArray.filter((value, index) => {
  return alphabeticalOrderArray.indexOf(value) === index;
});

for(let i = 0; i < uniquePrograms.length; i++) {
    programmeName(uniquePrograms[i]);
}

// for(let i = 0; i < PROGRAMMES.length; i++) {
//     programmeName(PROGRAMMES[i].name);
// }


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
