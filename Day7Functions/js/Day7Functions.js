
 /*
Carlos Rada
Section 00
Date:3-17-15
Assignment Name: Day 7 Functions
 */

//alert("Just Testing");



 //funciton callprint Hello before it is define in the code
 printHello();
calcArea();


 //Basic structure of a function
 // function functionName(){ code run}

 //Create a function that will console.log out hello

 function printHello (){

     console.log("Hello and Howdy");


 }

 //Create a function that prints out more text
 function printMore(){

     console.log("Prints more text");
 }




 //Function call the printHello function
 //functionHello();
 printHello();
 printMore();
 printHello();

 //Funciton call more

 printMore();



 //Create a function to calculate the area of a rectangle
 function calcArea(){

     //Create variables for width , height and area
     var width = 20;
     var height = 30;
     var area = width * height;

     //Print out area
     console.log("The area is "+area+".");

 }

 calcArea();







































