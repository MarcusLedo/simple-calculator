"use strict";
// DOM STUFF
const buttons = document.querySelectorAll(".btn");
const displayText = document.querySelector(".display-text");
// VARIABLES
// The expression that the code will evaluate
let expression = "";
//Will not render the display if this is equal to true
let isBlocked = false;

for (const button of buttons) {
  button.addEventListener("click", function (e) {
    onClick(button);
  });
}

function onClick(button) {
  switch (button.value) {
    case "ac":
      console.log("CLEAR THE DISPLAY");
      isBlocked = false;
      clearDisplay();
      break;
    case "result":
      try {
        expression = evaluateExpression(expression);
      } catch (e) {
        isBlocked = true;
      }
      console.log("CALCULATE THE EXPRESSION");

      break;
    case "percent":
      console.log("DIVIDE BY 100");
      try {
        expression = percentage(expression);
      } catch (e) {
        isBlocked = true;
      }

      break;
    default:
      console.log(`ADD '${button.value}' to the expression`);
      expression = concatToExpression(expression, button.value);
  }
  if (!isBlocked && expression != "Infinity")
    renderDisplay(displayText, expression);
  else {
    isBlocked = true;
    renderDisplay(displayText, "ERROR");
  }
}

function renderDisplay(displayText, text) {
  let mathSymbolsText = replaceSymbols(text);
  displayText.innerText = mathSymbolsText;
}

function concatToExpression(expression, value) {
  return expression.concat("", value);
}

function clearDisplay() {
  displayText.innerText = "";
  expression = "";
}

function replaceSymbols(text) {
  let newText = text;
  for (const char of newText) {
    newText = newText.replace("*", "×");
    newText = newText.replace("/", "÷");
  }
  return newText;
}

function evaluateExpression(expression) {
  console.log(eval(expression).toString());
  return eval(expression).toString();
}

function percentage(expression) {
  //Just divide the thing by 100
  const result = evaluateExpression(expression);

  return (result / 100).toString();
}
