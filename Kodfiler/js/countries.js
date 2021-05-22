"use strict";
const wrapper = document.querySelector("wrapper");


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

  let lang = LANGUAGES.find(language => data.languageID === language.id);
  
  country.innerHTML = `
  <div class="imgTitle">
    <img class="normalImage" src="Images/${data.imagesNormal[0]}">
    <div class="countryNameTitle">${data.name}</div>
  </div>
  <div class="countrySideInfo"> 
    <img class="countryFlag" src="Images/${data.flag}">
    <div> Språk: ${lang.name} </div>
      <div id="visa"> Visum krävs: ${data.visa}</div>
    </div>
  </div>
  `;


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
  ` Städer`;

  infoAbout.append(cityHeading);

  let cityDiv = document.createElement("div");
  cityDiv.classList.add("cityDiv");
  cityDiv.innerHTML = `${city(data)}` 

  function city(data) {
    let city = CITIES.filter(city => data.id === city.countryID);

    let cityDiv = document.createElement("div");
    cityDiv.classList.add("cityDiv");

    for (let j = 0; j < city.length; j++) {
      let oneCity = document.createElement("div");
      oneCity.classList.add("oneCity");

      oneCity.innerHTML = `
      <div class="cityName">${city[j].name}</div>`;
      
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

  let cityHeading = document.createElement("div");
  cityHeading.classList.add("cityHeading")
  cityHeading.innerHTML = `Universitet `;

  let infoAboutCity = document.createElement("div");
  infoAboutCity.classList.add("infoAboutCity");

  infoAboutCity.innerHTML = `
  <div class="cityText">${data.text}</div>
  <div><img class="normalImageCity" src="Images/${data.imagesNormal[0]}"></div>
  `

  let middleCityDiv = document.createElement("div");
  middleCityDiv.classList.add("middleCityDiv");
  infoAboutCity.append(middleCityDiv);

  let entertainment = document.createElement("div");
  entertainment.classList.add("entertainmentPlaces");
  middleCityDiv.append(entertainment);

  ENTERTAINMENT_PLACES.forEach(function(p) {
    if (p.cityID === data.id){
      entertainment.append(entertainmentPlace(p.name))
    }
  });

  let idDiven = document.createElement("div");
  idDiven.classList.add("idDiven");

  infoAboutuni.append(infoAboutCity);
  infoAboutuni.append(cityHeading);

  infoAboutCity.append(idDiven);

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

    universityName.addEventListener("click", function(event){
      event.stopPropagation();
      if (idDiven.style.display === "none") {
        idDiven.style.display = "flex";
      } else {
        idDiven.style.display = "none";
      }
    });
  }
  return infoAboutuni;
}

function entertainmentPlace(place){
  let div = document.createElement("div");

  div.textContent = `• ${place}`;
  
  return div;
}
    
