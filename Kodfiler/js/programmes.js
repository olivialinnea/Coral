"use strict";

//Efter man har sökt kan man ej trycka in på divarna
const wrapper = document.querySelector("wrapper");
let yearArray = [];
let D = new Date();
let thisYear = D.getFullYear();
let levelArray = [];

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

//Tömmer search bar när sidan laddas om.
function init() {
  searchBar.value = "";
}
window.onload = init;

for(let i = 0; i < PROGRAMMES.length; i++) {
  wrapper.append(programdiv(PROGRAMMES[i]));
}

//Skapar divarna
function programdiv(data){
  let programDiven = document.createElement("div");
  programDiven.classList.add("programmeDiv");

  const uni = UNIVERSITIES.find(university => data.universityID === university.id);
  const city = CITIES.find(cities => uni.cityID === cities.id);
  const country = COUNTRIES.find(countries => city.countryID === countries.id);

  let levelName = LEVELS.find(function (levelArray, index) {
    return index === data.level;
  });
  
  let left = document.createElement("div");
  let programName = document.createElement("div");
  let universityName = document.createElement("div");
  let flag = document.createElement("div");
  let level = document.createElement("div");
  let countryDiv = document.createElement("div");
  let cityDiv = document.createElement("div");
  let programSideInfo = document.createElement("div");
  let position = document.createElement("div");
  let visum = document.createElement("div");

  visum.classList.add("visa");
  position.classList.add("position");
  programSideInfo.classList.add("programSideInfo");
  universityName.classList.add("universityName");

  programDiven.append(left, programSideInfo);
  programSideInfo.append(flag, position);
  position.append(level, cityDiv, countryDiv, visum);
  left.append(programName, universityName);

  programName.innerText = `${data.name}`;
  universityName.innerHTML = `(${uni.name})`;
  cityDiv.innerHTML = `<p class="bold">Stad:</p> <p>${city.name}</p>`;
  countryDiv.innerHTML = `<p class="bold">Land:</p> <p>${country.name}</p>`;
  flag.innerHTML = `<img class="countryFlag" src="Images/${country.flag}">`
  
  level.innerHTML = `<p class="bold">Level:</p><p class="lvl">${levelName}</p>`;

  programDiven.addEventListener("click", function(event){
    event.stopPropagation();
    if (programDiven.classList.contains("active")){
      programDiven.classList.toggle("active");
    
      let info = document.querySelectorAll(".programInfo");

      for (let j = 0; j < info.length; j++){
        if (info[j].parentNode === programDiven){
          programDiven.removeChild(info[j]);
        }
      }
    } else {
      programDiven.append(programInfo(data));
      programDiven.classList.toggle("active");
    }
  });
  
  return programDiven;
}

function programInfo(data){
  let infoAbout = document.createElement("div");
  infoAbout.classList.add("programInfo");

  let innerProgrammeDiv = document.createElement("div");
  innerProgrammeDiv.classList.add("infoAbout");

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
  let successRate = data.successRate;
  let entryGrades = data.entryGrades;

  
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



  let reviewDiv = document.createElement("div");
  let reviewHead = document.createElement("div");
  let reviews = document.createElement("div");
  reviews.classList.add("reviews");

  const r = COMMENTS_PROGRAMME.filter(review => review.programmeID === data.id);

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
        <div class="t">Lärare: ${r[i].stars.teachers}/5</div>
        <div class="s">Kursare: ${r[i].stars.students}/5</div>
        <div class="c">Kursen: ${r[i].stars.courses}/5</div>
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

  reviewDiv.append(reviewHead, reviews);

  innerProgrammeDiv.append(headerContainer, gradesDiv, reviewDiv);

  infoAbout.append(innerProgrammeDiv);

  return infoAbout;
}


function yearlyAmount(year){
  let div = document.createElement("div");

  div.textContent = `${year}:`;
  
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
