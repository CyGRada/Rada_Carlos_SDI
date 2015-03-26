
 /*
Carlos Rada
Section 00
Date: 3-14-15
Assignment Name: Math
 */

//alert("Just Testing");

 //Math.round() - basic rounding .5 + goes up .499 and lower goes down

 var num1 =  9.544;
 console.log(num1);
 console.log(Math.round(num1));

 // Math.floor - Always round down
 var num2 = 6.8;
 console.log(num2);
console.log(Math.floor(num2));

 //Math.ceil() - always round up if ther is a decimal

 var num3 =  4.15;
 console.log(num3);
 console.log(Math.ceil(num3));

 //Math.round() - returns a number between 0 and almost 1
 var num4 = Math.random();
 console.log(num4)

 //Random between 0 and 10
 var num5= Math.random() * 10;
 console.log(num5);

 //Random Integer between  0 -> 100

 var num6 = Math.round(Math.random()* 100);
 console.log(num6);

 // Random number between two numbers that does not start at 0

 //Math.random() * (max-min) +min
 //a random number between 50 -> 80
 var num7 = Math.round(Math.random() * (80 - 50) + 50);
 console.log(num7);



 //Math object Constant
 //Area of a circle = radius * radius * Pi

 //Math.PI - true value of pi

 var radius = 7;

 var areaCircle = radius * radius * Math.PI;

 //.toFixed(#) rounds the number to the number of decimals places that matches the number in inside the ()

 console.log(areaCircle.toFixed(3));




















