// RULES for naming variables in JS
/*
Variables can only;
1. contain letters(i.e. a-z or A-Z)
2. Numbers
3. or Underscores

Variables can only start with;
1. A lower case letter
2. or uncerscores (but that should be saved for special purposes)
*/



var der;

// Use of capital letters to visually distinguish words
// This is known as camelCase

var my_first_var;

var var1;

// NOT VALID
var 1var;

// A variable
// --> to create we use the keyword "var"
//  this declares to the computer a new piece of reserved memory
// This memory is referenced by the namespace "myFirstVar"


var myFirstVar;


// Assign a value to the variable
// Said "myFirstVar "gets" 60"

var globalVar;
globalVar = 60;

myFirstVar = 120;

function setup() {
  createCanvas(800, 400);


// Variable Scope
// A variable assigd outside of a function has "global scope"

}

function draw() {

  var localVar = 10;

  background(170, 183, 184);


  noFill();
  translate(400,200);
  myFirstVar = 70;
  ellipse(0, 0, globalVar, globalVar);

  myFirstVar = myFirstVar * 0.5;
  ellipse(0, 0, localVar, localVar);
}
