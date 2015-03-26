
 /*
Carlos Rada
Section 00
Date:3-17-15
Assignment Name:Day 7 Return
 */

//alert("Just Testing");


 //Return a value from our function to our main code

 //Create a function calculate the area of a rectangle
 function calcArea(w,h){
     //calc area
     var area = w*h;
     console.log("Inside the function the area is "+area);
     //Return the area to the main code
     return area;
 }


 //Call the function
 //Create a variable to catch the return value
 var rectArea = calcArea(10,20);

 //Console.log the area
 //console.log(area);
 console.log(rectArea);

 //Create a function to calc the area of a circle
 function circleArea(r){
     //calc area Pi * r * r
     var area = Math.PI * r * r;
     //Return the value
     return area;

 }

 // function call this circleArea
 // Create a variable to catch the returned area
 var circArea = circleArea(6);

 //Console.log the results
 console.log("The area of the circle is "+circArea);

 // What is the twice the circle area of a 6 in circle
 var resultsTwice = circArea * 2;
 console.log("Twice the area is "+resultsTwice);



























