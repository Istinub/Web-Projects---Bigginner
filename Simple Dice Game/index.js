var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomImageSource1 = "images/d" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomImageSource2 = "images/d" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
  document.getElementById("result").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.getElementById("result").innerHTML = "Player 2 Wins";
} else {
  document.getElementById("result").innerHTML = "Draw!";
}
