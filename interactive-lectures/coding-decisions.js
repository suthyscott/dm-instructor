/* In this interactive lecture, we will cover:
  - Conditional logic - check for equality, compare value, check for inequality, if, if/else, if/elseif/else
  - Arrays - create arrays, add item to array, arrays with nums, arrays with strings
  - Loops - loop over arrays, loop specified number of times
*/

// Let's consider a hypothetical. A battle between Jon Snow and Jamie Lannister. Let's create a variable for each of their attack strengths.

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

// Before the battle begins, Jon an Jamie decide to compare attack strengths to get insight into who might win this battle. Using an if-else statement, console.log who has the greater attack strength. DO NOT INCLUDE A TIE JUST YET

if (jonSnowAttack > jamieLannisterAttack) {
  console.log("Jon Snow has better attack than Jamie Lannister");
} else {
  console.log("Jamie Lannister has better attach than Jon Snow");
}

// What if there's a tie? Our code would actually give the win to Jamie, which is no good. Add in an else if to resolve this.

if (jonSnowAttack > jamieLannisterAttack) {
  console.log("Jon Snow has better attach than Jamie Lannister");
} else if (jamieLannisterAttack > jonSnowAttack) {
  console.log("Jamie Lannister has better attach than Jon Snow");
}
