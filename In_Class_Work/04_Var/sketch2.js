// Javascript is known as a "loosly typed" language.
// This is versus a "strictly typed" language.
// In a loosly typed language you DO NOT eed to define data types,when declaring Variables

// NUMBERS (two typess of numbers)
//  integer or int
// an integer is a whole number, positive or negative, including zero
var myInt = 5;
// float
// A float, is any "REAL" number with a decimal place
var myFloat = 5.0123;

// Char or Character
var myChar = 'a';

// String
// A string is any text, surrounded by quotations
var myString = "Hey, how are you";

function setup() {
  console.log(myInt, myFloat, myChar, myString);

  var intPluseFloat = myInt + myFloat;
  console.log(intPlusFloat);

  var intPlusChar = myInt + myChar;
  console.log(intPlusChar);

  var myCharNum = '5';
  // This results "55" because '5' + string(s) = '55'
}

function draw() {

}
