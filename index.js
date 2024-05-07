const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const extraInput = document.getElementById("extra");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = parseFloat(billInput.value);
  const tipValue = parseFloat(tipInput.value);
  const extraValue = parseFloat(extraInput.value);

  // Check if any of the values are not valid numbers (NaN)
  if (isNaN(billValue) || isNaN(tipValue) || isNaN(extraValue)) {
    totalSpan.innerText = "Invalid Input. Please enter numbers only.";
    return;  // Exit the function if there's invalid input
  }

  const totalValue = billValue * (1 + tipValue / 100);
  const totalValue2 = totalValue + extraValue;
  totalSpan.innerText = totalValue2.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
