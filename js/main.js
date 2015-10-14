console.log("JS in it.");

var askQuestion;
var currentBox; 
var getAnswer;
var promptInput;
var i = 1;
var computedAnswer;

$('body').css('background-image', "url(/assets/cityMap2.jpg)");
$('body').css('background-size', "cover");

var $questionBox = $('#QBox2'); 
var $inputBox = $('#inputBox');
var $submitButton = $('#submitButton');
var $gameMessage = $('#gameMessage');


var beginGame = document.getElementById("QBox1");
var answerQuestion = document.getElementById("QBox3");
// console.log(answerQuestion);

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
	var num1 = randomNumber1;
	var num2 = randomNumber2;
	if (randomNumber < 0.33) {
		$questionBox.html("What is " + num1 + " - " + num2 + "?");
        computedAnswer = (num1 - num2);    	
    } else if (randomNumber < 0.66) {
        $questionBox.html("What is " + num1 + " + " + num2 + "?");
        computedAnswer = (num1 + num2);
    } else {
        $questionBox.html("What is " + num1 + " * " + num2 + "?");
        computedAnswer = (num1 * num2);
    }	
};

var enteredAnswer;
$submitButton.click(function(){
	enteredAnswer = parseInt($inputBox.val());
	checkAnswer(computedAnswer, enteredAnswer);	
});


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
	$('#box17').hmtl("You Won !!!").css('background-color', 'red');
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
		i++;
		currentBox.html("");
		currentBox = $("#box"+ i);
		currentBox.html('<img src="assets/car.gif">');
		// console.log(currentBox);
		$('#QBox1').html("Correct!").css({'background-color': 'pink', 'height': '50px'});
		askQuestion();	
	}	

}

var nextQuestion = function(){
	if (i === 3 || i === 8 || i === 14){
		noFastpass();
	} else if (i === 4 || i === 9 || i === 15) {
		detour();
	} else {
		$('#QBox1').html("Wrong! Click here to try again!").css({'background-color': 'red', 'height': '100px'});
		// var tryAgain = confirm("Try again?");
		// 	if(tryAgain){
		// 		alert("Lets play!");
		// 		askQuestion();
		// 	} else {
		// 		alert("See you next time!");
		// 		i = 1;
		// 		currentBox = $("#box" +i);
		// 		currentBox.html("");
		// 	}
	}		
};

var fastPass = function () {
		$('#QBox1').html(" You got fast pass access! Move forward 2 spots!").css({'background-color':'pink', 'height': '180px'});
		i+=2;
		currentBox.html("");
		currentBox = $("#box"+ i);
		currentBox.html('<img src="assets/car.gif">');
		askQuestion();		
};

var noFastpass = function () {
	$('#QBox1').html("That is not correct, You did not get on the Fast Pass and are hiding towards a detour!").css({'background-color': 'red', 'height': '200px'});
	i++;
	currentBox.html("");
	currentBox = $("#box"+ i);
	currentBox.html('<img src="assets/car.gif">');
	// console.log(currentBox);
	askQuestion();
}

var detour = function() {
	$('#QBox1').html("Sorry you hit a detour!" ).css('height', '50px');
	i-=2;
	currentBox.html("");
	currentBox = $("#box"+ i);
	currentBox.html('<img src="car.gif">');
	// console.log(currentBox);
	askQuestion();	
};

var missedDetour = function(){
	$('#QBox1').html("Correct!" + "  You missed the detour continue on your journey!   ").css('background-color', 'pink');
	i++;
	currentBox.html("");
	currentBox = $("#box"+ i);
	currentBox.html('<img src="assets/car.gif">');
	// console.log(currentBox);
	askQuestion();	
};









