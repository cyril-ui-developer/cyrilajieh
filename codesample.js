var myArray =['Cyril Ajieh','cyril.ajieh'];

var cutName = function(myName) {
    var splitStr =myName.split(" ");
    return splitStr;
}
cutName('Cyril Ajieh Omo');
var myData = {
  fullName:cutName(myArray[0]),
  skype : myArray[1],
  github: 'cyrilajieh'

};
//game
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1,choice2) {
    if(choice1 === choice2){
        return 'The result is a tie!';
    }
    else if (choice1 === 'rock'){
    if (choice2 === 'scissors'){
        return 'rock win';
    }
    else {
    return 'paper wins';
    }
    
    }
    else if (choice1 === 'paper'){
    if (choice2 === 'rock'){
        return "paper wins";
    }
    else
    {
     "scissors wins";   
    }
    }
    
    }
    
    compare( 'rock', 'scissors');