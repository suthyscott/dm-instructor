//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

function sum(num1, num2) {
  let answer = num1 + num2;
  return answer;
}

console.log(sum(2, 2));

//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

const greaterThanFive = function (number) {
  if (number > 5) {
    return true;
  }
  return false;
};

console.log(greaterThanFive(3));

//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

const findZWords = (word) => {
  if (word.toLowerCase().startsWith("z")) {
    return "the name begins with z";
  } else {
    return "the name does not begin with z";
  }
};

//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

const iLove = (name, love) => {
  return `${name} loves ${love}`;
};

console.log(iLove("Aang", "Katara"));
