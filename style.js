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

// Function to trigger CSS animation
function triggerAnimation(element) {
  element.classList.add('animate');
}

// Function to remove CSS animation
function removeAnimation(element) {
  element.classList.remove('animate');
}

// Event listener for button click
document.getElementById('button').addEventListener('click', function() {
  const cardElement = document.getElementById('card');
  cardElement.classList.toggle('flip');
});
