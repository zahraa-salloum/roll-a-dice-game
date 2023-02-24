var number_random_1 = Math.floor(Math.random()*6)+1;
var number_random_2 = Math.floor(Math.random()*6)+1;


var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

player1.setAttribute('src', "dice-"+number_random_1+".png");
player2.setAttribute('src', "dice-"+number_random_2+".png");

