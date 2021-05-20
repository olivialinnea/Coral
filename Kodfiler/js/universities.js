"use strict";

//Active class på universityDiv behövs pga margin

const wrapper = document.querySelector("wrapper");

const searchBar = document.getElementById("uniSearch");
let uniNames = UNIVERSITIES;

//Sorterar alfabetiskt
uniNames.sort(function(a,b) {
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
  const filteredUnis = uniNames.filter(university => {
    return university.name.toLowerCase().includes(searchString)
  });
  filteredUnis.forEach( uni => wrapper.append(universityDiv(uni)));
  console.log(filteredUnis);
});

//Appendar och skapar alla universitet osv.
for(let i = 0; i < UNIVERSITIES.length; i++) {
  wrapper.append(universityDiv(UNIVERSITIES[i]));
}

function universityDiv(data){
  let universityDiven = document.createElement("div");
  universityDiven.classList.add("universityDiv");
  
  universityDiven.innerHTML = `
  <div class="top"> 
    <div>${data.name}</div>

  <div class="universitySideInfo"> 
      <img class="countryFlag" src="Images/">
      <div class="position" >
        <div> Land: </div>
        <div> Stad: </div>
      </div>
    </div>
  </div>
  `; 

  universityDiven.addEventListener("click", function (event) {
    event.stopPropagation();

    if (universityDiven.classList.contains("active")) {
      universityDiven.classList.toggle("active");

      let info = document.querySelectorAll(".infoAbout");

      for (let ii = 0; ii < info.length; ii++) {
        // console.log(info[ii].parentNode);

        if (info[ii].parentNode == universityDiven) {
          universityDiven.removeChild(info[ii]);
        }
        
        
      }
    } else {
      universityDiven.append(infoDivUnder(data));
      universityDiven.classList.toggle("active");
    }
  });
    return universityDiven;
}

function infoDivUnder(data) {
  let infoAbout = document.createElement("div");
  infoAbout.classList.add("infoAbout");

  let programmeHeading = document.createElement("div");
  programmeHeading.classList.add("programmeHeading");
  programmeHeading.innerHTML = `Program `;

  let allProgrammeList = document.createElement("div");
  allProgrammeList.classList.add("allProgrammes");

  let idDiv = document.createElement("div");
  
  idDiv.id = data.id + "allProgrammes";
  
  allProgrammeList.append(idDiv);
  infoAbout.append(programmeHeading);
  infoAbout.append(allProgrammeList);

  let program = PROGRAMMES.filter(p => data.id === p.universityID);

  let pDiv = document.createElement("div");
  pDiv.classList.add("pDiv");

  for (let j = 0; j < program.length; j++) {
    let oneP = document.createElement("div");
    oneP.classList.add("programDiv");

    let programN = document.createElement("div");
    programN.classList.add("programN");
    programN.innerHTML = ` ${program[j].name} `;
    oneP.append(programN);
    pDiv.append(oneP);

    let idDiv = document.createElement("div");
    idDiv.classList.add("idDiv");
    idDiv.id = program[j].id + "programDiv";

    idDiv.innerHTML = `
    <div class="students">
      <div class="localS"> Local Students: ${program[j].localStudents}</div>
      <div class="exchanges"> Exchange Students: ${program[j].exchangeStudents}</div>
    </div>
    `;

    oneP.append(idDiv);
    infoAbout.append(pDiv);

    programN.addEventListener("click", function(event) {
      event.stopPropagation();

      if (idDiv.style.display === "none") {
        idDiv.style.display = "flex";
      } else {
        idDiv.style.display = "none";
      }
    });

  }

  return infoAbout;
}

