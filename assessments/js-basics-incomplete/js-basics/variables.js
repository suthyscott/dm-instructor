//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

const myName = "Scott";

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

const faveNum = 21;

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

const lovesCode = true;

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

if (faveNum === 13) {
  console.log("lucky 13!");
} else console.log("not lucky 13!");

// faveNum === 13 ? console.log("lucky 13!") : console.log("not lucky 13!");
// faveNum === 13 ? myName[0] === "S" && 7 === true ? console.log('cool') : console.log('not cool') : console.log('whatever')

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

for (let i = 0; i < 5; i++) {
  console.log(myName);
}
