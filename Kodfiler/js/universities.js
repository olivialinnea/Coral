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
}

function universityDiv(data){
  let universityDiven = document.createElement("div");
  universityDiven.classList.add("universityDiv");
  
  universityDiven.innerHTML = `
  <div>${data.name}</div>

  <div class="universitySideInfo"> 
      <img class="countryFlag" src="Images/">
      <div class="position" >
        <div> Land: </div>
        <div> Stad: </div>
      </div>
    </div>
  `;

  let infoAbout = document.createElement("div");
  infoAbout.classList.add("panel");

  infoAbout.innerHTML= `Information om Universitet`

  wrapper.append(infoAbout);  

  universityDiven.addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
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



