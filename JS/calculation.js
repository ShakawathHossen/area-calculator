// triangle button get element by id
document.getElementById("triangle-btn").addEventListener("click", function () {
  // get triangleBase input field
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseString = triangleBaseInput.value;
  const triangleBase = parseFloat(triangleBaseString);
  triangleBaseInput.value = "";

  // get triangle Hight input field
  const triangleHeightInput = document.getElementById("traingle-height");
  const triangleHeightString = triangleHeightInput.value;
  const triangleHeight = parseFloat(triangleHeightString);
  triangleHeightInput.value = "";

  // make calculations for triangle
  const triangleArea = 0.5 * triangleBase * triangleHeight;
  // get result portal
  const resultPortal = document.getElementById("result-portal");
  const h6 = document.createElement("h6");
  h6.innerHTML =
    getNextSerialNumber() +
    ". Traingle" +
    " " +
    triangleArea.toFixed(2) +
    "<span>cm <sup>2</sup></span>";
  // append in result portal
  resultPortal.appendChild(h6);
});