// JONNAS KOD
                /*let university = UNIVERSITIES.filter(university => data.id === university.cityID);

                let universityDiv = document.createElement("div");
                universityDiv.classList.add("universityDiv");
                
                for (let jj = 0; jj < university.length; jj++) {
                  let oneUniversity = document.createElement("div");
                  oneUniversity.classList.add("oneCity");
                  
                  let UniversityName = document.createElement("div");
                  UniversityName.innerHTML = `${university[jj].name}`;
                  oneUniversity.append(UniversityName);
                  universityDiv.append(oneUniversity);
                  
                  let idDiven = document.createElement("div");
                  idDiven.classList.add("idDiv");
                  

                  idDiven.id = university[jj].id + "universityUniversity";

                  idDiven.innerHTML = `
                hej`;

                  oneUniversity.append(idDiven);
                  infoAbout.append(universityDiv);

                  UniversityName.addEventListener("click", function(event){
                    event.stopPropagation();
                    if (idDiven.style.display === "none") {
                      idDiven.style.display = "flex";
                    } else {
                      idDiven.style.display = "none";
                    }
                  });
                }
                /*let enterplace = ENTERTAINMENT_PLACES.filter(place => CITIES.id === place.cityID);
                  let placeDiv = document.createElement("div");
                  placeDiv.classList.add("placeDiv");

                  for (let k = 0; k < enterplace.length; k++){
                    let onePlace = document.createElement("div");
                    onePlace.classList.add("onePlace");

                    let placeName = document.createElement("div");
                    placeName.innerHTML = `${enterplace[j].name}`;
                    onePlace.append(placeName);
                    placeDiv.append(onePlace);

                    let idDivPlace = document.createElement("div");
                    idDivPlace.classList.add("idDivPlace");

                    idDivPlace.id = enterplace[k] + "enterplace";

                    idDivPlace.innerHTML = `
                    <div>${enterplace[k].name}</div>
                    `
                    onePlace.append(idDivPlace);
                    oneCity.append(placeDiv);
                    
                  }
              /*
                  document.querySelector(".country").addEventListener("click", function() {
                    this.classList.toggle("active");
                    
                    let panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                      panel.style.display = "none";
                    } else {
                      panel.style.display = "block";
                    }
                  });
                  wrapper.append(infoAbout);
              }
                document.querySelector(".country").addEventListener("click", infoInfo(COUNTRIES[i]));
                  // Språken
                //document.querySelector(".cityHeading").addEventListener("click", infoinfoinfo(COUNTRIES[i]));
                    
                    let lang = LANGUAGES.find(Language => COUNTRIES[i].languageID === Language.id);
                    let languageInfo = document.createElement("div");
                    languageInfo.innerHTML =`
                    Språk: ${lang.name}
                    `
                    document.getElementById(`${COUNTRIES[i].id}langVisa`).append(languageInfo);
                        
                    
                
                        
                
                      
                //data.id börjar på 1 medans ${COUNTRIES[i].id}allCities börjar på 0
                  //country_div.append(cityDiv);
                  
                  document.getElementById(`${COUNTRIES[i].id}allCities`).append(cityDiv);
                    
                  let universitet = UNIVERSITIES.filter(program => CITIES[i].id === program.cityID);
                  
                  let universitetDiv = document.createElement("div");
                  universitetDiv.classList.add("universitetDiv");

                  for (let k = 0; k < universitet.length; k++) {
                    let oneUniversitet = document.createElement("div");
                    oneUniversitet.append(universitet[k].name);
                    universitetDiv.append(oneUniversitet);
                    oneUniversitet.id = universitet[k].id + "oneUniversitet";

                  }
                  
                  //cityDiv.append(universitetDiv);
                // document.getElementById(`${COUNTRIES[i].id}allProgramList`).append(universitetDiv);

                



              /*
              function infoinfoinfo(data) {
                let infoAboutp = document.createElement("div");
                infoAboutp.classList.add("panels");    
                
                let programHeading = document.createElement("div");
                programHeading.innerHTML = 
                `<div class="programHeading"> Universitet </div>`;
                
                let allProgramList = document.createElement("div");
                let idDiven = document.createElement("div");
                
                allProgramList.append(idDiven);
                idDiven.id = data.id + "allProgramList";
                allProgramList.classList.add("allProgramList");
                
                infoAboutp.append(programHeading);
                infoAboutp.append(allProgramList);
                
                
                  
              wrapper.append(infoAboutp);
              }*/
              /*document.querySelector(``).addEventListener("click", function() {
              let infoAboutp = document.createElement("div");
              infoAboutp.classList.add("panels");    

              let programHeading = document.createElement("div");
              programHeading.innerHTML = 
              `<div class="programHeading"> program </div>`;

              let allProgramList = document.createElement("div");
              let idDiven = document.createElement("div");

              infoAboutp.append(programHeading);
              infoAboutp.append(allProgramList);
              allCitiesList.append(idDiven);
              console.log(infoAboutp);
              idDiven.id = data.id + "allCities";
              console.log(data.id);
              allProgramList.classList.add("allCities");
              wrapper.append(infoAboutp);
              return infoAboutp;
              });


              */
