"use strict";

//Active class på universityDiv behövs pga margin

const wrapper = document.querySelector("wrapper");

let yearArray = [];
let D = new Date();
let thisYear = D.getFullYear();

for (let i = 0; i < 5; i++) {
  thisYear -=1;
  yearArray.push(thisYear);
}

yearArray.sort();

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

//Tömmer search bar när sidan laddas om.
function init() {
  searchBar.value = "";
}
window.onload = init;

//Appendar och skapar alla universitet osv.
for(let i = 0; i < UNIVERSITIES.length; i++) {
  wrapper.append(universityDiv(UNIVERSITIES[i]));
}

function universityDiv(data){
  let universityDiven = document.createElement("div");
  universityDiven.classList.add("universityDiv");

  const city = CITIES.find(cities => data.cityID === cities.id);
  const c = COUNTRIES.find(function (c) {
    if (city.countryID === c.id) {
      let b = CITIES.find(function (city) {
        if (data.cityID === city.id) {
          return city;
        }
      });
      return b;
    }
  });
  
  universityDiven.innerHTML = `
  <div class="top"> 
    <div>${data.name}</div>

  <div class="universitySideInfo"> 
      <img class="countryFlag" src="Images/${c.flag}">
      <div class="position" >
        <div> Land: ${c.name} </div>
        <div> Stad: ${city.name} </div>
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

  infoAbout.append(programmeHeading);

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

    let gradesDiv = document.createElement("div");  
    let entryGradeDiv = document.createElement("div");
    let graduatesDiv = document.createElement("div");
    let yearDiv = document.createElement("div");
    let procentageDiv = document.createElement("div");
    let graduatesHead = document.createElement("div");
    let entryHead = document.createElement("div");
    let headerContainer = document.createElement("div");
    let entryDiv = document.createElement("div");
    let entryYearDiv = document.createElement("div");
    
    graduatesHead.classList.add("graduatesHead");
    graduatesDiv.classList.add("graduates");
    entryGradeDiv.classList.add("grades");
    gradesDiv.classList.add("gradesDiv");
    entryHead.classList.add("entryHead");
    entryDiv.classList.add("entryDiv");
    entryYearDiv.classList.add("entryYearDiv");
    headerContainer.classList.add("headerContainer");
  
    headerContainer.append(entryHead, graduatesHead);
    gradesDiv.append(entryGradeDiv, graduatesDiv);
    graduatesDiv.append(yearDiv, procentageDiv);
    entryGradeDiv.append(entryYearDiv, entryDiv);
  
    entryHead.textContent = "Intagningsbetyg"
    graduatesHead.textContent = "Antal examinerade"
    let successRate = program[j].successRate;
    let entryGrades = program[j].entryGrades;
    
  let reviewDiv = document.createElement("div");
  let reviewHead = document.createElement("div");
  let reviews = document.createElement("div");
  reviews.classList.add("reviews");

const r = COMMENTS_PROGRAMME.filter(review => review.programmeID === program[j].id);

for (let i = 0; i < r.length; i++) {
  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML= `
    <div> 
      <div class="commentName">
        ${r[i].alias}
      </div>

      <div class="commentDate">
        ${r[i].date.year}-${r[i].date.month}-${r[i].date.day}
      </div>
    </div>
    
    <div class="commentContent">

      <div class="stars">
        <div class="t">Teachers: ${r[i].stars.teachers}/5</div>
        <div class="s">Students: ${r[i].stars.students}/5</div>
        <div class="c">Course: ${r[i].stars.courses}/5</div>
      </div>

        <div class="textC">
          <p>Omdöme:</p>
          <p>${r[i].text}<p>
        </div>
    </div>
`

  reviews.append(card);
  }

  reviewHead.classList.add("reviewHeader");
  reviewDiv.classList.add("reviewContent");

  reviewHead.textContent = "Omdömen från före detta studenter";
  
    yearArray.forEach(function(year) {
      yearDiv.append(yearlyAmount(year))
      entryYearDiv.append(yearlyAmount(year))
    });
  
    successRate.forEach(function(rate) {
      procentageDiv.append(procentageKey(rate))
    });
    
    entryGrades.forEach(function(grade) {
      entryDiv.append(gradesKey(grade))
    });

    reviewDiv.append(reviewHead, reviews);
    idDiv.append(headerContainer, gradesDiv, reviewDiv);

  }

  return infoAbout;
}

function yearlyAmount(year){
  let div = document.createElement("div");

  div.textContent = `${year}`;
  
  return div;
}

function procentageKey(key){
  let div = document.createElement("div");

  div.textContent = `${key}%`;
  
  return div;
}

function gradesKey(key){
  let div = document.createElement("div");

  div.textContent = `${key}`;
  
  return div;
}

