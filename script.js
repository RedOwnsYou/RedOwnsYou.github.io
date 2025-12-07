console.log("Calculator script loaded.");

let display = document.getElementById("display");

display.value = "0";

function appendToDisplay(value) {
  if (display.value === "0" && /[0-9.]/.test(value)) {
    display.value = value;
    return;
  }
  if (display.value === "Undefined" || display.value === "ERROR") {
    if (/[0-9.]/.test(value)) {
      display.value = value;
    } else {
      display.value = "0" + value;
    }
    return;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "0";
}

function clearLast() {
  if (display.value === "undefined" || display.value === "ERROR") {
    clearDisplay();
    return;
  }

  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}
