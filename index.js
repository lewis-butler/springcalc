const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const extraInput = document.getElementById("extra");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const extraValue = extraInput.value;
  const totalValue = billValue * (1 + tipValue / 100) + extraValue;
  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
