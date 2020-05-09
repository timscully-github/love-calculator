var weight = document.getElementById("weight");
var height = document.getElementById("height");
var submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function(){
  weight = weight.value;
  height = height.value;
  bmiCalculator(weight, height);
  submitBtn.setAttribute("disabled", true);
}

function bmiCalculator(weight, height) {
    var bmi = Math.floor(weight / Math.pow(height, 2));
    document.getElementById("result").innerHTML = "Your current BMI is " + bmi;
}
