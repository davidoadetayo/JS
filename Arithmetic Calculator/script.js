const display = document.getElementById("display");
const resultDisplay = document.getElementById("resultDisplay");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let previousInput = "";
let operator = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Clear
    if (value === "AC") {
      currentInput = "";
      previousInput = "";
      operator = null;
      display.value = "";
      resultDisplay.value = "";
      return;
    }
        
    // Delete
  // Delete
if (value === "C") {
    if (currentInput) {
        currentInput = currentInput.slice(0, -1);
    }
    
    display.value = currentInput;
    resultDisplay.value = "";
    return; 
}

    // Toggle sign
    if (value === "±") {
      if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;
      }
      return;
    }

    // Percentage
    if (value === "%") {
      if (currentInput) {
        display.value = "%";
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.value = currentInput;
      }
      return;
    }

    // Operator handling
    if (["/", "x", "-", "+"].includes(value)) {
      if (currentInput === "" && previousInput !== "") {
        operator = value;
        return;
      }
      if (currentInput !== "") {
        if (previousInput !== "") calculate();
        operator = value;
        previousInput = currentInput;
        currentInput = "";
      }
      return;
    }

    // Decimal handling
    if (value === ".") {
      if (!currentInput.includes(".")) currentInput += ".";
      display.value = currentInput;
      return;
    }

    // Equal
    if (value === "=") {
      calculate();
      return;
    }

    // Number
    currentInput += value;
    display.value = currentInput;
  });
});

function calculate() {
  if (operator && previousInput !== "" && currentInput !== "") {
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "x":
        result = prev * curr;
        break;
      case "/":
        result = curr === 0 ? "Error" : prev / curr;
        break;
      default:
        result = "Error";
    }

    resultDisplay.value = result;
    currentInput = result.toString();
    previousInput = "";
    operator = null;
  }
}
