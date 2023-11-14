// JavaScript functionality

document.addEventListener("DOMContentLoaded", function () {
  const inputNumber = document.getElementById("inputNumber");
  const calculateButton = document.getElementById("calculateButton");
  const resultElement = document.getElementById("result");

  calculateButton.addEventListener("click", () => {
    const number = parseInt(inputNumber.value);

    if (isNaN(number)) {
      resultElement.textContent = "Please enter a valid number.";
    } else {
      resultElement.textContent = `Factorial of ${number} is: ${calculateFactorial(number)}`;
    }
  });

  function calculateFactorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * calculateFactorial(n - 1);
  }
});

// Open the contact popup
function openContactPopup() {
  var popup = document.getElementById("contactPopup");
  popup.style.display = "block";
}

// Close the contact popup
function closeContactPopup() {
  var popup = document.getElementById("contactPopup");
  popup.style.display = "none";
}

// Close the popup when the 'x' is clicked
var closeBtn = document.getElementById("closePopup");
closeBtn.addEventListener("click", closeContactPopup);

// Close the popup when the background is clicked
window.onclick = function(event) {
  var popup = document.getElementById("contactPopup");
  if (event.target === popup) {
    closeContactPopup();
  }
};

