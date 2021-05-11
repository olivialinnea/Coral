"use strict";
const wrapper = document.querySelector("wrapper");

// Alpabetiskordning funkar ej på jonnas kod
      // let alphabeticalOrderArray = [];
      
      // function alphabeticalOrder() {
      //   for(let i = 0; i < COUNTRIES.length; i++) {
      //     alphabeticalOrderArray.push((COUNTRIES[i].name));
      //   }

      //   alphabeticalOrderArray.sort((a,b) => a > b);
      
      //   return alphabeticalOrderArray;
      // }
      // alphabeticalOrder();

      // for(let i = 0; i < alphabeticalOrderArray.length; i++) {
      //   wrapper.append(CountryDiv(alphabeticalOrderArray[i]));
      // }
// Alpabetiskordning funkar ej på jonnas kod

for(let i = 0; i < COUNTRIES.length; i++) {
    wrapper.append(CountryDiv(COUNTRIES[i]));
}

function CountryDiv(data){
    let country = document.createElement("div");
    country.classList.add("country");

    
    /*COUNTRIES.forEach(element => {
      LANGUAGES.find(Language => COUNTRIES.languageID === Language.id);
      let languageInfo = document.createElement("div");
      languageInfo.innerHTML =`
      <div>Language: ${element.name}</div>
      `
      document.getElementById("langVisa").append(languageInfo);
      
      return languageInfo;
      
    }); */

    country.innerHTML = `
    <img class="normalImage" src="Images/${data.imagesNormal[0]}">
    <div class="countryNameTitle">${data.name}</div>
    <div id="langVisa">
    
    <div>Visa requierd: ${data.visa}</div>
    </div>
    `;
    
    // Inne i varje land
    let infoAbout = document.createElement("div");
    infoAbout.classList.add("panel");

    let cityHeading = document.createElement("div");
    cityHeading.innerHTML = 
    `<div class="cityHeading"> Städer </div>`;

    let allCitiesList = document.createElement("div");
    allCitiesList.innerHTML = `<div class="allCities"> (Koppla rätt landID med city name, LISTA ALLA STÄDER I LANDET) </div>`;

    infoAbout.append(cityHeading);
    infoAbout.append(allCitiesList);

    
    document.querySelector("wrapper").append(infoAbout);

    return country;
}

// Accordion
let acc = document.getElementsByClassName("country");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Accordion

