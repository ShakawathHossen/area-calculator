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
  // make calculations for triangle with reuseable function
  const triangleArea = 0.5 * displayValue(triangleBase, triangleHeight);
  // error handle for NAN and negative numbers
  if (isNaN(triangleArea) || triangleArea < 0 || triangleArea == "" || typeof(triangleBaseInput) != "number" || typeof(triangleHeightInput) != "number" ||triangleHeightInput < 0) {
    alert("Please enter a valid positive number");
    return;
  }
  // get result portal
  const resultPortal = document.getElementById("result-portal");
  const p = document.createElement("p");
  p.innerHTML =
    getNextSerialNumber() +
    ". Traingle" +
    "  " +
    triangleArea.toFixed(2) +
    "<span>cm <sup>2</sup></span>" +
    "   " +
    " " +
    "<button style='color:white; background-color: #0B5ED7; padding: 6px 8px; border-radius: 2px; border: none;'>Convet to m<sup>2</sup></button>";
  // append in result portal
  resultPortal.appendChild(p);
});

// rectangle card
// rectangle button get
document.getElementById("rectangle-btn").addEventListener("click", function () {
  // get rectangle width input field
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthString = rectangleWidthInput.value;
  const rectangleWidth = parseFloat(rectangleWidthString);
  rectangleWidthInput.value = "";

  // get rectangleLength input field
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthString = rectangleLengthInput.value;
  const rectangleLength = parseFloat(rectangleLengthString);
  rectangleLengthInput.value = "";
  if (rectangleLength < 0) {
    alert("Please enter a valid positive number");
    return;
  }


  // make calculations for rectangle with reuseable function
  const rectangleArea = displayValue(rectangleWidth, rectangleLength);
  // error handle for NAN and negative numbers
  if (isNaN(rectangleArea) || rectangleArea < 0 || rectangleArea == " " ||typeof(rectangleWidthInput) != "number" || typeof(rectangleLengthInput) !="number" ||rectangleLengthInput < 0) {
    alert("Please enter a valid positive number");
    return;
  }
  // get result portal
  const resultPortal = document.getElementById("result-portal");
  const p = document.createElement("p");
  p.innerHTML =
    getNextSerialNumber() +
    ". Rectangle" +
    "  " +
    rectangleArea.toFixed(2) +
    "<span>cm <sup>2</sup></span>" +
    "   " +
    " " +
    "<button style='color:white; background-color: #0B5ED7; padding: 6px 8px; border-radius: 2px; border: none;'>Convet to m<sup>2</sup></button>";
  // append in result portal
  resultPortal.appendChild(p);
});

// parallelogram card
// parallelogram-btn get
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const parallelogramBase = 10;
    const parallegramHeight = 12;
    const parallegramArea = parallelogramBase * parallegramHeight;

    // get result portal
    const resultPortal = document.getElementById("result-portal");
    const p = document.createElement("p");
    p.innerHTML =
      getNextSerialNumber() +
      ". Parallelogram" +
      "  " +
      parallegramArea.toFixed(2) +
      "<span>cm <sup>2</sup></span>" +
      "   " +
      " " +
      "<button style='color:white; background-color: #0B5ED7; padding: 6px 8px; border-radius: 2px; border: none;'>Convet to m<sup>2</sup></button>";
    // append in result portal
    resultPortal.appendChild(p);
  });

// Rhombus card
// rhombus-btn get
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const diagonalOne = 10;
  const diagonalTwo = 12;
  const rhombusArea = 0.5 * diagonalOne + diagonalTwo;

  // get result portal
  const resultPortal = document.getElementById("result-portal");
  const p = document.createElement("p");
  p.innerHTML =
    getNextSerialNumber() +
    ". Rhombus" +
    "  " +
    rhombusArea.toFixed(2) +
    "<span>cm <sup>2</sup></span>" +
    "   " +
    " " +
    "<button style='color:white; background-color: #0B5ED7; padding: 6px 8px; border-radius: 2px; border: none;'>Convet to m<sup>2</sup></button>";
  // append in result portal
  resultPortal.appendChild(p);
});
// Pentagon card
// pentagon-btn get
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const pentagonPath = 6;
  const pentagonBase = 10;
  const pentagonArea = 0.5 * pentagonPath * pentagonBase;

  // get result portal
  const resultPortal = document.getElementById("result-portal");
  const p = document.createElement("p");
  p.innerHTML =
    getNextSerialNumber() +
    ". Pentagon" +
    "  " +
    pentagonArea.toFixed(2) +
    "<span>cm <sup>2</sup></span>" +
    "   " +
    " " +
    "<button style='color:white; background-color: #0B5ED7; padding: 6px 8px; border-radius: 2px; border: none;'>Convet to m<sup>2</sup></button>";
  // append in result portal
  resultPortal.appendChild(p);
});
// Ellipse card
// ellipse-btn get
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const ellipseA = 10;
  const ellipseB = 4;
  const ellipseArea = 3.1416 * ellipseA * ellipseB;

  // get result portal
  const resultPortal = document.getElementById("result-portal");
  const p = document.createElement("p");
  p.innerHTML =
    getNextSerialNumber() +
    ". Ellipse" +
    "  " +
    ellipseArea.toFixed(2) +
    "<span>cm <sup>2</sup></span>" +
    "   " +
    " " +
    "<button style='color:white; background-color: #0B5ED7; padding: 6px 8px; border-radius: 2px; border: none;'>Convet to m<sup>2</sup></button>";
  // append in result portal
  resultPortal.appendChild(p);
});
