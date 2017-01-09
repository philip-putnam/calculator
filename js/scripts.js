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
