"use strict";

//Efter man har sökt kan man ej trycka in på divarna
const wrapper = document.querySelector("wrapper");
let yearArray = [];
let D = new Date();
let thisYear = D.getFullYear();

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

console.log(UNIVERSITIES)

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

// for(let i = 0; i < COMMENTS_PROGRAMME.length; i++) {
//   test(COMMENTS_PROGRAMME[i]);
// }

// function reviewCard(programid){

//   let programmeCard = COMMENTS_PROGRAMME.forEach(comment => {
//     if(comment.programmeID == programid) {
//       let card = document.createElement("div");
//       wrapper.append(card);
//       card.innerHTML = `
//     <div class="commentDate">
//       <div></div>
//     </div>
//     <div class="commentName">
//       <div>${programid.alias}</div>
//     </div>
//     <div class="commentContent">
//       <div class="stars">
//         <div>Teachers: </div>
//         <div>Students: </div>
//         <div>Course: </div>
//       </div>
//       <div>
//         <div class="textC">
//           <div>Omdöme:${programid.text}</div>
//         </div>
//       </div>
//     </div>
//   `
//   }
//   })
//   return programmeCard;
// }

//Skapar divarna
function programdiv(data){
  let programDiven = document.createElement("div");
  programDiven.classList.add("programmeDiv");

  const uni = UNIVERSITIES.find(university => data.universityID === university.id);
  const city = CITIES.find(cities => uni.cityID === cities.id);
  const country = COUNTRIES.find(countries => city.countryID === countries.id);
  // const comments = COMMENTS_PROGRAMME.find(comments => data.id === comments.id);
  const level = LEVELS.find(lvl => data.level === lvl.indexOf("Master"));


  programDiven.innerHTML = `
  <div>${data.name} (${uni.name})</div>
  <div class="programSideInfo"> 
      <img class="countryFlag" src="Images/${country.flag}">
      <div class="position" >
        <div> Level: ${level}</div>
        <div> Stad: ${city.name}</div>
        <div> Land: ${country.name}</div>
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
  reviewHead.classList.add("reviewHeader");
  reviewDiv.classList.add("reviewContent");

  reviewHead.textContent = "Omdömen från före detta studenter";

  reviewDiv.append(reviewHead, reviews);

  innerProgrammeDiv.append(headerContainer, gradesDiv, reviewDiv);

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
// function lastdiv() {
//   let infoAbout = document.createElement("div");
//   infoAbout.classList.add("panel");

//   infoAbout.innerHTML= `Information om program`

//   wrapper.append(infoAbout);  
// }
// lastdiv();

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

for(let i = 0; i < COMMENTS_PROGRAMME.length; i++) {
  reviewsCards(COMMENTS_PROGRAMME[i]);
}


function reviewsCards(e){
  let card = document.createElement("div");
  card.classList.add("reviewCard");
  wrapper.append(card);
      card.innerHTML = `
      <div class="commentDate">
        <div>${e.date.year}-${e.date.month}-${e.date.day}</div>
      </div>
      <div class="commentName">
        <div>${e.alias}</div>
      </div>
      <div class="commentContent">
        <div class="stars">
          <div>Teachers: ${e.stars.teachers}</div>
          <div>Students: ${e.stars.students}</div>
          <div>Course: ${e.stars.courses}</div>
        </div>
        <div class="textC">
            <p>Omdöme:${e.text}<p>
        </div>
        </div>
      </div>
      `
  return card;
}