window.onload = function() {
var number_random_1 = Math.floor(Math.random()*6)+1;
var number_random_2 = Math.floor(Math.random()*6)+1;

var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

player1.setAttribute('src', "dice-"+number_random_1+".png");
player2.setAttribute('src', "dice-"+number_random_2+".png");

var headerTitle = document.getElementById("headerTitle");
if(number_random_1 > number_random_2){
    headerTitle.innerHTML = 'Player 1 Wins';
} else if(number_random_1 < number_random_2){
    headerTitle.innerHTML = 'Player 2 Wins';
} else{
    headerTitle.innerHTML = 'It is a Draw';
}
}
