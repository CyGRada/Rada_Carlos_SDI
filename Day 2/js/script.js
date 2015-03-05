/*
Carlos Rada
03/05/2015
Section 00
Day 2 Intro
 */

//alert("Testing to see if connected");

/*
Example of a multilined comment.
Anything inside of here will not be seen by the computer.
 */

// Single line comment. ONLY this line will be ignored.

// Alert box - pop up box that will alert the user with information
alert("Text that the user will see.");

// Console. Log - Shows information to the programmer
// Great for checking values and debugging
// All shows all errors
console.log("This is the console");

// Declare a variable
// Use the keyword of var
var whatever1;

//Define the variable
// Sets the value of the existing variable
whatever1 = 42;

// Console.log the variable
console.log("The variable whatever1 is");
console.log(whatever1);

//Declare and define a variable at the same time.
var a = 2;

console.log(a)

a+3;
a = a + 3;
console.log(a);


// Declare new variable
var b;

//Define this variable using=f and existing variable
b = a+3;
console.log(a);
console.log(b);

//simple Math
//Find our ages


//Declare and Define the year we were born
var yearBorn = 1992;

//2015 - year we are born
 var carlosAge = 2015-yearBorn-1;
console.log(carlosAge);

// Talk about math
// +, -, *, /

// Find the are of a triangle
//base * times height / 2

var base = 8;
var height = 5;

var areaOftriangle= base * height / 2
console.log(areaOftriangle);

//Modulo - %
// Gives the remainder
var decimal = 32/10;
console.log(decimal);

var remainder = 32%10;
console.log(remainder);

//Find out if even or odd
// %2 1=add 0=even
var even0orOdd = 67%2;
console.log(even0orOdd);


//Assignment Operators
/*
= Assigns the value to the variable
++ Adds 1 to the current value of the variable
-- Subtracts 1 from the current value of the variable
+= # Adds the # to the current value of the variable
-= # Subtracts the # from the value of the variable
/= # Divide the current value by the #
*= # Multiply the current value by the #

 */

var assign = 0;

//++ is the same as assign = assign=1;

assign ++;
console.log(assign);

// is the same as assign = assign -1;
assign--;
console.log(assign);

// += # is the same as assign = + #;
assign +=5; // assign = +5;
console.log(assign);

//-= # is the same  as assign = assign - #;
assign -=2;
console.log(assign)

// /= is the same as assign = assign /#;
assign/=3;
console.log(assign);

// *= is the same as assign = assign * #;
assign*=7;
console.log(assign);


// Strings - any text that we use
// Qoutes are needed to distinguosh between variables and plain text

var kermit = "light green";
var frogName = "kermit";
console.log(frogName);

// To double qoute lr not to double
//Can use an escape character \backslash in front of the '
var phrase = "I don\'t know";
console.log(phrase);

// Escape character can also do multiple lines \n - new line character
var phrase2 = "I don't know. \n You never do!";
console.log(phrase2);



// Booleans - Kind of like light switch
// Either true or false
//Not a text string!!! And must be lowercase!!
var yes = true;

var no = false;

// other of operations
// PEMDAS - Please Excuse My Dear Aunt Sally
//Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction

//Find the average quiz grade.
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 90;

//Average - Add them up and fivide by the number of quzes
var average =(quiz1 + quiz2 + quiz3) /3;
console.log(average);

// Concatenation - combining text strings
// use the + plus sign - add and concatenation
var firstName = "Kermit";
var lastName = "The Frog";
var fullName = firstName +" "+ lastName;
console.log(fullName);


var d = "6";
var e = "7";
//If you want the text string to be a number you to cast it
//Number(the text string)
var combined = d+e;
console.log(combined);


var pi= 3.14;

// To round a number we use .toFixed(#)
var num = 5.5678912345;

// Round to 2 decimal places
var n = num.toFixed(2);
console.log(n);

console.log("The rounded number to 2 decimal places places");















