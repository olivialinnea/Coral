"use strict";


function CountryName(name){
    let countryDiv = document.createElement("div");
    countryDiv.textContent = name;
    countryDiv.classList.add("countryDiv");
    document.querySelector("main").append(countryDiv);    
};

for(let i = 0; i < COUNTRIES.length; i++) {
       CountryName(COUNTRIES[i].name) 
}



