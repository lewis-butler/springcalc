const btnEl = document.getElementById("calculate");
const forceInput = document.getElementById("force");
const distanceInput = document.getElementById("distance");
const moaInput = document.getElementById("moa");
const yInput = document.getElementById("y");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const forceValue = parseFloat(forceInput.value);
  const distanceValue = parseFloat(distanceInput.value);
  const yValue = parseFloat(yInput.value);
  const moaValue = parseFloat(moaInput.value);

  // Check if any of the values are not valid numbers (NaN)
  if (isNaN(forceValue) || isNaN(distanceValue) || isNaN(yValue)) {
    totalSpan.innerText = "Invalid Input. Please enter numbers only.";
    return;  // Exit the function if there's invalid input
  }

  const momentValue = forceValue * distanceValue;
  const stressValue = (momentValue * yValue) / moaValue;
  totalSpan.innerText = stressValue.toFixed(0);
}

btnEl.addEventListener("click", calculateTotal);
