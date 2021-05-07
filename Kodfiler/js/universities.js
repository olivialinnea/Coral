"use strict";

function universityName(name){
    let universityDiv = document.createElement("div");
    universityDiv.innerHTML = `
    <div>${name}</div>
    `;
    universityDiv.classList.add("universityDiv");
    document.querySelector("wrapper").append(universityDiv);    
};

for(let i = 0; i < UNIVERSITIES.length; i++) {
    universityName(UNIVERSITIES[i].name) 
}