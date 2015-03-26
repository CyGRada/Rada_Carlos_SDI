
 /*
Carlos Rada
Section 00
Date:3-17-15
Assignment Name: Function Worksheet
 */
var radius = prompt("Enter radius");
 while(isNaN(radius) || radius === ""){
     //Re prompt the user
     if(radius === ""){
         //The user left it blank
         radius = prompt("Please do not leave blank");

     } else if(isNaN(radius)){
         radius = prompt("Please enter only type in numbers. \n Enter a number.");
     }

 }

//alert("Just Testing");

 //The circumference of a circle
 function circleCircumference(r){
     //calc radius * 2
     var circumference =  (2 * Math.PI) * r;
     //Return the value
     return circumference;

 }

 // Catch the circumference
 var circleCircumference = circleCircumference(radius);

 //Console.log the results
 console.log("The circumference of the circle is "+circleCircumference);




 // Amount stings to kill
//Variable

 var weightPound = prompt("Enter weight in pounds");
 while(isNaN(weightPound) || weightPound === ""){
     //Re prompt the user
     if(weightPound === ""){
         //The user left it blank
         weightPound = prompt("Please do not leave blank");

     } else if(isNaN(weightPound)){
         weightPound = prompt("Please enter only type in numbers. \n Enter a number.");
     }

 }

 var stingsPound = 8.66666667;



//Stings to kill a person

 function stingsKill(w,s){

          var amountStings = w * s;

     return amountStings;
 }


var killed = stingsKill(weightPound, stingsPound);

 console.log("You died with "+killed+" stings.");
