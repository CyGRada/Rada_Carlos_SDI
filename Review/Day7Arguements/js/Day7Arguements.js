
 /*
Carlos Rada
Section 00
Date: 3-17-15
Assignment Name: Day 7 Arguements
 */

//alert("Just Testing");


 //Arguments - Goes unto the function - part of the function call

//Parameters - catch the argument  and in the function definition again!

 function calcArea(w,h){

     //var width = 10;
     //var height = 20;
     var area = w*h;
     console.log("The area is "+area);


 }




 //Call our function
 //Add arguments to the function call
 calcArea(20,40);
 calcArea(10,20);


//prompt the user for width and height
 var width = prompt("Enter a width");

 //Enter validation
 var height = prompt("Enter a height");
 calcArea(width,height);



 //dog years
 function dogYear(humanAge){
     //Dog Years = human years *7;

     var dogAge = humanAge *7;
     console.log("Your age in dog years is "+dogAge);
 }

 //Call the dog function
 dogYear(4);

 //prompt user for human age
 var userInput = prompt("Please enter your human age");

 //call the dog
 dogYear(userInput);































