"use strict";

//Efter man har sökt kan man ej trycka in på divarna

const searchBar = document.getElementById("programmeSearch");
let programmeNames = PROGRAMMES;
const wrapper = document.querySelector("wrapper");

searchBar.addEventListener('keyup', (e) => {
  wrapper.innerHTML = "";
  const searchString = e.target.value.toLowerCase();
  const filteredProgram = programmeNames.filter(programme => {
    return programme.name.toLowerCase().includes(searchString)
  });
  filteredProgram.forEach( programme => wrapper.append(programdiv(programme)));
  console.log(filteredProgram);
});

//let alphabeticalOrderArray = [];

/*function alphabeticalOrder() {
  for(let i = 0; i < PROGRAMMES.length; i++) {
    alphabeticalOrderArray.push((PROGRAMMES[i].name));
  }

  alphabeticalOrderArray.sort((a,b) => a > b);
 
  return alphabeticalOrderArray;
}
alphabeticalOrder(); */

/*function programmeName(name){
    let programmeDiv = document.createElement("div");
    programmeDiv.innerHTML = `
    <div>${name}</div>
    `;
    console.log(name);
    programmeDiv.classList.add("programmeDiv");

    let infoAbout = document.createElement("div");
    infoAbout.innerHTML= `Information om land`
    infoAbout.classList.add("panel");

    let innerProgrammeDiv = document.createElement("div");
    innerProgrammeDiv.classList.add("programmeInfo");
    innerProgrammeDiv.innerHTML = `
      <div>
        <div class="localS">Local Students:${name.localStudents}</div>
        <div class="exchangeS">Exchange Students:</div>
      </div>
      <div></div>
      <div></div>
      `

    document.querySelector("wrapper").append(infoAbout);  
    document.querySelector("wrapper").append(programmeDiv); 
    infoAbout.append(innerProgrammeDiv);
}; */

// let uniquePrograms = programmeNames.filter((value, index) => {
//   return programmeNames.indexOf(value) === index;
// });

// for(let i = 0; i < uniquePrograms.length; i++) {
//     programdiv(uniquePrograms[i]);
// }

// for(let i = 0; i < PROGRAMMES.length; i++) {
//     programmeName(PROGRAMMES[i].name);
// }


for(let i = 0; i < PROGRAMMES.length; i++) {
  wrapper.append(programdiv(PROGRAMMES[i]));
}

function programdiv(data){
  let programDiven = document.createElement("div");
  programDiven.classList.add("programmeDiv");
  
  
  programDiven.innerHTML = `
  <div>${data.name}</div>
  `;

  return programDiven;
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
