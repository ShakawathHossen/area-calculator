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
document.getElementById("random1").addEventListener('mouseenter',function() {
  colors='rgb('+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+','+Math.round(Math.random() * 255)+')';
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