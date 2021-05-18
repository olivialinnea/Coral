"use strict";

//Efter man har sökt kan man ej trycka in på divarna
const wrapper = document.querySelector("wrapper");
let yearArray = [];
let D = new Date();
let thisYear = D.getFullYear();
console.log(thisYear);

for (let i = 0; i < 5; i++) {
  thisYear -=1;
  yearArray.push(thisYear);
}

yearArray.sort();


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
    `
  let gradesDiv = document.createElement("div");  
  let entryGradeDiv = document.createElement("div");
  let graduatesDiv = document.createElement("div");
  let yearDiv = document.createElement("div");
  let procentageDiv = document.createElement("div");
  graduatesDiv.classList.add("graduates");
  entryGradeDiv.classList.add("grades");
  gradesDiv.classList.add("gradesDiv");

  gradesDiv.append(entryGradeDiv, graduatesDiv);
  graduatesDiv.append(yearDiv, procentageDiv);

  let successRate = data.successRate;

  yearArray.forEach(function(year) {
    yearDiv.append(yearlyGrades(year))
  });

  successRate.forEach(function(rate) {
    procentageDiv.append(yearlyGrades(rate))
  });

  let reviewDiv = document.createElement("div");
  let reviewHead = document.createElement("div");
  let reviews = document.createElement("div");
  reviewHead.classList.add("reviewHeader");
  reviews.classList.add("reviews");
  reviewDiv.classList.add("reviewContent");

  reviewHead.textContent = "Reviews";

  reviewDiv.append(reviewHead, reviews);
  
  innerProgrammeDiv.append(gradesDiv, reviewDiv);

  infoAbout.append(innerProgrammeDiv);
  programDiven.append(infoAbout);  

  programDiven.addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = infoAbout;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  return programDiven;
}


// Fixar sista diven
function lastdiv() {
  let infoAbout = document.createElement("div");
  infoAbout.classList.add("panel");

  infoAbout.innerHTML= `Information om program`

  wrapper.append(infoAbout);  
}
lastdiv();


function yearlyGrades(obj){
  let div = document.createElement("div");

  div.textContent = `${obj}`;
  
  return div;
}