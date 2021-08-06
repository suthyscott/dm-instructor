const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to the Password validation tool!");

reader.question("What is your password?", function (answer) {
  if (answer.length >= 10) {
    console.log(`
    _____
   / ___/__  _______________  __________
   \__ \/ / / / ___/ ___/ _ \/ ___/ ___/
  ___/ / /_/ / /__/ /__/  __(__  |__  )
 /____/\__,_/\___/\___/\___/____/____/
 `);
    console.log("That is correct, you may pass.");
  } else {
    console.log(`
    ____  __   __  __
    (  __)/ _\ (  )(  )
     ) _)/    \ )( / (_/\
    (__) \_/\_/(__)\____/  `);
    console.log("Eeee! Eeee! Eeee! Failure! That password is incorrect.");
  }
});

// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// console.log("Welcome to the Password validation tool!");

// let password;

// reader.question(
//   "Please create a password: (don't include a space at the beginning)",
//   function (answer) {
//     password = answer;

//     reader.question("What is your password?", function (answer) {
//       if (answer === password) {
//         console.log("That is correct, you may pass.");
//       } else {
//         console.log("Eeee! Eeee! Eeee! Failure! That password is incorrect.");
//       }
//     });
//   }
// );
