var submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function(){
  loveCalculator();
  submitBtn.setAttribute("disabled", true);
}

function loveCalculator(weight, height) {
    var n = Math.random();
    var love = Math.floor(n * 100);
    document.getElementById("result-text").innerHTML = "Your love compatibility is " + love + "%";
}
