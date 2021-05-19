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
  
  document.querySelector(".universityDiv").addEventListener("click", infoDivUnder(UNIVERSITIES[i]));

  let program = PROGRAMMES.filter(p => UNIVERSITIES[i].id === p.universityID);

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
      

      let all2 = document.querySelectorAll(".programN");
          for (let ii = 0; ii < all2.length; ii++) {
            all2[ii].addEventListener("click", function() {
              if (idDiv.style.display === "none") {
                idDiv.style.display = "flex";
              } else {
                idDiv.style.display = "none";
              }
             })
          }

          oneP.append(idDiv);
    }


    
    
    document.getElementById(`${UNIVERSITIES[i].id}allProgrammes`).append(pDiv);
  
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

  let all = document.querySelectorAll(".universityDiv");
  for (let i = 0; i < all.length; i++) {
     all[i].addEventListener("click", function() {

      if (!all[i].classList.contains(`active`)) {
        all[i].classList.add(`active`);
      } else if (this.classList.contains(`active`)) {
        all[i].classList.remove(`active`);
      }

      //  all[i].classList.toggle("active");
        if (infoAbout.style.display === "flex") {
          infoAbout.style.display = "none";
        } else {
          infoAbout.style.display = "flex";
        }
   })
  }

  wrapper.append(infoAbout);  


      return infoAbout;
}


// function pDiv(params) {
  
// }