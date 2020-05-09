var submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function(){
  loveCalculator();
  submitBtn.setAttribute("disabled", true);
}

function loveCalculator(weight, height) {
    var n = Math.random();
    var love = Math.floor(n * 100) + 1;
    var ratingElement = "";

    if (love < 30) {
      ratingElement = "better luck next time"
    } else if (love > 30 && love <= 70)  {
      ratingElement = "there might be a chance"
    } else if (love == 100)  {
      ratingElement = "when's the wedding"
    } else {
      ratingElement = "congratuations, your in!"
    }

    document.getElementById("result-text").innerHTML = "Your love compatibility is " + love + "%<br><br>" + ratingElement;
}
