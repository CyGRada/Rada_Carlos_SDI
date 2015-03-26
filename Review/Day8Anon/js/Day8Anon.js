
 /*
Carlos Rada
Section 00
Date:3-24-15
Assignment Name: Anon
 */

//alert("Just Testing");

 //Basic Function
 /*
 function functionName(){
 }
  */


 //Basic Function call
 var basicArea2 = triangleArea(2,9);
 console.log("The area form the basic function before the definition is "+basicArea2+".");

 /*THIS DOES NOT WORK!
 //Anon function call
 var anonArea2 = triangleAreaAnon(3,4);
 console.log("The area from the anon function before the definitions is "+basicArea2);
 */
 //Anonymous Function

 // var functionName = function(){}

 //Anon Function are extremely popular in JS and jQuery
 // Highly used in Object Oriented Programming
 //Quick and easy
 //You can use either a basic  or anon - FOR NOW

 //Build a function function for area of a triangle

 function triangleArea (b, h){
     //Calc area
     var area = .5*b*h;
     return area;

 }


 //Anon Function
 var triangleAreaAnon = function (b,h) {
     var area = .5*b*h;
     return area;

 }




 //Funtion call to basic function
 var basicArea = triangleArea(5,6);
 console.log("The area from the basic function is "+basicArea+".");

 //function to call




