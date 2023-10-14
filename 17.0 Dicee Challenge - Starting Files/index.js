var randomNumber1 = randomNumberGenerator();

var img1 = document.querySelector(".img1");

img1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");

var randomNumber2 = randomNumberGenerator();

var img2 = document.querySelector(".img2");

img2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


function randomNumberGenerator() {
    return Math.floor(Math.random()*6) + 1;
}