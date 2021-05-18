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
    let country_div = CountryDiv(COUNTRIES[i]);
    wrapper.append(country_div);

    // Språken
    
      
      let lang = LANGUAGES.find(Language => COUNTRIES[i].languageID === Language.id);
      let languageInfo = document.createElement("div");
      languageInfo.innerHTML =`
      Språk: ${lang.name}
      `
      document.getElementById(`${COUNTRIES[i].id}langVisa`).append(languageInfo);
          let city = CITIES.filter(city => COUNTRIES[i].id === city.countryID);
  
          let cityDiv = document.createElement("div");
          cityDiv.classList.add("cityDiv");
  
        for (let j = 0; j < city.length; j++) {
          let oneCity = document.createElement("div");
          oneCity.append(city[j].name);
          cityDiv.append(oneCity);
        }
  //data.id börjar på 1 medans ${COUNTRIES[i].id}allCities börjar på 0
    //country_div.append(cityDiv);
    
    document.getElementById(`${COUNTRIES[i].id}allCities`).append(cityDiv);
      
      
    
}
  
function CountryDiv(data){
    let country = document.createElement("div");
    country.classList.add("country");
  
    
    country.innerHTML = `
    <div class="imgTitle">
      <img class="normalImage" src="Images/${data.imagesNormal[0]}">
      <div class="countryNameTitle">${data.name}</div>
    </div>
    <div class="countrySideInfo"> 
      <img class="countryFlag" src="Images/${data.flag}">
      <div class="langVisa" id="${data.id}langVisa">
        <div id="visa"> Visum krävs: ${data.visa}</div>
      </div>
    </div>
    `;
    
    // Visa
    let infoAbout = document.createElement("div");
    infoAbout.classList.add("panel");    

    let cityHeading = document.createElement("div");
    cityHeading.innerHTML = 
    `<div class="cityHeading"> Städer </div>`;

    let allCitiesList = document.createElement("div");
    let idDiv = document.createElement("div");

    allCitiesList.append(idDiv);
    idDiv.id = data.id + "allCities";
    console.log(data.id);
    allCitiesList.classList.add("allCities");

    infoAbout.append(cityHeading);
    infoAbout.append(allCitiesList);

    country.append(infoAbout);

    country.addEventListener("click", function() {
      this.classList.toggle("active");
      
      let panel = infoAbout;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });

    return country;
}



