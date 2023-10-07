"use strict";
// LANGUAGE DROPDOWN
const langBtn = document.getElementsByClassName("dropdown-container");
const langOption = document.getElementsByClassName("language-dropdown");

for (let g = 0; g < langBtn.length; g++) {
  langBtn[g].addEventListener("click", () => {
    if (langOption[g].style.display !== "none") {
      langOption[g].style.display = "none";
    } else {
      langOption[g].style.display = "block";
    }
  });
}

// FAQ ACCORDION
const toggleBtns = document.getElementsByClassName("show-toggle-btn");
const moreInfo = document.getElementsByClassName("show-hide");
const icons = document.getElementsByClassName("icons");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", () => {
    if (moreInfo[i].style.display !== "none") {
      moreInfo[i].style.display = "none";
      icons[i].classList.add("fa-plus");
      icons[i].classList.remove("fa-times");
    } else {
      moreInfo[i].style.display = "block";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-times");
    }
  });
}
