"use strict";
// DOM STUFF
const buttons = document.querySelectorAll(".btn");
const displayText = document.querySelector(".display-text");
// Variables
let expression = "";

for (const button of buttons) {
  button.addEventListener("click", function (e) {
    console.log(button.value);
  });
}
