"use strict";

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

//Efter man har sökt kan man ej trycka in på divarna

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
  
          /*let programdiv = PROGRAMMES.filter(program => UNIVERSITIES[i].id === program.universityID);
  
          let programmet = document.createElement("div");
          programmet.classList.add("program");
  
        for (let c = 0; c < programdiv.length; c++) {
          let oneProgram = document.createElement("div");
          oneProgram.append(programdiv[c].name);
          programmet.append(oneProgram);
        }
        document.getElementById(`${UNIVERSITIES[i].id}allProgrammes`).append(programmet); */
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

  let infoAbout = document.createElement("div");
  infoAbout.classList.add("panel");

  let programmeHeading = document.createElement("div");
  programmeHeading.innerHTML = `Program `;

  let allProgrammeList = document.createElement("div");

  let idDiv = document.createElement("div");

  allProgrammeList.append(idDiven);
  idDiven.id = data.id + "allProgrammes";
  console.log(data.id);
  allProgrammeList.classList.add("allProgrammes");
  

  infoAbout.append(programmeHeading);
  infoAbout.append(allProgrammeList);

  universityDiven.append(infoAbout);  

  universityDiven.addEventListener("click", function() {
    this.classList.toggle("active");
    
    let panel = infoAbout;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
    return universityDiven;
}

// //Fixar sista diven
// function lastdiv() {
//   let infoAbout = document.createElement("div");
//   infoAbout.classList.add("panel");

//   infoAbout.innerHTML= `Information om Universitet`

//   wrapper.append(infoAbout);  
// }
// lastdiv();



