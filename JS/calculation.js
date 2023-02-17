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
  const p = document.createElement("p");
  p.innerHTML =
    getNextSerialNumber() +
    ". Traingle" +
    "  " +
    triangleArea.toFixed(2) +
    "<span>cm <sup>2</sup></span>";
  // append in result portal
  resultPortal.appendChild(p);
});

// rectangle card 
// rectangle button get 
document.getElementById("rectangle-btn").addEventListener("click", function() {
    
  // get rectangle width input field
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthString = rectangleWidthInput.value;
  const rectangleWidth = parseFloat(rectangleWidthString);
  rectangleWidthInput.value = "";
  console.log(rectangleWidth);
  
  // get rectangleLength input field
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthString = rectangleLengthInput.value;
  const rectangleLength = parseFloat(rectangleLengthString);
  rectangleLengthInput.value = "";
  console.log(rectangleLength);

    // make calculations for rectangle
    const rectangleArea =rectangleWidth * rectangleLength;
    // get result portal
    const resultPortal = document.getElementById("result-portal");
    const p = document.createElement("p");
    p.innerHTML =
      getNextSerialNumber() +
      ". Rectangle" +
      "  " +
      rectangleArea.toFixed(2) +
      "<span>cm <sup>2</sup></span>";
    // append in result portal
    resultPortal.appendChild(p);
})

// parallelogram card 
// parallelogram-btn get 
document.getElementById("parallelogram-btn").addEventListener("click", function() {
    const parallelogramBase=10;
    const parallegramHeight=12;
    const parallegramArea=parallelogramBase*parallegramHeight;

    // get result portal
    const resultPortal = document.getElementById("result-portal");
    const p = document.createElement("p");
    p.innerHTML =
      getNextSerialNumber() +
      ". Parallelogram" +
      "  " +
      parallegramArea.toFixed(2) +
      "<span>cm <sup>2</sup></span>";
    // append in result portal
    resultPortal.appendChild(p);

})

