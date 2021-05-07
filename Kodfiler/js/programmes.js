"use strict";

function programmeName(name){
    let programmeDiv = document.createElement("div");
    programmeDiv.innerHTML = `
    <div>${name}</div>
    `;
    programmeDiv.classList.add("programmeDiv");
    document.querySelector("wrapper").append(programmeDiv);    
};

for(let i = 0; i < PROGRAMMES.length; i++) {
    programmeName(PROGRAMMES[i].name) 
}