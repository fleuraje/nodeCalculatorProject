var rs = require("readline-sync");

var result = 0;
operations = false;
// operation to get the first name , then prompting lets do some math !
var userName = rs.question("What is your name? ");
console.log("Hi " + userName + ", lets do some math today! ");

// while loop that also asks for the type of math user would like to do and if user puts anything different .
while (!operations) {
  var input = rs.question("What operation would you like to perform? ");
  if (input === "+" || input === "-" || input === "/" || input === "*") {
    operation = true;
    break;
  } else {
    console.log("Not a valid operation");
  }
}
// asking for the first and second number for operation
var firstNumber = rs.questionInt('Please enter the first number ');
var secondNumber = rs.questionInt('Please enter the second number ' );

//creating a function with num1 and num 2 as parameters 
function calculus(num1,num2){
if (input === '+') {
    return result = num1 + num2;
} else if (input === '*') {
    return result = num1 * num2;
} else if( input === '/') {
    return result = num1 / num2;
} else if (input === '-'){
    return result = num1 - num2;
}
}
// storing the result in a variable , then console logging that result to the user !
result = calculus(firstNumber,secondNumber);
console.log('the result for this equation is ' + result) + ' thank you for the challenge !';

