"use strict";

goToTopButton();

//Scroll up knappen
function goToTopButton() {
    let button = document.createElement("BUTTON");

    button.innerHTML = `^`
    button.classList.add("topButton");
    document.querySelector("main").append(button);
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          button.style.display = "block";
        } else {
          button.style.display = "none";
        }
    }

    button.addEventListener("click", () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });
}
