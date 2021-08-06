const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to our password validator!");
reader.question("Please enter your password:", function (answer) {
  if (answer.length > 10) {
    console.log("Password entered successfully!");
  } else {
    console.log("Password incorrect. Failed.");
  }

  reader.close();
});
