"use strict";

//Efter man har sökt kan man ej trycka in på divarna
const wrapper = document.querySelector("wrapper");

const searchBar = document.getElementById("programmeSearch");
let programmeNames = PROGRAMMES;

//Sorterar alfabetiskt.
programmeNames.sort(function(a,b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()
    ) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()
    ) return 1;
  return 0;
});

//Sökfunktionen
searchBar.addEventListener('keyup', (e) => {
  wrapper.innerHTML = "";
  const searchString = e.target.value.toLowerCase();
  const filteredProgram = programmeNames.filter(programme => {
    return programme.name.toLowerCase().includes(searchString)
  });
  filteredProgram.forEach( programme => wrapper.append(programdiv(programme)));
  console.log(filteredProgram);
});

for(let i = 0; i < PROGRAMMES.length; i++) {
  wrapper.append(programdiv(PROGRAMMES[i]));
}

//Skapar divarna
function programdiv(data){
  let programDiven = document.createElement("div");
  programDiven.classList.add("programmeDiv");
  
  programDiven.innerHTML = `
  <div>${data.name}</div>

  <div class="programSideInfo"> 
      <img class="countryFlag" src="Images/">
      <div class="position" >
        <div> Land: </div>
        <div> Stad: </div>
      </div>
    </div>
  `;

  let infoAbout = document.createElement("div");
  infoAbout.classList.add("panel");

  let innerProgrammeDiv = document.createElement("div");
  innerProgrammeDiv.classList.add("programmeInfo");
  innerProgrammeDiv.innerHTML = `
    <div class="students">
      <div class="localS"> Local Students: ${data.localStudents}</div>
      <div class="exchangeS"> Exchange Students: ${data.exchangeStudents}</div>
    </div>
    <div class="grades">
      <div> Inträdesbetyg? </div>
      <div> Graduates </div>
    </div>
    <div class="reviewHeader"> Recensioner från tidigare studenter</div>
    <div class="reviews"> 
      review cards
    </div>
    `
  
  infoAbout.append(innerProgrammeDiv);
  wrapper.append(infoAbout);  

  return programDiven;
}


//Fixar sista diven
function lastdiv() {
  let infoAbout = document.createElement("div");
  infoAbout.classList.add("panel");

  infoAbout.innerHTML= `Information om program`

  wrapper.append(infoAbout);  
}
lastdiv();

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
