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

// color chgane on mouseover
document.getElementById("random1").addEventListener('mouseenter',function() {
  const colors='rgb('+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+')';
  this.style.background =colors;
})
// color chgane on mouseover
document.getElementById("random2").addEventListener('mouseenter',function() {
  colors='rgb('+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+')';
  this.style.background =colors;
})
// color chgane on mouseover
document.getElementById("random3").addEventListener('mouseenter',function() {
  colors='rgb('+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+')';
  this.style.background =colors;
})
// color chgane on mouseover
document.getElementById("random4").addEventListener('mouseenter',function() {
  colors='rgb('+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+')';
  this.style.background =colors;
})
// color chgane on mouseover
document.getElementById("random5").addEventListener('mouseenter',function() {
  colors='rgb('+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+')';
  this.style.background =colors;
})
// color chgane on mouseover
document.getElementById("random6").addEventListener('mouseenter',function() {
  colors='rgb('+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+')';
  this.style.background =colors;
})