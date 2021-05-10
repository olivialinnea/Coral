"use strict";
const wrapper = document.querySelector("wrapper");

for(let i = 0; i < COUNTRIES.length; i++) {
    wrapper.append(CountryDiv(COUNTRIES[i]));
}

LANGUAGES.forEach(element => {
    LANGUAGES.find(Language => element.countryID === Language.languageID);
    wrapper.append(CountryDiv(LANGUAGES[i]));
})

function CountryDiv(data){
    let country = document.createElement("div");
    country.classList.add("country");

    country.innerHTML = `
    <img src="images/${data.spain_normal_1}.jpg">
    <div>${data.name}</div>
    <div id="langVisa">
    <div>Language: ${data.languageID.name}</div>
    <div>Visa requierd: ${data.visa}</div>
    </div>
    `;
    
    // ny div
    let infoAbout = document.createElement("div");
    infoAbout.innerHTML= `Information om land`
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