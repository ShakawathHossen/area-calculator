// serial no
let serialNumber = 0;
// function to generate the next serial number
function getNextSerialNumber() {
  serialNumber++; // increment the serial number
  return serialNumber;
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
document.getElementById("random").addEventListener('mouseenter',function(event) {
  colors='rgb('+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+')';
  event.target.style.backgroundColor =colors;
})