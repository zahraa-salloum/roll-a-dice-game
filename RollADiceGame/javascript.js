var number_random = Math.floor(Math.random()*6)+1;
console.log(number_random);

var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

player1.setAttribute('src', "dice-"+number_random+".png");
player2.setAttribute('src', "dice-"+number_random+".png");

