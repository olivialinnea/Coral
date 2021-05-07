"use strict";


function CountryName(name){
    let div = document.createElement("div");
    div.textContent = name;
    document.querySelector("main").append(div);    
};

for(let i = 0; i < COUNTRIES.length; i++) {
       CountryName(COUNTRIES[i].name) 
}



