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

// fahrenheit to celsius

var fahrenToCel = function(temp) {
  var newTemp = ((temp - 32) * 5) / 9;
  return newTemp;
};


// celsius to fahrenheit

var celToFahren = function(temp) {
  var newTemp = ((temp * 9) / 5) +32;
  return newTemp;
};

var usrFahrenTemp = celToFahren(parseInt(prompt("What is the temp in Celsius?")));
var usrCelciusTemp = fahrenToCel(parseInt(prompt("What is the temp in Fahrenheit?")));

alert(usrFahrenTemp);
alert(usrCelciusTemp);
