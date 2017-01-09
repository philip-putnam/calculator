// addition function

var add = function(number1, number2) {
  return number1 + number2;
};

// subtraction function

var sub = function(number1, number2) {
  return number1 - number2;
};

// multiplication function

var mult = function(number1, number2) {
  return number1 * number2;
};

// division function

var divide = function(number1, number2) {
  return number1 / number2;
};


var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = sub(number1, number2);
alert(result);


// BMI Calculator
var bmiCalc = function(height, weight){
  var bmi = (weight * 703) / (height**2);
  return bmi;
};

var bmiDisplay = function(){
  var yourHeight = parseInt(prompt("What is your height in inches?"));
  var yourWeight = parseInt(prompt("What is your weight in pounds to the nearest pound?"));
  alert("Your BMI is " + bmiCalc(yourHeight, yourWeight));
}

bmiDisplay();
