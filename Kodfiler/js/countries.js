"use strict";
const wrapper = document.querySelector("wrapper");

let yearArray = [];
let D = new Date();
let thisYear = D.getFullYear();

for (let i = 0; i < 5; i++) {
  thisYear -=1;
  yearArray.push(thisYear);
}

yearArray.sort();

//Sorterar alla länder alfabetiskt
COUNTRIES.sort(function(a,b) {
  if (a.name.toLowerCase() < b.name.toLowerCase()
    ) return -1;
  if (a.name.toLowerCase() > b.name.toLowerCase()
    ) return 1;
  return 0;
});
 
    // Skapar länder
for(let i = 0; i < COUNTRIES.length; i++) {
    wrapper.append(countryDiv(COUNTRIES[i]));
  }
  
function countryDiv(data){
  let country = document.createElement("div");
  country.classList.add("country");
  wrapper.append(country);

  let lang = LANGUAGES.find(language => data.languageID === language.id);

  let imgTitle = document.createElement("div");
  let normalImage = document.createElement("div");
  let countryNameTitle = document.createElement("div");
  let countrySideInfo = document.createElement("div");
  let countryFlag = document.createElement("div");
  let languageVisaDiv = document.createElement("div");
  let visaDiv = document.createElement("div");

  visaDiv.classList.add("visa");
  normalImage.classList.add("normalImage");
  countryNameTitle.classList.add("countryNameTitle");
  countrySideInfo.classList.add("countrySideInfo");
  countryFlag.classList.add("countryFlag");
  visaDiv.classList.add("visaDiv");
  imgTitle.classList.add("imgTitle");
  languageVisaDiv.classList.add("languageVisaDiv");
  
  countryNameTitle.innerText = `${data.name}`;
  normalImage.innerHTML = `<img class="normalImage" src="Images/${data.imagesNormal[0]}">`;
  countryFlag.innerHTML = `<img class="countryFlag" src="Images/${data.flag}">`;
  languageVisaDiv.innerHTML = `<p class="bold">Språk:</p><p>${lang.name}</p> <p class="bold">Visum krävs:</p><p>${visa(data)}</p>`;

  country.append(imgTitle, countrySideInfo);
  imgTitle.append(normalImage, countryNameTitle);
  countrySideInfo.append(countryFlag, languageVisaDiv, visaDiv)

  country.addEventListener("click", function(event) {
    event.stopPropagation();
    if (country.classList.contains("active")){
    country.classList.toggle("active");
    
    let info = document.querySelectorAll(".infoAbout");

    for(let j = 0; j < info.length; j++){
      if (info[j].parentNode === country) {
        country.removeChild(info[j]);
      }
    }
  } else {
      country.append(infoInfo(data));
      country.classList.toggle("active");
    }

  });

return country;
}

function infoInfo(data) {
  let infoAbout = document.createElement("div");
  infoAbout.classList.add("infoAbout");    

  let cityHeading = document.createElement("div");
  cityHeading.classList.add("cityHeading");
  cityHeading.innerHTML = 
  `Städer`;

  infoAbout.append(cityHeading);

  city(data);

  function city(data) {
    let city = CITIES.filter(city => data.id === city.countryID);

    let cityDiv = document.createElement("div");
    cityDiv.classList.add("cityDiv");

    for (let j = 0; j < city.length; j++) {
      let oneCity = document.createElement("div");
      oneCity.classList.add("oneCity");

      oneCity.innerHTML = `
      <div class="cityNameAndSun">
        <div class="cityName">${city[j].name}</div>
        <div class="sunWrapper">
          <div class="sunSymbol">
            <img class="sun" src="symbols/sun.png">
          </div>
          <div class="sunnyDays">Antal soldagar: ${city[j].sun}</div>
        </div>
      </div>`;
      
      oneCity.addEventListener("click", function(event) {
        event.stopPropagation();

        if (oneCity.classList.contains("active")){
          oneCity.classList.toggle("active");
        
        let info = document.querySelectorAll(".infoAboutuni");
    
        for(let j = 0; j < info.length; j++){
          if (info[j].parentNode === oneCity) {
            oneCity.removeChild(info[j]);
          }
        }
        } else {
        oneCity.append(universityDiven(city[j]));
        oneCity.classList.toggle("active");
        }
      });

      cityDiv.append(oneCity);
      infoAbout.append(cityDiv);
    }
  }
  return infoAbout;
}

