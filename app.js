function BMI() {
  var heigth = document.getElementById("heigth").value;
  var weigth = document.getElementById("weigth").value;

  var bmi = weigth / ((heigth / 100) * (heigth / 100));
  var bmiFixed = bmi.toFixed(2);

  var bmiStatus;

  if (bmiFixed < 18.5) {
    bmiStatus = "Underweigth";
  } else if (18.5 <= bmiFixed && bmiFixed <= 24.9) {
    bmiStatus = "Healty weigth";
  } else if (25 <= bmiFixed && bmiFixed <= 29.9) {
    bmiStatus = "Overweigth";
  } else if (bmiFixed >= 30) {
    bmiStatus = "Obesity";
  }

  return "Your BMI is " + bmiFixed + ", which is: " + bmiStatus;
}

function basalMetabolicRate() {
  var age = document.getElementById("age").value;
  var heigth = document.getElementById("heigth").value;
  var weigth = document.getElementById("weigth").value;
  var isMan = document.getElementById("male").checked;

  if (isMan) {
    var bmr = 66.47 + 13.7 * weigth + 5 * heigth - 6.76 * age;
  } else {
    var bmr = 665.1 + 9.567 * weigth + 1.85 * heigth - 4.68 * age;
  }
  return bmr;
}

function totalMetabolicRate() {
  var bmrResult = basalMetabolicRate();
  var bmiResult = BMI();

  var activityLevel = [1, 1.2, 1.4, 1.6, 1.8, 2.0];
  var selectedLevel;

  var choice = document.getElementById("mySelect");
  var value = choice.options[choice.selectedIndex].value;

  switch (value) {
    case "bedrest":
      selectedLevel = activityLevel[0];
      break;

    case "very-light":
      selectedLevel = activityLevel[1];
      break;

    case "light":
      selectedLevel = activityLevel[2];
      break;

    case "moderate":
      selectedLevel = activityLevel[3];
      break;

    case "heavy":
      selectedLevel = activityLevel[4];
      break;

    case "very-heavy":
      selectedLevel = activityLevel[5];
      break;
  }

  var tmrResult = bmrResult * selectedLevel;

  document.getElementById("calValue").innerHTML =
    bmiResult +
    "<br />" +
    "<br />" +
    "Your Basal Metabolic Rate is:" +
    "<br />" +
    Math.floor(bmrResult) +
    " " +
    "kcal" +
    "<br />" +
    "<br />" +
    "Your Total Metbolic Rate is:" +
    "<br />" +
    Math.floor(tmrResult) +
    " " +
    "kcal";
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  totalMetabolicRate();
};

span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
