player1Name = localStorage.getItem("chave1");
player2Name = localStorage.getItem("chave2");

player1Score = 0; 
player2Score = 0;

document.getElementById("player1_name").innerHTML = player1Name + ":";
document.getElementById("player2_name").innerHTML = player2Name + ":";

document.getElementById("player1_score").innerHTML = player1Score;
document.getElementById("player2_score").innerHTML = player2Score;

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1Name;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2Name;