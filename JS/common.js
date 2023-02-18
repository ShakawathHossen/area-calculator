// serial no
let serialNumber = 0;
// function to generate the next serial number
function getNextSerialNumber() {
  serialNumber++; // increment the serial number
  return serialNumber;
}
// button on result portal 
function createButton() {
  // Create a button element
  const button = document.createElement("button");
  button.InnerHTML = "convert";
  // Add some styles to the button
  button.style.backgroundColor = "blue";
  button.style.color = "white";
  button.style.padding = "10px";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  return button;
}

// blog button interactions
function getBlogButton() {
  window.location.href = "blog.html";
}
//back home button interactions
function getBackHomeButton() {
  window.location.href = "index.html";
}

// multiplication function for reuse 
function displayValue(a, b){ 
  const sum = (a*b); 
  return sum; 
} 

// color chgane on mouseenter function call
function randomBackground(geometry){ 
  geometry.addEventListener('mouseenter', function() { 
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); 
  this.style.background = randomColor; 
}) 
}
