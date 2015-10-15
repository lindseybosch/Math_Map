console.log("JS in it.");

var askQuestion;
var currentBox; 
var getAnswer;
var promptInput;
var i = 1;
var computedAnswer;
var $questionBox = $('#QBox2'); 
var $inputBox = $('#inputBox');
var $submitButton = $('#submitButton');
var $gameMessage = $('#gameMessage');


var beginGame = document.getElementById("QBox1");
var answerQuestion = document.getElementById("QBox3");


var render = function(){
	if (i === 5 || i === 6 || i === 7 || i === 8){
		currentBox = $("#box" +i); 
		currentBox.html('<img src="assets/carFR.gif">'); 
	} else if (i === 9 || i === 10 || i === 11 || i === 12){
		currentBox = $("#box" +i); 
		currentBox.html('<img src="assets/carFU.png">');
	} else if ( i === 13 || i === 14){
		currentBox = $("#box" +i); 
		currentBox.html('<img src="assets/carFL.gif">');
	} else {
		currentBox = $("#box" +i); 
		currentBox.html('<img src="assets/car.png">'); 
	}
	askQuestion();	
};	

beginGame.addEventListener("click", render);

var askQuestion = function() {
	var randomNumber = Math.random();
	var randomNumber1 = Math.floor(Math.random()*21);
	var randomNumber2 = Math.floor(Math.random()*21);
	var	randomNumber3 = Math.floor(Math.random()*11);
	var randomNumber4 = Math.floor(Math.random()*11);
	if (randomNumber < 0.33) {
		$questionBox.html("What is " + randomNumber1 + " - " + randomNumber2 + "?");
        computedAnswer = (randomNumber1 - randomNumber2);    	
    } else if (randomNumber < 0.66) {
        $questionBox.html("What is " + randomNumber1 + " + " + randomNumber2 + "?");
        computedAnswer = (randomNumber1 + randomNumber2);
    } else {
        $questionBox.html("What is " + randomNumber3 + " * " + randomNumber4 + "?");
        computedAnswer = (randomNumber3 * randomNumber4);
    }	
};



var enteredAnswer;
$inputBox.keyup(function(key){
	if (key.which === 13){
		enteredAnswer = parseInt($inputBox.val());
		checkAnswer(computedAnswer, enteredAnswer);	
	}
});	
$submitButton.click(function(){
	enteredAnswer = parseInt($inputBox.val());
	checkAnswer(computedAnswer, enteredAnswer);
	$inputBox.val('');	
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
	$('#QBox1').html("You Won !!!").css('background-color', 'red');
	// var tryAgain = confirm("Play again?");
	// 	if(tryAgain){
	// 		alert("Lets play!");
	// 		currentBox.html("");
	// 		i = 1;
	// 		startGame();
	// 	} else {
	// 		alert("See you next time!");
	// 	}
};

var answerCorrect = function(){
	if (i === 3 || i === 8 || i === 14){
		fastPass();
	} else if (i === 4 || i === 9 || i === 15) {
		missedDetour();
	} else {	
		i++;
		currentBox.html("");
		$('#QBox1').html("Correct!").css({'background-color': 'pink', 'height': '50px'});
		render();	
	}	

}

var nextQuestion = function(){
	if (i === 3 || i === 8 || i === 14){
		noFastpass();
	} else if (i === 4 || i === 9 || i === 15) {
		detour();
	} else {
		$('#QBox1').html("Wrong! Click here to try again!").css({'background-color': 'red', 'height': '100px'});
	}		
};

var fastPass = function () {
	$('#QBox1').html(" You got fast pass access! Move forward 2 spots!").css({'background-color':'pink', 'height': '180px'});
	i+=2;
	currentBox.html("");
	render();		
};

var noFastpass = function () {
	$('#QBox1').html("That is not correct, You did not get on the Fast Pass and are hiding towards a detour!").css({'background-color': 'red', 'height': '200px'});
	i++;
	currentBox.html("");
	render();
};

var detour = function() {
	$('#QBox1').html("Sorry you hit a detour!" ).css('height', '50px');
	i-=2;
	currentBox.html("");
	render();	
};

var missedDetour = function(){
	$('#QBox1').html("Correct!" + "  You missed the detour continue on your journey!   ").css('background-color', 'pink');
	i++;
	currentBox.html("");
	render();
};









