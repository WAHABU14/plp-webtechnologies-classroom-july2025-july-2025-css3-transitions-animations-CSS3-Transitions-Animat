// Function to animate a box
function animateBox(boxElement) {
  boxElement.classList.add('animate');
  return true;
}

// Function to trigger DOM changes
function changeText(textElement, newText) {
  textElement.innerText = newText;
  return textElement.innerText;
}

// Function to calculate values
function calculateSum(a, b) {
  return a + b;
}

// Example usage
const boxElement = document.getElementById('box');
const textElement = document.getElementById('text');

animateBox(boxElement);
changeText(textElement, 'New text!');
console.log(calculateSum(2, 3)); // Output: 5
