console.log("JS in it.");

var askQuestion;
var currentBox; 
var getAnswer;
var promptInput;
var i = 1;
var computedAnswer;
var totalPoints = 0;
var $questionBox = $('#QBox2'); 
var $inputBox = $('#inputBox');
var $submitButton = $('#submitButton');
var $gameMessage = $('#gameMessage');


var beginGame = document.getElementById("QBox1");
var answerQuestion = document.getElementById("QBox3");


var render = function(){
	if (i === 1) {
		$('#QBox1').html('');
		currentBox = $("#box" +i); 
		currentBox.html('<img src="/assets/school_bus.png">'); 
	} else {
		currentBox = $("#box" +i); 
		currentBox.html('<img src="/assets/school_bus.png">'); 
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
		$inputBox.val('');
	}
});	
$submitButton.click(function(){
	enteredAnswer = parseInt($inputBox.val());
	checkAnswer(computedAnswer, enteredAnswer);
	$inputBox.val('');	
});




var checkForWinner = function() {
	if (i !== 16) {
		return i !== 16;
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
	$('#QBox1').html("You Won !!!").css({'background-color':'#FFD547', 'height': '56px'}).addClass('animated flash');
	$('#box17').addClass('.fun animated tada');
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
	addPoint();	

}

var nextQuestion = function(){
	if (i === 3 || i === 8 || i === 14){
		noFastpass();
	} else if (i === 4 || i === 9 || i === 15) {
		detour();
	} else {
		$('#QBox1').html("Wrong! Click here to try again!").css({'background-color': '#FF5956', 'height': '155px'});
	}		
};

var fastPass = function () {
	$('#QBox1').html(" You got fast pass access!").css({'background-color':'#FFBA54', 'height': '180px', 'margin-top': '-44px', 'font-color': 'red'});
	i+=2;
	currentBox.html("");
	render();		
};

var noFastpass = function () {
	$('#QBox1').html("You did not get on the Fast Pass!").css({'background-color': '#FF5956', 'height': '200px'});
	i++;
	currentBox.html("");
	render();
};

var detour = function() {
	$('#QBox1').html("Sorry you hit a detour!" ).css({'height':'104px', 'background-color':'#FF5956'});
	i-=2;
	currentBox.html("");
	render();	
};

var missedDetour = function(){
	$('#QBox1').html("You missed the detour continue on your journey!   ").css({'background-color': 'pink', 'height': '251px', 'margin-top': '-91px'});
	i++;
	currentBox.html("");
	render();
};

var addPoint = function (){
	var p = parseInt($inputBox.val());
	totalPoints = totalPoints + p;
	console.log(totalPoints);
	$('#pointBox').html(totalPoints);
};






