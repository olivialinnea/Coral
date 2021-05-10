"use strict";
const wrapper = document.querySelector("wrapper");

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
    
    // info om land
    let infoAbout = document.createElement("div");
    infoAbout.innerHTML= `
    <div class="cityHeading"> Städer </div>
    <div class="citiesAccordion"></div>
    `
    infoAbout.classList.add("panel");
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

const citiesAccordion = document.querySelector("citiesAccordion");

for (let ii = 0; ii < citiesAccordion.length; ii++) {
    for(let i = 0; i < CITIES.length; i++) {
        citiesAccordion[ii].append(getCityName(CITIES[i]));
      }
    }
    
    function getCityName(data) {
      let city = document.createElement("div");
      city.classList.add("city");
      city.innerHTML = `
      <div> Hej hej${data.name}</div>
      `
      return city;
    }