function universityDiven(data) {
  let infoAboutuni = document.createElement("div");
  infoAboutuni.classList.add("infoAboutuni");    

  let uniHeading = document.createElement("div");
  uniHeading.classList.add("uniHeading")
  uniHeading.innerHTML = `Universitet `;

  let infoAboutCity = document.createElement("div");
  infoAboutCity.classList.add("infoAboutCity");

  infoAboutCity.innerHTML = `
  <div class="cityText">${data.text}</div>
  `

  let middleCityDiv = document.createElement("div");
  middleCityDiv.classList.add("middleCityDiv");
  infoAboutCity.append(middleCityDiv);

  let entertainment = document.createElement("div");
  entertainment.classList.add("entertainment");
  middleCityDiv.append(entertainment);

  let cityImageDiv = document.createElement("div");
  cityImageDiv.classList.add("cityImageDiv");
  middleCityDiv.append(cityImageDiv);

  let cityImage = document.createElement("img");
  cityImage.src = `Images/${data.imagesNormal[0]}`
  cityImage.classList.add("cityImage");
  cityImageDiv.append(cityImage);

  let entertainmentHeading = document.createElement("div");
  entertainmentHeading.classList.add("entertainmentHeading");
  entertainmentHeading.textContent = "Uteliv"
  entertainment.append(entertainmentHeading)

  let entertainmentPlaces = document.createElement("div");
  entertainmentPlaces.classList.add("entertainmentPlaces");
  entertainment.append(entertainmentPlaces);

  ENTERTAINMENT_PLACES.forEach(function(p) {
    if (p.cityID === data.id){
      entertainmentPlaces.append(entertainmentPlace(p.name))
    }
  });

  let idDiven = document.createElement("div");
  idDiven.classList.add("idDiven");

  infoAboutuni.append(uniHeading);
  infoAboutCity.append(idDiven);

  let reviewDiv = document.createElement("div");
  let reviewHead = document.createElement("div");
  let reviews = document.createElement("div");
  reviews.classList.add("reviews");

  const r = COMMENTS_CITY.filter(review => review.cityID === data.id);

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
        <div class="t">Uteliv: ${r[i].stars.out}/5</div>
        <div class="s">Mat: ${r[i].stars.food}/5</div>
        <div class="c">Boende: ${r[i].stars.accomodation}/5</div>
      </div>

        <div class="textC">
          <p class"omdomen">Omdöme:</p>
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

  infoAboutCity.append(reviewDiv);

  let university = UNIVERSITIES.filter(university => data.id === university.cityID);

  let universityDiv = document.createElement("div");
  universityDiv.classList.add("universityDiv");

  for (let jj = 0; jj < university.length; jj++) {
    let oneUniversity = document.createElement("div");
    oneUniversity.classList.add("oneUniversity");

    let universityName = document.createElement("div");
    universityName.innerHTML = `${university[jj].name}`;
    oneUniversity.append(universityName);
    universityDiv.append(oneUniversity);

    idDiven.id = university[jj].id + "University";
    infoAboutuni.append(oneUniversity);
    oneUniversity.append(idDiven);   

    oneUniversity.addEventListener("click", function(event){
      event.stopPropagation();
      if (oneUniversity.classList.contains("active")){
        oneUniversity.classList.toggle("active");
        
        let info = document.querySelectorAll(".infoUni");
    
        for(let j = 0; j < info.length; j++){
          if (info[j].parentNode === oneUniversity) {
            oneUniversity.removeChild(info[j]);
          }
        }
      } else {
        oneUniversity.append(infoAboutUni(university[jj]));
        oneUniversity.classList.toggle("active");
        }
    });
  }
  return infoAboutuni;
}

function infoAboutUni(data) {
  let infoUni = document.createElement("div");
  infoUni.classList.add("infoUni");

  let programmeHeading = document.createElement("div");
  programmeHeading.classList.add("programmeHeading");
  programmeHeading.innerHTML = `Program `;

  infoUni.append(programmeHeading);

  let program = PROGRAMMES.filter(p => data.id === p.universityID);

  let programDiv = document.createElement("div");
  programDiv.classList.add("programDiv");

  for (let j = 0; j < program.length; j++) {
    let oneProgram = document.createElement("div");
    oneProgram.classList.add("oneProgram");

    oneProgram.innerHTML = `
    <div class="programName">${program[j].name}</div>`;

    let levelName = LEVELS.find(function (levelArray, index) {
      return index === program[j].level;
    });

    let sideInfo = document.createElement("div");
    sideInfo.classList.add("sideInfo");
    sideInfo.innerHTML = `<div class="bold">Level:</div><div class="lvl">${levelName}</div>`;
    oneProgram.append(sideInfo);
    
    oneProgram.addEventListener("click", function(event) {
      event.stopPropagation();

      if (oneProgram.classList.contains("active")){
        oneProgram.classList.toggle("active");
      
        let info = document.querySelectorAll(".programInfo");
    
        for(let j = 0; j < info.length; j++){
          if (info[j].parentNode === oneProgram) {
            oneProgram.removeChild(info[j]);
          }
        }
      } else {
        oneProgram.append(programInfo(program[j]));
        oneProgram.classList.toggle("active");
      }
    });
    programDiv.append(oneProgram);
    infoUni.append(programDiv);
  }
  return infoUni;
}

function programInfo(data) {
  let programInfo = document.createElement("div");
  programInfo.classList.add("programInfo");

  let students = document.createElement("div");
  students.classList.add("students");
  students.innerHTML =`
    <div class="localS"> Local Students: ${data.localStudents}</div>
    <div class="exchangeS"> Exchange Students: ${data.exchangeStudents}</div>
  `;
  programInfo.append(students);

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
        <div class="commentName">${r[i].alias}</div>

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
  programInfo.append(headerContainer, gradesDiv, reviewDiv);

  return programInfo;
}

function entertainmentPlace(place){
  let div = document.createElement("div");
  div.classList.add("entPlace");

  div.textContent = `• ${place}`;
  
  return div;
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

function visa(data) {
  if (data.visa == false) {
   return "Nej"
 } else {
   return "Ja"
 }
}

