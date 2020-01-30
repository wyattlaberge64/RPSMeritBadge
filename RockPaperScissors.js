var rpsWords = ["rock", "paper", "scissors"];
var setWinner = [[0,1,1],[0,2,0],[1,0,0],[1,2,1],[2,1,0],[2,0,1]];
// in third array element: 1 = cpu won 0 = player won
// [players][cpu][winner]
var scoreKeeper = [0,0];

main();

function main(){
	var outOf = parseInt(prompt("Best out of? "));
	for(var turn=0; turn<outOf; turn++){
		var pChoice = userTurn();
		if(pChoice == "q"){
			turn=outOf;
		}
		else{
			var cChoice = cpuTurn();
			if(pChoice == cChoice){
				alert("We both chose "+cChoice);
				turn--;
			}
			else{
				var winner = turnWinner(pChoice, cChoice);
				updateScore(winner);
			}
		}
	}
	gameWinner();
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
	for(var index = 0; index < 6; index++){
		if(userTurn == setWinner[index][0] && cpuTurn == setWinner[index][1]){
			let winner = setWinner[index][2];
			alert(setWinner[index][2] + " won!");
			return winner;
		}
	}
}

function updateScore(winner){
	scoreKeeper[winner]++;
	alert(scoreKeeper);
}

function gameWinner(){
	if(scoreKeeper[0]>scoreKeeper[1]){
		alert("The winner is the player!");
	}
	else{
		alert("The winner is the CPU!");
	}
}
