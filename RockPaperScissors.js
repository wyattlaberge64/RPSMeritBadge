var rpsWords = ["rock", "paper", "scissors"];
var setWinner = [[0,1,1],[0,2,0],[1,0,0],[1,2,1],[2,1,0],[2,0,1]];
var scoreKeeper = [0,0];

function main(){
	var outOf = parseInt(prompt("Best out of? "));
	for(var turn=0; turn<outOf; turn++){
		userTurn();
		if(pChoice == "q"){
			turn=outOf;
		}
		else{
			cpuTurn();
			if(pChoice == cChoice){
				alert("We both chose "+cChoice);
				turn--;
			}
			else{
				turnWinner();
				updateScore();
			}
		}
	}
}

function userTurn(){
	var pChoice = parseInt(prompt("choose either 0(rock), 1(paper) or 2(scissors): "));
	return pChoice;
}

function cpuTurn(){
	var cChoice = Math.floor(Math.random()*3);
	return cChoice;
}

function turnWinner(userTurn,cpuTurn){
	for()
}

function updateScore(){
	
}

function gameWinner(){
	
}
