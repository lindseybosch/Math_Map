console.log("JS in it.");

var askQuestion;
var currentBox; 
var getAnswer;
var promptInput;
var i = 1;

$('body').css('background-image', "url(/assets/cityMap2.jpg)");
$('body').css('background-size', "cover");


var beginGame = document.getElementById("box1");

var render = function(){
	currentBox = $("#box" +i);
	currentBox.html('<img src="assets/car.gif">'); 
	askQuestion();	
};

beginGame.addEventListener("click", render);

var askQuestion = function() {
	var randomNumber = Math.random();
	var randomNumber1 = Math.floor(Math.random()*31);
	var randomNumber2 = Math.floor(Math.random()*31);
	var question;
	var computedAnswer;
	var enteredAnswer;
	var num1 = randomNumber1;
	var num2 = randomNumber2;
	if (randomNumber < 0.33) {
		question = prompt("What is " + num1 + " - " + num2 + "?");
        computedAnswer = (num1 - num2);
        enteredAnswer = parseInt(question);		
    } else if (randomNumber < 0.66) {
        question = prompt("What is " + num1 + " + " + num2 + "?");
        computedAnswer = (num1 + num2);
        enteredAnswer = parseInt(question);
    } else {
        question = prompt("What is " + num1 + " * " + num2 + "?");
        computedAnswer = (num1 * num2);
        enteredAnswer = parseInt(question);
    }
    checkAnswer(computedAnswer, enteredAnswer);
};

var checkForWinner = function() {
	if (i !== 17) {
		return i !== 17;
	} else {
		winner();
	}	
};

var checkAnswer = function (computedAnswer, enteredAnswer) {
	if(checkForWinner()) {
		if (computedAnswer === enteredAnswer) {
			answerCorrect();	
		} else {
			nextQuestion();
		}		
	}			
};

var winner = function() {
	alert("You Won !!!");
	var tryAgain = confirm("Play again?");
		if(tryAgain){
			alert("Lets play!");
			currentBox.html("");
			i = 1;
			startGame();
		} else {
			alert("See you next time!");
		}
};

var answerCorrect = function(){
	if (i === 3 || i === 8 || i === 14){
		fastPass();
	} else if (i === 4 || i === 9 || i === 15) {
		missedDetour();
	} else {	
		// console.log(true);
		alert("Correct!" + "  Press OK to continue");
		i++;
		currentBox.html("");
		currentBox = $("#box"+ i);
		currentBox.html('<img src="assets/car.gif">');
		console.log(currentBox);
		askQuestion();	
	}	

}

var nextQuestion = function(){
	if (i === 3 || i === 8 || i === 14){
		noFastpass();
	} else if (i === 4 || i === 9 || i === 15) {
		detour();
	} else {
		alert("That is not correct!");
		var tryAgain = confirm("Try again?");
			if(tryAgain){
				alert("Lets play!");
				askQuestion();
			} else {
				alert("See you next time!");
				i = 1;
				currentBox = $("#box" +i);
				currentBox.html("Start Game!");
			}
	}		
};

var fastPass = function () {
		alert(" You got fast pass access! Move forward 2 spots!");
		i+=2;
		currentBox.html("");
		currentBox = $("#box"+ i);
		currentBox.html('<img src="assets/car.gif">');
		askQuestion();		
};

var noFastpass = function () {
	alert("That is not correct, You did not get on the Fast Pass and are hiding towards a detour!")
	i++;
	currentBox.html("");
	currentBox = $("#box"+ i);
	currentBox.html('<img src="assets/car.gif">');
	// console.log(currentBox);
	askQuestion();
}

var detour = function() {
	alert ("Sorry you hit a detour!" );
	i-=2;
	currentBox.html("");
	currentBox = $("#box"+ i);
	currentBox.html('<img src="car.gif">');
	console.log(currentBox);
	askQuestion();	
};

var missedDetour = function(){
	// console.log(true);
	alert("Correct!" + "  You missed the detour continue on your journey!   ");
	i++;
	currentBox.html("");
	currentBox = $("#box"+ i);
	currentBox.html('<img src="assets/car.gif">');
	console.log(currentBox);
	askQuestion();	
};







