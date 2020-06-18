var num = 6;
var colors = generateRandomColor(num);
var squares = document.querySelectorAll(".square");
var headVal = document.getElementById("head");	// value of heading in h1
// var massege = document.getElementById("massege");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#EasyBtn');
var hardBtn = document.querySelector("#HardBtn");
var x = document.getElementById("snackbar");

var pickedColor = pickColor();

assignColorToSquares(colors);
checkClicked(pickedColor);
easyMode();
hardMode();
resetAll();

// aasgining colors to squares
function assignColorToSquares(colors) {
	if(num == 3){
		for (var i = 0; i < 3; i++) {
			squares[i].style.backgroundColor = colors[i];
		}
		for (var i = 3; i < 6; i++) {
			squares[i].style.background = "none";
		}
	}
	for (var i = 0; i < num; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	headVal.textContent = pickedColor;
}

function checkClicked(headVal) {
	for (var i = 0; i < num; i++) {
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){		//if true color is picked
				correctGuess(clickedColor);
			}
			else{		//if wrong clor is picked
				wrongGuess(this);
			}
		});
	}
}

function correctGuess(clickedColor) {
	// massege.innerHTML = "Correct";
	h1.style.background = clickedColor;
	changeColors(clickedColor);
	resetButton.textContent = "Play Again?";
	x.innerHTML = "Congratulations";
	myFunction(3000);
}

function wrongGuess(selectedSquare) {
	// massege.innerHTML = "Try Again";
	selectedSquare.style.backgroundColor = "#232323";
	x.textContent = "Wrong";
	myFunction(1000);
}

function changeColors(clickedColor) {
	for (var i = 0; i < num; i++) {
		squares[i].style.backgroundColor = pickedColor;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColor(totalColors) {
	var arr = [];

	for (var i = 0; i < totalColors; i++) {
		arr.push(generateRGB());
	}

	return arr;
}

function generateRGB() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+r+", "+g+", "+b+")";
}

function resetAll() {
	resetButton.innerHTML = "New Game";
	colors = generateRandomColor(num);
	pickedColor = pickColor();
	assignColorToSquares(colors);
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
	// alert("hello");
	resetAll();		
});

function hardMode(){
	hardBtn.addEventListener("click", function () {
		num = 6;
		resetAll();
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
	});
}

function easyMode() {
	easyBtn.addEventListener("click", function () {
		num = 3;
		resetAll();
		hardBtn.classList.remove("selected");
		easyBtn.classList.add("selected");
	})
}



function myFunction(time) {

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ 
  	x.className = x.className.replace("show", ""); 
  }, time);
}