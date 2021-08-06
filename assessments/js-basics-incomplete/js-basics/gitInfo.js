/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition =
  "Git is a version control program. It allows us to track changes as we make them, and take snapshots of a project at any given point which we can then reference or revert to later. ";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition =
  "GitHub is a remote tracker for git repositories, allowing you to store, update and access projects from multiple devices.";

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

const init = {
  description:
    "Initializes or creates a git repositories in the directory in which it is run.",
  code: "git init"
};

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

const clone = {
  description:
    "Allows us to copy a remote repository from GitHub onto our computer.",
  code: "git clone [url]"
};

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

const status = {
  description:
    "Shows us whether there have been any changes in the repo since the last commit and if they are being tracked or not.",
  code: "git status"
};

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

const add = {
  description: "Tells git to begin tracking changes in the specified files.",
  code: "git add [filename(s) or . for all files]"
};

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

const commit = {
  description:
    "Creates a snapshot or version of the project at the time the command is run.",
  code: 'git commit -m "commit message".'
};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

const push = {
  description:
    "Updates corresponding remote repo with any new commits made since last push.",
  code: "git push"
};
