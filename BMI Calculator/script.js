const weightInput = document.querySelector(".weight");
const heightInput = document.querySelector(".height");
const calculateBtn = document.querySelector(".calcBMI");
const result = document.querySelector("p.result");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const weight = Number(parseFloat(weightInput.value));
  const height = Number(parseFloat(heightInput.value));

  const bmi = weight / (height**2);
  let category = ""

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    result.textContent = "Please enter valid weight and height values.";
    return;
  }

    if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else if (bmi < 35) {
    category = "Obesity Class I";
  } else if (bmi < 40) {
    category = "Obesity Class II";
  } else {
    category = "Obesity Class III";
  }

  result.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`
});
